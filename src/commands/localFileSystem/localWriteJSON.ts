import * as fs from 'fs-extra'
import { pathIsDir } from './pathIsDir'

export function localWriteJSON(path:string, object:any, createPath?:boolean){
    if (!pathIsDir(path) && fs.pathExists(path)){
        fs.writeJSON(path, object)
    } else {
        //Invalid path
    }

}