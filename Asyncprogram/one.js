let calcuate= (a,b,op)=>{
    if(op =="sum"){
            return a+b
    }
    if(op=="multi"){
        return a*b
    }
}

let r1=calcuate(10,20,'sum')
let r2=calcuate(10,20,'multi')

console.log(r1) //30
console.log(r2) //200