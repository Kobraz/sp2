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
        const data = res.json();
        console.log("Data", data);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken);
        window.location.href = "dashboard.html";
        return data;
      } else {
        throw new Error("Failed to fetchdata from API");
      }
    })
    .catch((err) => {
      console.log(err);
      console.error("Error fetching data from API: ", err);
    });
});
