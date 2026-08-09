// immediately invoked function expression
(function chai(){
    console.log("db connected")
})();

// (() => {
//     console.log("db connected two")
// })()

((name) => {
    console.log(`db connected two ${name}`);
})('kishlay')