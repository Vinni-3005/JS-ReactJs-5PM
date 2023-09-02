let cars=[
    {model:'swift', brand:'maruthi', price:800000, color:'white'},
    {model:'i20', brand:'hyundai', price:1400000, color:'red'},
    {model:'zen', brand:'maruthi', price:200000, color:'yellow'},
    {model:'nano', brand:'tata', price:300000, color:'blue'},
    {model:'x1', brand:'bmw', price:5800000, color:'gray'},
    {model:'ghost', brand:'RR', price:100, color:'gray'},
    {model:'x2', brand:'bmw', price:7800000, color:'white'},
    {model:'scorpio', brand:'mahindra', price:800000, color:'gray'},
]
//print only white cars
/* 
let new_cars=cars.filter((car)=>{
    return car.color =='white'
})
 */
//console.log(new_cars)
//print only car price below 200

let new_Cars = cars.filter(function(car){
    return car.price>200 || car.color=='white'
})
console.log(new_Cars)