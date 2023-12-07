// Frontend code
async function uploadAvatar(e) {
  e.preventDefault();
  const imgURL = document.getElementById("imgURL").value;

  if (!imgURL) {
    alert("Please enter a valid image URL");
    return;
  }

  const avatarURL = await fetchAvatarURL(imgURL);
  console.log(avatarURL);

  // Update the avatar URL displayed on the webpage
  const avatarImage = document.getElementById("avatar");
  avatarImage.src = avatarURL;
}

async function fetchAvatarURL(imgURL) {
  const response = await fetch("/api/v1/auction/profiles/{name}/media", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imgURL }),
  });

  if (!response.ok) {
    throw new Error(`Error updating avatar: ${response.statusText}`);
  }

  const data = await response.json();
  return data.avatarURL;
}

// Backend code
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(bodyParser.json());

app.put("/api/v1/auction/profiles/:name/media", (req, res) => {
  // Retrieve the updated avatar URL from the server's response
  const avatarURL = "https://example.com/updated-avatar-url";

  res.json({ avatarURL });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
