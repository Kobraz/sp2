// Function to generate table row HTML code
function generateTableRow(values) {
  let mediaHTML = "";
  if (Array.isArray(values.media)) {
    values.media.forEach((mediaUrl) => {
      mediaHTML += `<img src="${mediaUrl}" alt="image">`;
    });
  } else {
    mediaHTML = `<img src="${values.media}" alt="image">`;
  }

  return ` <tr>
     <td><a href="details.html?id=${values.id}">${values.title}</a></td>
     <td>${values.description}</td>
     <td>${mediaHTML}</td>
     <td>${values.tags}</td>
     <td>${values.created}</td>
     <td>${values.updated}</td>
     </tr>`;
}

// Function to populate table
function populateTable(objectData) {
  let tableData = "";
  objectData.forEach((values) => {
    tableData += generateTableRow(values);
  });
  document.getElementById("tableBody").innerHTML = tableData;
}

// Function to fetch data from API and populate table
function fetchAndPopulateTable() {
  fetch("https://api.noroff.dev/api/v1/auction/listings")
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      populateTable(objectData);
    });
}

// Run fetchAndPopulateTable function when the DOM has been loaded
document.addEventListener("DOMContentLoaded", function () {
  fetchAndPopulateTable();
});
