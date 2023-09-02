let employees=[
    {id:101,name:"Rahul", salary:45000},
    {id:102,name:"Sonia", salary:55000},
    {id:103,name:"Priyanka", salary:65000},
    {id:104,name:"Modi", salary:165000}

]

let display_Employees = ()=>{
        let rows=""
        employees.map((emp)=>{
            rows= rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.salary}</td>
                            </tr>`
        })
        document.getElementById('tdata').innerHTML=rows
}