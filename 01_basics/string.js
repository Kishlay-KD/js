const name = "kd"
const repoCount = 50
// console.log(name+repoCount+"value");

console.log(`my name is ${name},my repoCount is ${repoCount}`);
const gameName = new String('kishlay-kd')

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newstring = gameName.substring(0,4)
console.log(newstring);

const newstring = gameName.slice(-8,4)
console.log(newstring);

const newstring ="     kishlay     "
console.log(newstring);
console.log(newstring.trim());

const url = "https//kd.hdyg%20,in"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));



