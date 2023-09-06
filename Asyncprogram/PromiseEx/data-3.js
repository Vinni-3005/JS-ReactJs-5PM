let employees =[{id:101,name:'Rahul',salary:45000},
{id:102,name:'Sonia',salary:55000}]

let create_Emplyee=(emp)=>{
    return new Promise(()=>{
        setTimeout(()=>{},4000)
    })
}

let get_Employees=()=>{
    setTimeout(()=>{},1000)
}
create_Emplyee({id:103,name:'Priyanka',salary:65000})
.then()
.catch()