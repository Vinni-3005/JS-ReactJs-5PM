let emp = {
    id:101, name:"rahul", email:'rahul@gmail.com'
}
let details ={ email:"rahul@pm.com", sal:45000}

//create new object using spread operator
let user = { ...emp}

//merge object using spread operator
let emp_detials= {...emp, ...details}

//extending objects

let user_loc={...user, loc:'wayand', mobile:9591}

console.log(emp)
console.log(user)
console.log(emp_detials)
console.log(user_loc)