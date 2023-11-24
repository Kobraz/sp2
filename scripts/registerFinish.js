// Get the access token from local storage
const accessToken = localStorage.getItem("access_token");
const accessTokenSpan = document.getElementById("access-token-span");

// Log the access token to the console
console.log("Access Token:", accessToken);

accessTokenSpan.textContent = accessToken;
