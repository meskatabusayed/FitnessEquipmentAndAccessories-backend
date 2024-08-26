import buildQuery from "../../builder/queryBuilder"
import { TProduct } from "./product.interface"
import productModel from "./product.model"

const getProductsFromDB = async (query: Record<string, unknown>) => {
  const searchAbleFields = ['name', 'category']
  const result = await buildQuery(productModel.find(), query, searchAbleFields)
  // const result = await productModel.find()
  return result
}

const getSingleProductByIdFromDB = async (productId: string) => {
  const result = await productModel.findById(productId)
  return result
}

const createProductIntoDB = async (product: TProduct) => {
  const result = await productModel.create(product)
  return result
}

const updateProductIntoDB = async (
  productId: string,
  product: Partial<TProduct>,
) => {
  const result = await productModel.findByIdAndUpdate(productId, product, {
    new: true,
  })
  return result
}

const deleteProductFromDB = async (productId: string) => {
  const result = await productModel.findByIdAndDelete(productId)
  return result
}

export const ProductServices = {
  getProductsFromDB,
  getSingleProductByIdFromDB,
  createProductIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
}