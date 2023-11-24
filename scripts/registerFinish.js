const accessToken = localStorage.getItem("access_token");
const accessTokenSpan = document.getElementById("access-token-span");

accessTokenSpan.textContent = "AccessToken: " + accessToken;

console.log("Access Token:", accessToken);

accessTokenSpan.textContent = accessToken;
