class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;

    constructor(id, name, amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal = this.acc_Bal+amount
    }
    open_Account(){
        console.log(this.acc_Name,"Opened- Account  Successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
        console.log("Amount deposited successfully")
    }
    get_Bal(){}
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
    close_Account(){}
}


let a1=new Account(101,"Rahul", 5000)
let a2=new Account(102,"Sonia",60000)
/* console.log(a1)
console.log(a2) */

a1.open_Account()
a1.deposit_Amount(600)

a2.open_Account()
a2.deposit_Amount(1600)
/* 
console.log(a1)
console.log(a2) */

a1.withdrawl(15)
a2.withdrawl(61600)

console.log(a1)
console.log(a2)