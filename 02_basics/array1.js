const myheroes = ["ks","kj","jj"]
const myenemies = ["kk","ll","pp"]

myheroes.push(myenemies)
console.log(myheroes)
console.log(myheroes[3][2])

const all=myheroes.concat(myenemies)
console.log(all)

const alln = [...myheroes,...myenemies]
console.log(alln)

const anoarr = [1,2,5,6,[45,4,5,6],8,[4,8,2]]
const ano = anoarr.flat(Infinity)
console.log(ano)

console.log(Array.isArray("kishlay"))
console.log(Array.from("kiahlay"))

let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1,score2,score3))
