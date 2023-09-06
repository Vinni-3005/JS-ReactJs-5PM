let goToGoa = (success,failure)=>{
    //   let cc_Status= "paid"
    let cc_Status= "unpaid"
    if(cc_Status ==="paid"){
        success("Go and Enjoy!")
    }
    else{
        failure("Sit and Practise - JS ES6")
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})