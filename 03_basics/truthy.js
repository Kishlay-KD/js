const useremail = "kd@hf"
if(useremail){
    console.log("found")
}else{
    console.log("not found")
}

// falsy values
// false,0,-0,BigInt 0n,Nan,"",null,undefined

// truthy values
// true,"0",'false',[],function(){},{}
// if(useremail.length === 0){
//     console.log("array is empty")
// }

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}

// nullish coalesing operator (??): null undefined
let val1;
val1 = 5 ?? 10
val1 = undefined ?? 10
val1 = null ?? 10
console.log(val1)

// ternary operator
if (condition) ? true:false
