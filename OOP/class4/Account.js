class Account{
    acc_Id;
    acc_Name;
    constructor(id,name){
        this.acc_Id = id;
        this.acc_Name =name;
    }
    get_Bal(){

    }
    deposit_Amout(){}
}

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

console.log(a1.get_Bal())
console.log(a2.get_Bal())
