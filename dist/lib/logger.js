"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan_1 = require("bunyan");
var logger = (0, bunyan_1.createLogger)({
    name: 'tomodoro',
    level: 'info',
    serializers: bunyan_1.stdSerializers,
});
exports.default = logger;
//# sourceMappingURL=logger.js.map