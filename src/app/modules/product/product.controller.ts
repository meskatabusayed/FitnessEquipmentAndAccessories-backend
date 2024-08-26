import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { ProductServices } from "./product.service"


const getProducts = catchAsync(async (req: Request, res: Response) => {
  const query = req.query
  const result = await ProductServices.getProductsFromDB(query)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  })
})

const getSingleProductById = catchAsync(async (req, res) => {
  const { productId } = req.params
  const result = await ProductServices.getSingleProductByIdFromDB(productId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product retrieved successfully!',
    data: result,
  })
})

const createProduct = catchAsync(async (req, res) => {
  const product = req.body
  const result = await ProductServices.createProductIntoDB(product)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product created successfully',
    data: result,
  })
})

const updateProduct = catchAsync(async (req, res) => {
  const { productId } = req.params
  const product = req.body
  const result = await ProductServices.updateProductIntoDB(productId, product)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product has been updated successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params
  const result = await ProductServices.deleteProductFromDB(productId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  })
})

export const ProductControllers = {
  getProducts,
  getSingleProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}