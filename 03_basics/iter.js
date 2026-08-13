const coding = ["js","py","cpp"]
const values = coding.forEach((item)=>{
    console.log(item)
    return item
})
// console.log(values)

const mynums = [1,2,3,4,5,6,7,8,9]
// const newnums = mynums.filter((num) => num>5)
// console.log(newnums)

const newnums = []
mynums.forEach((num) => {
    if(num>4){
        newnums.push(num)
    }
})
// console.log(newnums)

const numbers = [1,2,3,4,5,6,7,8,9,10]
// const mynumber = numbers.map((num)=>num+10)
const mynumber = numbers.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)
console.log(mynumber)

const mynum = [1,2,3]
const total = mynum.reduce(function(acc,currval){
    console.log(`ac: is $(acc),currval is ${currval}`)
    return acc+currval

},0)
console.log(mynum)