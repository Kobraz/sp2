async function updateAvatar(profileId, newAvatarUrl) {
  const url = `https://api.noroff.dev/api/v1/auction/profiles/${profileId}`;

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
}

updateAvatar(profileId, newAvatarUrl);
