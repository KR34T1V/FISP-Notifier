import { pathIsDir } from "./pathIsDir";

/*
[pathSplitDirectory] finds and returns the directory path from a path if it is found, else it returns undifined.
*/
export function pathSplitDirectory (path:string){
    if (path.length){
        let test = /^.*[\/|\\]/
        return(path.substr(0, path.lastIndexOf("\/")));
    }
    else {
        return (undefined);
    }
}