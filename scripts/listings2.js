const url = "https://api.noroff.dev/api/v1/auction/listings";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let result = "";
    data.forEach((values) => {
      // Creating image element and handling loading errors
      const img = document.createElement("img");
      img.src = values.media;
      img.onerror = function () {
        // Do something when image fails to load, like hiding or replacing it
        img.style.display = "none"; // Hides the image if it fails to load
      };

      // Generating table rows with data
      result += `
        <tr>
          <td><a href="details.html?id=${values.id}">${values.title}</a></td>
          <td>${values.description}</td>
          <td></td> <!-- Placeholder for the image -->
          <td>${values.tags}</td>
          <td>${values.created}</td>
          <td>${values.updated}</td>
        </tr>`;

      // Appending the image to the corresponding table cell
      const tempDiv = document.createElement("div");
      tempDiv.appendChild(img);
      const imageCell = tempDiv.innerHTML;
      result = result.replace("<td></td>", `<td>${imageCell}</td>`);
    });
    document.getElementById("tableBody").innerHTML = result;
  })
  .catch((error) => console.error("Error:", error));
