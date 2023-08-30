let validate = ()=>{
    let name = document.getElementById('uName').value ;
    let password = document.getElementById('uPassword').value ;
    if(name ==""){
        //alert("Please Enter User Name")
        document.getElementById('uMessage').innerHTML="Bhaiyya Please User Name"
    }

    if(password==""){
         document.getElementById('pMessage').innerHTML="Please Proper Password"
    }
    //alert("Mic Testing 123")

    return false
}