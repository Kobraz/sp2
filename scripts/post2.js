const token = localStorage.getItem("accessToken");
const accessToken = token.slice(1, -1);
let jsonFormData;

console.log("Token: " + accessToken);

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(document.getElementById("form"));

  // Assuming formData.get("endsAt") returns an array of dates
  const endsAtValues = formData.getAll("endsAt");
  const firstEndsAt = endsAtValues.length > 0 ? endsAtValues[0] : null;

  if (!firstEndsAt) {
    console.error("No valid 'endsAt' date provided.");
    return; // Exit early if 'endsAt' is not provided
  }

  const endsAtDate = new Date(firstEndsAt);

  if (isNaN(endsAtDate)) {
    console.error("Invalid 'endsAt' date provided.");
    return; // Exit early if 'endsAt' date is invalid
  }

  const isoFormattedDate = endsAtDate.toISOString();

  const jsonFormData = {
    title: formData.get("title"), // Required
    description: formData.get("description") || "", // Optional, provide default value if empty
    tags: formData.get("tags")
      ? formData
          .get("tags")
          .split(",")
          .map((tag) => tag.trim())
      : [], // Optional - Convert comma-separated string to an array of tags
    media: formData.get("media") ? [formData.get("media")] : [], // Optional - Place the media URL in an array if provided
    endsAt: isoFormattedDate, // Required - Convert the date string to ISO format
  };

  /* const jsonFormData = {}; */
  for (const [key, value] of formData.entries()) {
    if (jsonFormData[key]) {
      if (!Array.isArray(jsonFormData[key])) {
        jsonFormData[key] = [jsonFormData[key]];
      }
      jsonFormData[key].push(value);
    } else {
      jsonFormData[key] = value;
    }
  }

  /*--*/
  console.log("jsonFormData:.. ", jsonFormData);

  const endsAt = new Date(jsonFormData.endsAt);
  /* const isoFormattedDate = endsAt.toISOString(); */

  jsonFormData.endsAt = isoFormattedDate;

  console.log("Updated jsonFormData:.. ", jsonFormData);
  /*--*/

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
