
export async function isFile(path:string){
    let test = new RegExp("^.*\/[a-zA-Z_]+$").test(path);

    return (await test);
}