import Login from "../../model/userModel.js";

$(document).ready(function(){
    $("#login").click(function(){
        let email=$("#email").val();
        let password=$("#password").val();
    
        let login=new Login();
        console.log("object", login);
        
        login.email=email;
        login.password=password;
     
        console.log("login Object",login);  

        userService.addUser(login)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        });
        
        
        
        })
        })