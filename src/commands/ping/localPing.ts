import * as fs from 'fs-extra';
import * as ping from 'ping';
import {configJSON} from '../../interfaces';
import { pathSplitFileName } from '../localFileSystem/pathSplitFileName';
import { localAppendFile } from '../localFileSystem/localAppendFile';

export function localPing(config:configJSON){
    if (config.localIP.length){
        let pingConfig:ping.PingConfig = {
            timeout: config.timeout,
            min_reply: config.retries
        };
        config.localIP.forEach((IPAddress)=>{
            ping.promise.probe(IPAddress,pingConfig)
            .then((result)=>{
                let output = `\nHostname: [${result.host}]------------------
    IP: ${result.numeric_host}

    Alive: ${result.alive}
    Time: ${result.time}

    Minimum: ${result.min}ms
    Maximum: ${result.max}ms
    ------------------------
    Tests: ${config.retries}
    Average: ${result.avg}ms
    stddev: ${result.stddev}
    `;
                //create data file
                localAppendFile(config.logDirectory, output, true)
            });
        });
    } else {
        //Check Config File! Local Ip's not found.
    }
}