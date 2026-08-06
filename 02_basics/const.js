const user = {}
user.id = "123shs"
user.name = "kdj"
user.islogin = false

// console.log(user)

const reguser = {
    email: "kishkay@hhh",
    fullname: {
        userfullname: {
            realname: "kishlay",
            lastname: "dubey"
        }
    }
};

// console.log(reguser.fullname.userfullname);
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "e"};
const obj3 = {5: "d", 6: "f"};
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

const course = {
    coursename : "js",
    courseprice : 999,
    courseteacher : "kd"
}
const {courseteacher} = course
console.log(courseteacher)

// json
// {
//     "name":"ks",
//     "age":"twenty",
//     "fee":"free"
// }



