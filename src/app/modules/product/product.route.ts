import { Router } from "express"
import { ProductControllers } from "./product.controller"

const router = Router()

router.get('/', ProductControllers.getProducts)

router.get('/:productId', ProductControllers.getSingleProductById)

router.post('/', ProductControllers.createProduct)

router.put('/:productId', ProductControllers.updateProduct)

router.delete('/:productId', ProductControllers.deleteProduct)

export const ProductRoutes = router