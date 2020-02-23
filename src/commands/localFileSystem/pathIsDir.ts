/*
[pathIsDir] checks if a file path string ends with a '/' and returns true if it does, else it returns false
*/

export function pathIsDir(path:string){
   let test = new RegExp(/.*\/$/).test(path);
   return (test);
}