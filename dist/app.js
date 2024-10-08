"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./app/routes");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFoundRoute_1 = __importDefault(require("./app/middleware/notFoundRoute"));
// express
const app = (0, express_1.default)();
// parsers
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// application routes
app.use("/api/v1", routes_1.routes);
app.get("/", (req, res) => {
    res.send("Welcome to the server side of fitness-equipment-and-accessories ph");
});
// customize error
app.use(globalErrorHandler_1.default);
app.use(notFoundRoute_1.default);
exports.default = app;
