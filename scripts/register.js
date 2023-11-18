const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.currentTarget[0].value;
  const email = e.currentTarget[1].value;
  const password = e.currentTarget[2].value;
  // debugger;
  const payload = {
    name,
    email,
    password,
  };

  // console.log( typeof payload)
  // const prePayload = new FormData(form);
  // const payload = new URLSearchParams(prePayload);

  // console.log(payload);

  console.log('Payload:', payload);
console.log('Headers:', {
 "Content-Type": "application/json",
});

  fetch("https://api.noroff.dev/api/v1/auction/auth/register", {
 method: "POST",
 headers: {
    "Content-Type": "application/json",
    "Content-Length": JSON.stringify(payload).length,
 },
 body: JSON.stringify(payload),
})
 .then((res) => res.json())
 .then((data) => console.log(data))
 .catch((err) => console.log(err));
