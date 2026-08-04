// primitive
// 7 types: String,Number,boolean,null,undefined,symbol,BigInt
const score = 100;
const scoreVal = 100.3
 
const IsLogIn = false
const outsideTemp = null
let userEmail

const Id = Symbol('123')
const anoid = Symbol('123')
// console.log(Id === anoid)
const BigNumber = 24546565n

// Reference (Non Primitive)
// Array,Object,Function
const heros = ["kd","md","gd"];
let myobj = {
    name : "kd",
    age : "20",
}
const myfunction = function(){
    console.log("hello world");
}
console.log(typeof myfunction);
