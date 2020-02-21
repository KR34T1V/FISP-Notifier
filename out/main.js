"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var local_1 = require("./local");
var config = {
    retries: 25,
    delay: 10,
    timeout: 10,
    localIP: ["192.168.0.1", "192.168.1.1"]
};
local_1.localPing(config);
