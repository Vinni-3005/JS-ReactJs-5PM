class Employee{
 constructor(){
        console.log("Employee - class Constructor")
    }
}

class PE extends Employee{
    constructor(){
        console.log("PE - class Constructor")
    }
}
new PE()