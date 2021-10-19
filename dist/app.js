"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./lib/logger"));
var log = logger_1.default.child({ test: 'Testing stuff' });
log.info('This should have the app name');
var names = ["Alice", "Bob", "Eve"];
//# sourceMappingURL=app.js.map