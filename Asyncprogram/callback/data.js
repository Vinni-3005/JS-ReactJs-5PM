let employees=[{id:101,name:"Rahul",salary:45000},
               {id:102,name:"Sonia",salary:55000}
            ]

let createEmployee = (emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}

let get_Employees=()=>{
    setTimeout(()=>{
        //iterate array and construct table rows , and update html table
        let rows=""
        for( employee of employees){
            rows= rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                         </tr>`
        }
        //document.getElementById('t_data').innerHTML="Good Evening"
        document.getElementById('t_data').innerHTML=rows
    },1000)
}

createEmployee({id:103,name:'priyanka', salary:65000},get_Employees)
