let regx = "(0/91)?[7-9][0-9]{9}";

let mobileNumber = "959161";


if(mobileNumber.matches(regx)){
   "VALID MOBILE NUMBER"
}else{
   "INVALID MOBILE NUMBER"
}