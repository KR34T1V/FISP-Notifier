import * as fs from 'fs-extra'
import { pathIsDir } from './pathIsDir'

export async function localReadJSON(path:string){
    if (!pathIsDir(path) && await fs.pathExists(path)){
        return(await fs.readJSON(path));
    } else {
        return null
        //Invalid Path
    }
}