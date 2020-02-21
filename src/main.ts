import { localPing } from './local';
import { configJSON } from './interfaces';

let config:configJSON = {
    retries: 25,
    delay: 10,

    timeout: 10,
    localIP: ["192.168.0.1", "192.168.1.1"]
}

localPing(config);