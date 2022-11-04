let api = "http://127.0.0.1:3000/";
const inputemail = document.getElementsByClassName("inputemail")[0];
const inputpassword = document.getElementsByClassName("inputpassword")[0];



let loginForm = document.getElementById("login-form")
loginForm.addEventListener ("submit", function (e) {
    e.preventDefault();
   
    let email = loginForm.email.value;
    let password = loginForm.password.value;
    console.log(email,password);
    let data = {
        email,
        password,
    };
      fetch(api + "auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res)=> res.json())
      .then((data)=> {
        document.getElementById("success").innerHTML = data.message
        document.getElementById("success").style.color = 'red'
    
        console.log(data);
        if(data.status === "success"){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 2000
              })
              
            window.location.href ="/";
        }



      })
      .catch((err)=> console.log(err))
})
    



