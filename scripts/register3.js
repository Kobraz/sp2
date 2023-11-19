async function submitForm(e) {
  e.preventDefault();

  const url = "https://api.noroff.dev/api/v1/auction/auth/register";
  const requestBody = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Request failed", error);
  }
}

document.getElementById("registerForm").addEventListener("submit", submitForm);
