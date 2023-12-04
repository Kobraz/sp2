const url = "https://api.noroff.dev/api/v1/auction/listings";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let result = "";
    data.forEach((values) => {
      result += `
        <tr>
          <td><a href="details.html?id=${values.id}">${values.title}</a></td>
          <td>${values.description}</td>
          <td><img src="${values.media}"></td>
          <td>${values.tags}</td>
          <td>${values.created}</td>
          <td>${values.updated}</td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML = result;
  })
  .catch((error) => console.error("Error:", error));
