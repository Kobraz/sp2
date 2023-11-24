const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.currentTarget[0].value;
  const password = e.currentTarget[1].value;

  const loginData = {
    email: email,
    password: password,
  };

  fetch(`https://api.noroff.dev/api/v1/auction/auth/login?email=${email}&password=${password}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to fetch data from API");
      }
    })
    .then((data) => {
      console.log("Data", data);
      localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
      localStorage.setItem("name", JSON.stringify(data.name));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("avatar", JSON.stringify(data.avatar));
      localStorage.setItem("credits", JSON.stringify(data.credits));

      window.location.href = "dashboard.html";
    })
    .catch((err) => {
      console.log(err);
      console.error("Error fetching data from API: ", err);
    });
});
