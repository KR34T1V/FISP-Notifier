import * as fs from 'fs-extra'
import { isDir } from './isDir'

export async function localReadJSON(path:string){
    if (!isDir(path) && await fs.pathExists(path)){
        return(await fs.readJSON(path));
    } else {
        return null
        //Invalid Path
    }
}