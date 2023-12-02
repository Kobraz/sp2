window.onload = function () {
  let userName = localStorage.getItem("name");
  let avatar = localStorage.getItem("avatar");
  let email = localStorage.getItem("email");
  let credits = localStorage.getItem("credits");

  let userName2 = userName.replace(/^"(.*)"$/, "$1");

  console.log("Values from localstorage: " + userName + " " + avatar + " " + email + " " + credits + " " + userName2);

  if (userName) {
    document.getElementById("userName").innerHTML = userName;
  }

  if (avatar) {
    document.getElementById("avatar").src = avatar;
  }

  if (email) {
    document.getElementById("email").innerHTML = email;
  }

  if (credits) {
    document.getElementById("credits").innerHTML = credits;
  }
};
