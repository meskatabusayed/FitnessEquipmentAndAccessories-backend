"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.ProductControllers.getProducts);
router.get('/:productId', product_controller_1.ProductControllers.getSingleProductById);
router.post('/', product_controller_1.ProductControllers.createProduct);
router.put('/:productId', product_controller_1.ProductControllers.updateProduct);
router.delete('/:productId', product_controller_1.ProductControllers.deleteProduct);
exports.ProductRoutes = router;
