
const inputemail = document.getElementsByClassName("inputemail")[0];
const inputpassword = document.getElementsByClassName("inputpassword")[0];

let email = "nguyentruongan@gmail.com";
let password = "hoaian2807";
let loginForm = document.getElementById("login-form")
loginForm.onsubmit = function (e) {
    e.preventDefault();
    if(loginForm.email.value == "" || loginForm.password.value == ""){
        document.getElementById("success").innerHTML = 'Email hoặc password không được bỏ trống!'
        document.getElementById("success").style.color = 'red'
    } else
    if(loginForm.email.value !== email || loginForm.password.value !== password){
        document.getElementById("success").innerHTML = 'Sai email hoac mat khau'
        document.getElementById("success").style.color = 'red'
    }  else {
        document.getElementById("success").innerHTML = 'dang nhap oke'
        document.getElementById("success").style.color = 'green'
    }
    
    
}



// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // let email = loginForm.email.value
//   // console.log(email);
//   // let password = loginForm.password.value
//   // console.log(password);
//   if (inputemail.value == "") {
//     inputemail.style.border = "1px solid red";
//   }
//   if (inputpassword.value == "") {
//     inputpassword.style.border = "1px solid red";
//   }
// });
