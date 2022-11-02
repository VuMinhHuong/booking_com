let userBtn = document.getElementById("userBtn")
let hostBtn = document.getElementById("hostBtn")
let appUser = document.getElementById("appUser")
let appHost = document.getElementById("appHost")

// console.log(userBtn);
// console.log(hostBtn);
// console.log(appUser);
// console.log(appHost);
userBtn.onclick = () => {
    appUser.style.display = "block";
    appHost.style.display = "none";
}
hostBtn.onclick = () => {
    appHost.style.display = "block";
    appUser.style.display = "none";
}
