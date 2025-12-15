function luck(event){
event.preventDefault();



let email= document.getElementById("email").value;

let password= document.getElementById("password").value;

// validation 

if (email === ""){

    alert("Email field is required!")
    return;
};



if (password === ""){

    alert("Password field is required!")
    return;
};


if(password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }



// creditionals 

if (email === "jhon@gmail.com" && password === "12345678"){

    // alert("login succefully")

Swal.fire({
  icon: "success",
  title: "Login Successful",
  text: "Redirecting...",
  
});









setTimeout(function(){

window.location.href = "https://www.instagram.com/";

},3000);

        









}

else {
        // alert("Invalid email or password!");


Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please check your email and password!",
  
});








    }



}