"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = 8000;
app_1.default.app.listen(port, () => {
    console.log("Server running in port " + port);
});
exports.default = app_1.default;
//# sourceMappingURL=server.js.map