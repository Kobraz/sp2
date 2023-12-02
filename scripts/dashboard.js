window.onload = function () {
  let userName = localStorage.getItem("name");
  let avatar = localStorage.getItem("avatar");
  let email = localStorage.getItem("email");
  let credits = localStorage.getItem("credits");

  let rUserName = JSON.parse(userName);
  let rAvatar = JSON.parse(avatar);
  let rEmail = JSON.parse(email);
  let rCredits = JSON.parse(credit);

  if (rUserName) {
    document.getElementById("userName").innerHTML = rUserName;
  }

  if (rAvatar) {
    document.getElementById("avatar").src = rAvatar;
  }

  if (rEmail) {
    document.getElementById("email").innerHTML = rEmail;
  }

  if (rCredits) {
    document.getElementById("credit").innerHTML = rCredits;
  }
};
