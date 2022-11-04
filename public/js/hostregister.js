let api = "http://127.0.0.1:3000/";

const inputfirstname = document.getElementsByClassName("inputfirstname")[0];
const inputlastname = document.getElementsByClassName("inputlastname")[0];
const inputemailaddress = document.getElementsByClassName("inputemailaddress")[0];
const inputpassword = document.getElementsByClassName("inputpassword")[0];
const inputconfirmpassword = document.getElementsByClassName("inputconfirmpassword")[0];
let registerForm = document.getElementById("regter-form");
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let firstname = registerForm.firstname.value;
  let lastname = registerForm.lastname.value;
  let emailaddress = registerForm.emailaddress.value;
  let password = registerForm.password.value;
  let confirmPassword = registerForm.confirmPassword.value;
  
  if (registerForm.firstname.value == "" || registerForm.lastname.value == "" || registerForm.emailaddress.value == "" ||registerForm.password.value == "" ||registerForm.confirmPassword.value == "") {
    document.getElementById("succesr").innerHTML =  " không được bỏ trống ling tinh!";
    document.getElementById("succesr").style.color = "red";
  } else 
{

const showMessage = (message) => {
  let messageContainer = document.getElementsByClassName("message")[0];
  messageContainer.innerHTML = `<div class="alert alert-danger">${message}</div>`;
};
  
  
    let data = {
      firstname,
      lastname,
      emailaddress,
      password,
    };
    fetch(api + "auth/hostregister", {
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
      }else{
        showMessage(data.message)
      }
    })
    .catch((err)=> console.log(err))
  }

});


