async function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://api.noroff.dev/api/v1/auction/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    // handle the response here
  } catch (error) {
    console.error("Error:", error);
  }
}

document.getElementById("loginButton").addEventListener("click", login);
