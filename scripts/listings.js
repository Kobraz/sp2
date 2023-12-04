function populateTable(data) {
  const card = document.getElementById("card");

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

    card.appendChild(card);
  });
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
