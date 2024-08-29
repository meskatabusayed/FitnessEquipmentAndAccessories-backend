import { ErrorRequestHandler } from "express"
import { TErrorSources } from "../interface/error.interface"
import handleValidationError from "../error/mongooseValidationError"
import handleDuplicateError from "../error/handleDuplicateError"
import handleCastError from "../error/handleCastError"
import config from "../../config"



const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Check if headers are already sent to prevent setting them again
  if (res.headersSent) {
    return next(err)
  }

  let statusCode = err?.statusCode || 500
  let message = err?.message || 'Something went wrong'
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ]
  
  if (err?.name === 'ValidationError') {
    const simplifiedErrorResponse = handleValidationError(err)
    statusCode = simplifiedErrorResponse.statusCode
    message = simplifiedErrorResponse.message
    errorSources = simplifiedErrorResponse.errorSources
  } else if (err?.code === 11000) {
    const simplifiedErrorResponse = handleDuplicateError(err)
    statusCode = simplifiedErrorResponse.statusCode
    message = simplifiedErrorResponse.message
    errorSources = simplifiedErrorResponse.errorSources
  } else if (err?.name === 'CastError') {
    const simplifiedErrorResponse = handleCastError(err)
    statusCode = simplifiedErrorResponse.statusCode
    message = simplifiedErrorResponse.message
    errorSources = simplifiedErrorResponse.errorSources
  }
 
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.node_env === 'development' ? err?.stack : null,
  })
}

export default globalErrorHandler;