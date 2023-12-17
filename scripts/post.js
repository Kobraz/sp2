const token = localStorage.getItem("accessToken");
const accessToken = token.slice(1, -1);
let jsonFormData;

console.log("Token: " + accessToken);

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const postTitle = document.getElementById("postTitle");
  const postDescription = document.getElementById("postDescription");
  const postTags = document.getElementById("postTags");
  const postMedia = document.getElementById("postMedia");
  const postDeadline = document.getElementById("postDeadline");

  const jsonFormData = {
    title: postTitle.value,
    description: postDescription.value,
    tags: [postTags.value],
    media: [postMedia.value],
    endsAt: postDeadline.value,
  };

  console.log("Updated jsonFormData:.. ", jsonFormData);

  fetch("https://api.noroff.dev/api/v1/auction/listings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonFormData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Form data successfully sent:", data);
    })
    .catch((error) => {
      console.error("There was a problem sending the form data:", error);
    });
});
