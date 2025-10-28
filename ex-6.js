let height = undefined;
let result;
function check (height){
    // if(height === undefined){
    //     result = `Height is not defined`
    // }
    return result = height ?? `Height is not defined`
    //  return result = height === undefined ? `Height is not defined`: height
    
}
check(height)
console.log(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
