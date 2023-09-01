//import Account from "./Account";
const Account = require('./Account')
class SA extends Account{
        acc_Bal=0;
        min_Bal=500;
        constructor(id,name,amount){
            super(id,name)
            this.acc_Bal = amount
        }
        get_Bal(){
            return this.acc_Bal - this.min_Bal
        }
}

let a1= new SA(101,'rahul',5001)

console.log(a1)
console.log(a1.get_Bal())