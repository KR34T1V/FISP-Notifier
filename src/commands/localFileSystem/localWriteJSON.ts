import * as fs from 'fs-extra'
import { isDir } from './isDir'

export function localWriteJSON(path:string, object:any, createPath?:boolean){
    if (!isDir(path) && fs.pathExists(path)){
        fs.writeJSON(path, object)
    } else {
        //Invalid path
    }

}