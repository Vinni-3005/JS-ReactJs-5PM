class Account{
    min_Bal = 500
    acc_Bal=0;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
let a1=new Account()

a1.deposit_Amount(5001)

console.log(a1)
console.log(a1.get_Bal())
console.log("****************")
let a2=new Account()
a2.deposit_Amount(50001)


console.log(a2)
console.log(a2.get_Bal())