$(document).ready(function(){
var url = window.location.href;
console.log("Browser URL: " + url);  

var environment = "";
if("http://localhost:3000/" == url){
   environment  =  "ADMIN";
   
}else{
   environment = "USERS";
}
console.log("Environment: " + environment); 

$( "#users_type" ).text( environment  )

});