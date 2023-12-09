document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = new FormData(document.getElementById("form"));

  console.log("formData: " + formData);

  const postTitle = document.getElementById("postTitle").value;
  const postDescription = document.getElementById("postDescription").value;
  const postTags = document.getElementById("postTags").value;
  const postDeadline = document.getElementById("postDeadline").value;

  console.log("Post Title: " + postTitle);
  console.log("Post Description: " + postDescription);
  console.log("Post Tags: " + postTags);
  console.log("Post Deadline: " + postDeadline);

  document.getElementById("addImageButton").addEventListener("click", function () {
    // Get all input elements with class 'postImage'
    const inputs = document.querySelectorAll(".postImage");

    // Log the values of all input elements
    inputs.forEach(function (input) {
      console.log(input.value);
    });
  });

  // Convert FormData to JSON
  const jsonFormData = {};
  formData.forEach((value, key) => {
    if (jsonFormData[key]) {
      if (!Array.isArray(jsonFormData[key])) {
        jsonFormData[key] = [jsonFormData[key]];
      }
      jsonFormData[key].push(value);
    } else {
      jsonFormData[key] = value;
    }
  });

  // Make a POST request to the API
  fetch("https://api.noroff.dev/api/v1/auction/listings", {
    method: "POST",
    headers: {
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
      // Do something with the response data if needed
    })
    .catch((error) => {
      console.error("There was a problem sending the form data:", error);
      // Handle error
    });
});
