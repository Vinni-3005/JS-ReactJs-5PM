class Account{
    acc_Id;
    acc_Name;
    constructor(id,name){
        console.log("Const is a special method - exec auto")
        this.acc_Id= id;
        this.acc_Name =name
    }
    get_Details(){
        console.log(this.acc_Name)
    }
    
}
let a1=new Account(101,'Rahul')
let a2=new Account(102,'Sonia')

console.log(a1)
console.log(a2)

console.log(a1.acc_Name)
console.log(a2.acc_Name)

a1.get_Details()
a2.get_Details()