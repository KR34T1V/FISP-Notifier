import * as fs from 'fs-extra';
import * as ping from 'ping';
import {configJSON} from '../../interfaces';
import { pathSplitFileName } from '../localFileSystem/pathSplitFileName';

export function localPing(config:configJSON){
    if (config.localIP.length){
        let pingConfig:ping.PingConfig = {
            timeout: config.timeout,
            min_reply: config.retries
        };
        config.localIP.forEach((IPAddress)=>{
            ping.promise.probe(IPAddress,pingConfig)
            .then((result)=>{
                let output = `Hostname: ${result.host}
                IP: ${result.numeric_host}
                Alive: ${result.alive}
                Minimum: ${result.min}ms
                Average: ${result.avg}ms
                Maximum: ${result.max}ms
                Time: ${result.time}
                stddev: ${result.stddev}
                `;
                console.log(output);
                console.log(pathSplitFileName(config.logDirectory));
                //create data file
            });
        });
    } else {
        //Check Config File! Local Ip's not found.
    }
}