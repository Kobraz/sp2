document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var avatar = document.getElementById("avatar").value;

  var payload = {
    name,
    email,
    password,
    avatar,
  };

  console.log(payload);

  fetch("https://api.noroff.dev/api/v1/social/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
