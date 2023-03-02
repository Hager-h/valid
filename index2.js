

//to get data from locale
let arr
  if (window.localStorage.data != null) {
   arr = JSON.parse(window.localStorage.data);
  } else {
    arr = [];
  }

//for login
let pro=document.querySelector(".pro")
let con=document.querySelector(".con")
let ho = document.getElementById("ptext")
      console.log(ho);
let login = document.getElementById("logg");
console.log(login);

  let user2 = document.getElementById("User");
  let pass2 = document.getElementById("pass");
login.addEventListener("click", function (e) {

  let user2 = document.getElementById("User");
  let pass2 = document.getElementById("pass");
  if (user2.value !== "" && pass2.value !== "") {
    if (
      arr.some(
        (d) =>
          d.userNamee === user2.value.trim() &&
          d.password === pass2.value.trim()
      )
    ) {  
      e.preventDefault()
      pro.style.display = "none"
      con.style.display="block"
      ho.textContent=`welcom ${user2.value},, you have successfuly logged in`



      
    } else {e.preventDefault()
      // pro.style.visibility = "visible"
      con.style.display="none"

      let error = document.querySelector(".sign");
      error.style.display = "visible";

      error.textContent = " you are not amember yet,click to sign up";
    }
  } else {
    e.preventDefault();

    let error = document.querySelector(".sign");
    error.style.visibility = "visible";
    error.textContent = " fill the fields , or click to sign up";
  }
  user2.value = "";
  pass2.value = "";
});

// for sign up btn found in login
function goto() {
  window.location.href = "sign.html";
}
