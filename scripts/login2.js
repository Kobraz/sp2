//debug this code?

fetch(`https://api.noroff.dev/api/v1/auction/auth/login?email=${email}&password=${password}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: password,
  }),
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch data from API");
    }
  })
  .then((data) => {
    if (data.exists) {
      console.log("Data exists:", data);
    } else {
      console.log("Data does not exist");
    }
  })
  .catch((err) => {
    console.log(err);
    console.error("Error fetching data from API: ", err);
  });
