document.addEventListener("DOMContentLoaded", function () {
  const profileIdFromLocalStorage = localStorage.getItem("name");
  const profileId = profileIdFromLocalStorage.slice(1, -1);
  const accessToken = localStorage.getItem("accessToken");

  document.getElementById("form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const newAvatarUrl = document.getElementById("imgURL").value;

    try {
      await updateAvatar(profileId, newAvatarUrl);
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  });

  async function updateAvatar(profileId, newAvatarUrl) {
    const url = `https://api.noroff.dev/api/v1/auction/profiles/${profileId}/media`;

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
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Avatar updated successfully:", result);
    } catch (error) {
      throw new Error(`Error updating avatar: ${error.message}`);
    }
  }

  console.log("ProfileIDFromLocalStorage: " + profileIdFromLocalStorage);
  console.log("ProfileID (sliced): " + profileId);
});

console.log("ProfileIDFromLocalStorage: " + profileIdFromLocalStorage);
console.log("ProfileID (sliced): " + profileId);
