// Function to handle form submission
document.getElementById("form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get the value from the imgURL input field
  const newAvatarUrl = document.getElementById("imgURL").value;

  try {
    // Call the updateAvatar function with the obtained URL
    await updateAvatar(profileId, newAvatarUrl);
  } catch (error) {
    console.error("Error updating avatar:", error);
    // Handle errors here
  }
});

async function updateAvatar(profileId, newAvatarUrl) {
  const url = `https://api.noroff.dev/api/v1/auction/profiles/${profileId}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ avatar: newAvatarUrl }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Avatar updated successfully:", result);
  } catch (error) {
    throw new Error(`Error updating avatar: ${error.message}`);
  }
}

// Replace profileId with the actual profile ID
const profileIdFromLocalStorage = localStorage.getItem("name");
const profileId = profileIdFromLocalStorage.slice(1, -1);
