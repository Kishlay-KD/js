function my(){
    console.log("kishlay")
}
// my()

// function my1(num1, num2){
//     console.log(num1+num2)
// }
my1(5,6)
const result = my1(3,6)
// console.log("result:",result)

function my1(num1, num2){
    const ans = num1+num2
    return ans
}

function login(name = "sam"){
    if(name === undefined){
        // console.log("please enter a name")
    }
    return(`${name}, just log in`)
}
// console.log(login("kishlay"))
// console.log(login())

function price(...num1){
    return num1
}
// console.log(price(200,300,400))

const user = {
    name : "kd",
    roll : 10,
}
function handleobj(anyobj){
    console.log(`username is ${user.name},roll is ${anyobj.roll}`)
}
handleobj(user)

const array = [10,20,30,40]
function getsecelement(getArray){
    return getArray[2]
}
console.log(getsecelement(array))