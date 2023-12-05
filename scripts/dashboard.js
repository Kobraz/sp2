window.onload = function () {
  //retrieving values from local storage//
  let userName = localStorage.getItem("name");
  let avatar = localStorage.getItem("avatar");
  let email = localStorage.getItem("email");
  let credits = localStorage.getItem("credits");

  // if any information is missing from local storage //
  if (!userName || !avatar || !email || !credits) {
    let answer = window.confirm("You are currently not logged in - do you wish to log in?");

    // if user answers Yes, redirect them to the login.html page //
    if (answer) {
      window.location.href = "login.html";
    }
    // if user answers No, close the popup //
    else {
      if (document.getElementById("creds")) {
        document.getElementById("creds").innerHTML = "<a class='nav-link' href='login.html'>Log in</a>";
      }
      window.close();
      let imageElement = document.getElementById("avatar");
      if (imageElement) {
        imageElement.src = "https://rfh-sp2auction.netlify.app/image/no_avatar1.png";
      }
      if (document.getElementById("Logoff")) {
        document.getElementById("Logoff").style.display = "none";
      }
    }
  }

  //removeing double quotation marks from variables//
  let userName2 = userName.replace(/^"(.*)"$/, "$1");
  let email2 = email.replace(/^"(.*)"$/, "$1");

  //finding the image-element from html-document//
  let imageElement = document.getElementById("avatar");

  //remove the first and the last character from the avatar-link (double quotation marks)//
  let avatar2 = avatar.slice(1, -1);

  //console.log values from local storage, and new values after removing double quotation marks//
  console.log("Values from localstorage: " + userName + " " + avatar + " " + email + " " + credits);
  console.log("New values: " + userName2 + " " + avatar2 + " " + email2);

  //insert value userName2 into html doc//
  if (userName2) {
    document.getElementById("userName").innerHTML = userName2;
  }

  //insert value avatar2 into image-element in html doc//
  if (avatar2) {
    imageElement.src = avatar2;
  }

  //insert value email2 into html doc//
  if (email2) {
    document.getElementById("email").innerHTML = email2;
  }

  //insert value credits into html doc//
  if (credits) {
    document.getElementById("credits").innerHTML = credits;
  }
};
