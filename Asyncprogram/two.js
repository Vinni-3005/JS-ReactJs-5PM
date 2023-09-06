let sum = (a,b)=>{return a+b}

let multi = (a,b)=>{return a*b}

let calcuate = (a,b,callback)=>{
    return callback(a,b)
}

let r1=calcuate(10,20,sum)
let r2=calcuate(10,20,multi)

console.log(r1) //30
console.log(r2) //200