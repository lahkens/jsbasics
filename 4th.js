//ERROR HANDLIG

// try{
//     const a=10;
//     //a=11;
//     //throw new Error("a is const");
// }catch(err){console.log(err)}




//function
function square(x){
    //local variable x
    return x+3
}

console.log(square(3))

const a=12;
const b =26;
if(a>b){
    //let c=true//only in this block
    //var c=true;//this is available outside but is undefined
    console.log("a is greater",c);
}
else{
    console.log("b is greater",c);
}