const Account = require('./Account')
class CA extends Account{
    acc_Bal=0;
    min_Bal = 25000;
    constructor(id,name,amount){
        super(id,name)
        this.acc_Bal = amount
    }
    get_Bal(){
            return this.acc_Bal - this.min_Bal
    }
}

let a2=new CA(102,'Priyanka',10000000)

console.log(a2)


console.log(a2.get_Bal())
