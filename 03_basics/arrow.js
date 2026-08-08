const user = {
    name : "kishlay",
    price : 333,

    welcome : function(){
        console.log(`${this.name},welcome to website`)
        console.log(this)
        
    }
}
// user.welcome()
console.log(this)

function chai(){
    name : "kishlay"
    console.log(this.name)
}
chai()
