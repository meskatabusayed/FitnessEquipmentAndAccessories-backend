"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const product_service_1 = require("./product.service");
const getProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield product_service_1.ProductServices.getProductsFromDB(query);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Products retrieved successfully',
        data: result,
    });
}));
const getSingleProductById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.ProductServices.getSingleProductByIdFromDB(productId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Product retrieved successfully!',
        data: result,
    });
}));
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    const result = yield product_service_1.ProductServices.createProductIntoDB(product);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const product = req.body;
    const result = yield product_service_1.ProductServices.updateProductIntoDB(productId, product);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Product has been updated successfully',
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Product deleted successfully',
        data: result,
    });
}));
exports.ProductControllers = {
    getProducts,
    getSingleProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
