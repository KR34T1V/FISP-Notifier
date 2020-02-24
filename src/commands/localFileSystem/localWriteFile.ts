import * as fs from 'fs-extra'
import { pathIsDir } from './pathIsDir'
import { pathSplitDirectory } from './pathSplitDirectory'
import { pathSplitFileName } from './pathSplitFileName';

export function localWriteFile(path:string, object:any, createPath?:boolean){
    let dir = pathSplitDirectory(path);
    //check if path exists //Error
    if (pathIsDir(path)){
        console.log("oops")
        pathSplitDirectory(path)
        fs.writeFile(path, object)
    } else if (createPath){
        if (dir)
            fs.mkdirpSync(dir);
            fs.writeFileSync(path, object)
    }
    else {
        //Invalid path
    }

}