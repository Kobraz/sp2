window.onload = function () {
  let userName = localStorage.getItem(name);
  let avatar = localStorage.getItem("avatar");
  let email = localStorage.getItem("email");
  let credit = localStorage.getItem("credit");

  if (userName) {
    document.getElementById("userName").innerHTML = userName;
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
