let api = "http://127.0.0.1:3000/";

const inputfirstname = document.getElementsByClassName("inputfirstname")[0];
const inputlastname = document.getElementsByClassName("inputlastname")[0];
const inputemailaddress = document.getElementsByClassName("inputemailaddress")[0];
const inputpassword = document.getElementsByClassName("inputpassword")[0];
const inputconfirmpassword = document.getElementsByClassName("inputconfirmpassword")[0];
// let firstname = "An";
// let lastname = "Nguyen";
// let emailaddress = "nguyentruongan@gmail.com";
// let password = "hoaian2807";
// let confirmPassword = "hoaian2807";
let registerForm = document.getElementById("regter-form");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (registerForm.firstname.value == "" || registerForm.lastname.value == "") {
    document.getElementById("sucece").innerHTML =
      "Firstname hoặc Lastname không được bỏ trống!";
    document.getElementById("sucece").style.color = "red";
  } else
   if (
    registerForm.emailaddress.value == "" ||
    registerForm.password.value == "" ||
    registerForm.confirmPassword.value == ""
  ) {
    document.getElementById("succesr").innerHTML =
      "Email address hoặc password hoặc ConfirmPassword không được bỏ trống";
    document.getElementById("succesr").style.color = "red";
  }  else {
    let firstname = registerForm.firstname.value;
    let lastname = registerForm.lastname.value;
    let emailaddress = registerForm.emailaddress.value;
    let password = registerForm.password.value;
  
    let data = {
      firstname,
      lastname,
      emailaddress,
      password,
    };
    fetch(api + "auth/register", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data);
      if(data.status === "success"){
          window.location.href ="/";
      }
    })
    .catch((err)=> console.log("kkk"))
  }
//   else {
//     document.getElementById("succesr").innerHTML = "Đăng ký thành công";
//     document.getElementById("succesr").style.color = "green";
//   }
});

//   let firstname = registerForm.firstname.value;
//   console.log(firstname);
//   let lastname = registerForm.lastname.value;
//   console.log(lastname);
//   let emailaddress = registerForm.emailaddress.value;
//   console.log(emailaddress);
//   let password = registerForm.password.value;
//   console.log(password);
//   let confirmPassword = registerForm.confirmPassword.value;
//   console.log(confirmPassword);
//   if (inputfirstname.value == "") {
//       inputfirstname.style.border = "1px solid red";
//   }
//   if (inputlastname.value == ""){
//     inputlastname.style.border = "1px solid red"
//   }
//   if (inputemailaddress.value == ""){
//     inputemailaddress.style.border = "1px solid red"
//   }
//   if (inputpassword.value == ""){
//     inputpassword.style.border = "1px solid red"
//   }
//   if (inputconfirmpassword.value == ""){
//     inputconfirmpassword.style.border = "1px solid red"
//   }
// });
