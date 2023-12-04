fetch("https://api.noroff.dev/api/v1/auction/listings")
  .then((response) => response.json())
  .then((data) => {
    const cardTemplate = document.querySelector(".card");
    const tableBody = document.querySelector("#tableBody");

    data.forEach((item) => {
      const card = cardTemplate.cloneNode(true);
      card.querySelector("#cardHeader").textContent = item.title;
      card.querySelector("#cardDescription").textContent = item.description;
      card.querySelector("#cardMedia").textContent = item.media;
      card.querySelector("#cardTags").textContent = item.tags;
      card.querySelector("#cardCreated").textContent = item.created;
      card.querySelector("#cardUpdated").textContent = item.updated;

      tableBody.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
