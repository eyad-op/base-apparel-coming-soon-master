const errMsg = document.getElementById("errMsg");
const errImg = document.getElementById("errImg");
const email = document.getElementById("email");

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
document.getElementById("subBtn").addEventListener("click", function () {
  if (email.value.match(validRegex)) {
    errMsg.style.display = "none";
    errImg.style.display = "none";
  } else {
    errMsg.style.display = "block";
    errImg.style.display = "block";
  }
});
