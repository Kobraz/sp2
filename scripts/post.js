const formData = new FormData(document.getElementById("form").value);

const token = localStorage.getItem("accessToken");
const accessToken = token.slice(1, -1);

console.log("Token: " + accessToken);

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  /* const formData = new FormData(document.getElementById("form").value);
   */
  console.log("formData: " + formData);
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
    // Do something with the response data if needed
  })
  .catch((error) => {
    console.error("There was a problem sending the form data:", error);
    // Handle error
  });