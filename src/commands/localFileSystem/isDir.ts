
export async function isDir(path:string){
   let test = await new RegExp("/.*\/$/").test(path);
   return (test);
}