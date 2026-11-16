console.log("Scrip cargando correctamente");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Tu cuenta ha sido creada exitosamente ")
});


function verification(){

 let password = document.getElementById('password');
 let confirmPassword = document.getElementById('confirmpassword');

 let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!regex.test(password.value)) {

        document.getElementById("passError").style.display = "block";

        return false;
    }

    document.getElementById("passError").style.display = "none";

if(password.value != confirmPassword.value){
    document.getElementById("matchError").style.display("block")

    return false;   

}else{

    document.getElementById("matchError").style.display("none");
    
    return true;
   
}
}

let togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");

togglePassword.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

});

let toggleConfirm = document.getElementById("toggleConfirm");
let confirmPassword = document.getElementById("confirmPassword");

toggleConfirm.addEventListener("click", function() {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }

});