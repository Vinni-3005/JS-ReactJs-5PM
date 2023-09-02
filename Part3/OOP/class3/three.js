class Employee{
    constructor(){
        console.log("Employee Class - constructor")
    }
}

class PE extends Employee{
    constructor(){
        super()
        console.log("PE class const");
    }
}
new PE()
