let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString);
console.log(mydate.toLocaleString);
console.log(typeof mydate);

let mycreateddate = new Date()
console.log(mycreateddate.toDateString());
let mycreateddate = new Date("01-12-2005")
console.log(mycreateddate.toLocaleString);

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());

let newdate = new Date();
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth() +1);