let emp = {
    id:101, name:"rahul", email:'rahul@gmail.com'
}
let details ={ email:"rahul@pm.com", sal:45000}


//merge object using spread operator
let emp_detials= {...emp, ...details}

console.log(emp_detials)