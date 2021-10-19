"use strict";
exports.__esModule = true;
var logger_1 = require("./src/lib/logger");
var log = logger_1["default"].child({ test: 'Testing stuff' });
log.info('This should have the app name');
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
