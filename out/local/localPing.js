"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ping = __importStar(require("ping"));
function localPing(config) {
    if (config.localIP.length) {
        var pingConfig_1 = {
            timeout: config.timeout,
            min_reply: config.retries
        };
        config.localIP.forEach(function (IPAddress) {
            ping.promise.probe(IPAddress, pingConfig_1)
                .then(function (result) {
                var output = "Hostname:" + result.host + "\n                Host-IP:" + result.numeric_host + "\n                Alive:" + result.alive + "\n                Minimum:" + result.min + "\n                Average" + result.avg + "\n                Maximum:" + result.max + "\n                Time:" + result.time + "\n                stddev:" + result.stddev + "\n                ";
                console.log(output);
            });
        });
    }
    else {
        //Check Config File! Local Ip's not found.
    }
}
exports.localPing = localPing;
