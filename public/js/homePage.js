let baseApi = "http://127.0.0.1:3000/";

//Carosel navbar
$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 5,
  nav: true,
  navText: ["<", ">"],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 10,
    },
  },
});

//Dom drop down signin-out
let logInOut = document.getElementById("login-out");
let dropDownInOut = document.getElementById("dropDownInOut");

let inOutCount = 0;
logInOut.onclick = function () {
  inOutCount += 1;
  // console.log(inOutCount);
  if (inOutCount % 2 === 0) {
    dropDownInOut.style.display = "block";
  } else {
    dropDownInOut.style.display = "none";
  }
};

