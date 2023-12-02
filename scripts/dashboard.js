window.onload = function () {
  let userName = localStorage.getItem("name");
  let avatar = localStorage.getItem("avatar");
  let email = localStorage.getItem("email");
  let credit = localStorage.getItem("credit");

  let rUserName = JSON.parse(userName);

  if (rUserName) {
    document.getElementById("userName").innerHTML = rUserName;
  }

  if (avatar) {
    document.getElementById("avatar").src = avatar;
  }

  if (email) {
    document.getElementById("email").innerHTML = email;
  }

  if (credit) {
    document.getElementById("credit").innerHTML = credit;
  }
};
