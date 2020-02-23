import { pathIsDir } from "./pathIsDir";

/*
[pathSplitFileName] finds and returns a filename from a path if it is found, else it returns undifined.
*/
export function pathSplitFileName (path:string){
    if (path.length && !pathIsDir(path)){
        let test = /^.*[\/|\\]/
        return (path.replace(test, ''));
    }
    else {
        return (undefined);
    }
}