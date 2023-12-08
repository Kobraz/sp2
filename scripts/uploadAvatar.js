const profileIdFromLocalStorage = localStorage.getItem("name");
const profileId = profileIdFromLocalStorage.slice(1, -1);
/* const accessToken = localStorage.getItem("accessToken"); */

console.log("ProfileIDFromLocalStorage: " + profileIdFromLocalStorage);
console.log("ProfileID (sliced): " + profileId);

document.addEventListener("DOMContentLoaded", function () {
  /*  console.log("Token: " + accessToken); */
});

document.getElementById("form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const newAvatarUrl = document.getElementById("imgURL").value;

  console.log("Avatar: " + newAvatarUrl);

  try {
    await updateAvatar(profileId, newAvatarUrl);
  } catch (error) {
    console.error("Error updating avatar:", error);
  }
});

async function updateAvatar(profileId, newAvatarUrl) {
  const url = `https://api.noroff.dev/api/v1/auction/profiles/${profileId}/media`;
  const token = localStorage.getItem("accessToken");
  const accessToken = token.slice(1, -1);

  console.log("Token: " + accessToken);

  console.log("URL: " + url);

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ avatar: newAvatarUrl }),
    });

    console.log("Response: " + response);

    if (!response.ok) {
      /*throw new Error(`HTTP error: ${response.status}`);*/
      const errorMessage = `HTTP error: ${response.status}`;
      const responseText = await response.text(); // Get response body for more information
      console.error(errorMessage);
      console.error("Response:", responseText);

      console.log(`HTTP error: ${response.status}`);

      console.log("Avatar update failed, check the URL of the avatar.");

      return;
    }

    const result = await response.json();
    console.log("Avatar updated successfully:", result);

    console.log("aaaavatar... " + newAvatarUrl);
    localStorage.setItem("avatar", JSON.stringify(newAvatarUrl));
  } catch (error) {
    throw new Error(`Error updating avatar: ${error.message}`);
  }
}

/* console.log("ProfileIDFromLocalStorage: " + profileIdFromLocalStorage);
console.log("ProfileID (sliced): " + profileId); */

/* console.log("Token: " + accessToken); */

/*-----------------------------------------------------------*/
/* 
const apiURL = "https://api.noroff.dev/api/v1/auction/profiles/";
const profileId = localStorage.getItem("name");

function handleUnauthorized(response) {
  if (response.status === 401) {
    alert("You are not authorized to perform this action. Please log in and try again.");
    window.location.href = "/login";
  }
}

async function updateAvatar(data) {
  const response = await fetch(apiURL + `${profileId}/media`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result = await response.json();
    console.log("Avatar updated successfully:", result);
  } else {
    handleUnauthorized(response);
    console.error(`Error updating avatar: ${response.statusText}`);
    console.error(`Response: ${response}`);
    return false;
  }
}
 */
