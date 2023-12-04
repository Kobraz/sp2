function populateTable(data) {
  const cardHolder = document.getElementById("cardHolder");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardHeader = document.createElement("h2");
    cardHeader.id = "cardHeader";
    cardHeader.textContent = item.header;
    card.appendChild(cardHeader);

    const cardDescription = document.createElement("p");
    cardDescription.id = "cardDescription";
    cardDescription.textContent = item.description;
    card.appendChild(cardDescription);

    const cardMedia = document.createElement("p");
    cardMedia.id = "cardMedia";
    cardMedia.textContent = item.media;
    card.appendChild(cardMedia);

    const cardTags = document.createElement("p");
    cardTags.id = "cardTags";
    cardTags.textContent = item.tags;
    card.appendChild(cardTags);

    const cardCreated = document.createElement("p");
    cardCreated.id = "cardCreated";
    cardCreated.textContent = item.created;
    card.appendChild(cardCreated);

    const cardUpdated = document.createElement("p");
    cardUpdated.id = "cardUpdated";
    cardUpdated.textContent = item.updated;
    card.appendChild(cardUpdated);

    cardHolder.appendChild(card);
  });

  console.log("Id: " + objectData[0].id);
  console.log("Title: " + objectData[0].title);
  console.log("Description: " + objectData[0].description);
  console.log("Media: " + objectData[0].media);
  console.log("Tags: " + objectData[0].tags);
  console.log("Created: " + objectData[0].created);
  console.log("Updated: " + objectData[0].updated);

  console.log("tableData: " + tableData);
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
