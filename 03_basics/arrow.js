const user = {
    name : "kishlay",
    price : 333,

    welcome : function(){
        console.log(`${this.name},welcome to website`)
        console.log(this)
        
    }
}
// user.welcome()
// console.log(this)

function chai(){
    name : "kishlay"
    console.log(this.name)
}
// chai()

const add = (num1,num2) => {
    return num1+num2
}
// console.log(add(1,2))


// implicit return
const add1 = (num1,num2) => num1+num2
// console.log(add1(1,2))

const add2 = (num1,num2) => ({user:"hitesh"})
console.log(add2(1,2))
