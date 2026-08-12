// for 
// [{},{},{}]
// ["","",""]

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(num)
}

const greeting = "hello world"
for(const greet of greeting){
    // console.log(`each char is,${greet}`)
}

// map
const map = new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
map.set('Fr',"france")
// console.log(map)

for(const [key,value] of map){
    console.log(key,":-",value)
}

const myobj = {
    js : "javascript",
    py : "python",
    cpp : "C++"
}
for(const key in myobj){
    // console.log(key)
}

const coding = ["js","py","cpp"]
coding.forEach(function(val){
    console.log(val)
})

coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})
