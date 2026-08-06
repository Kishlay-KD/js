const myarr = [1,2,3,4,5]
const myname = ["kd","hg","hd"]

const myarr2 = new Array(1,2,3,4)
console.log(myarr2[2]);

// array methods
myarr.push(5)
myarr.pop()
myarr.unshift(9)
myarr.shift()
console.log(myarr)
console.log(myarr.includes(9))
console.log(myarr.indexOf(3))

const newarray = myarr.join()
console.log(myarr)
console.log(newarray)

// slice,splice
console.log("A "+myarr)

const my1 = myarr.slice(1,3)
console.log(my1)
console.log("B "+myarr)

const my2 = myarr.splice(1,3)
console.log(my2)
console.log("c "+myarr)