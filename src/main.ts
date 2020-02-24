import { localPing } from './commands/ping';
import { configJSON } from './interfaces';

let config:configJSON = {
    logDirectory: 'logs/testlog.log',
    retries: 25,
    delay: 10,

    timeout: 10,
    localIP: ["192.168.0.1", "192.168.1.1", "google.com", "yahoo.com"]
}

localPing(config);