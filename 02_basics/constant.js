
const jsuser = {
    name : "kh",
    
    location : "pathrahi",
    age : 20,
    email : "kd@kdjd",
    
}
// console.log(jsuser.email)
// console.log(jsuser["email"])

jsuser.email = "ksjh@hhe"
// Object.freeze(jsuser)

jsuser.email = "jgdug@gg"
// console.log(jsuser)

jsuser.greeting = function () {
    console.log("hello js user");
};

jsuser.greeting2 = function () {
    console.log(`hello js user, ${this.name}`);
};

jsuser.greeting();
jsuser.greeting2();