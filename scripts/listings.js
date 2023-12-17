function populateTable(data) {
  const cardHolder = document.getElementById("cardHolder");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    let mediaHTML = "";
    if (Array.isArray(item.media)) {
      item.media.forEach((mediaUrl) => {
        mediaHTML += `<img class="postImage" src="${mediaUrl}" alt="image">`;
      });
    } else {
      mediaHTML = `<img src="${item.media}" alt="image">`;
    }

    const cardHeader = document.createElement("h2");
    cardHeader.id = "cardHeader";
    cardHeader.class = "cardHeader";
    cardHeader.textContent = item.title;
    card.appendChild(cardHeader);

    const cardId = document.createElement("p");
    cardId.id = "cardId";
    cardId.textContent = item.id;
    card.appendChild(cardId);

    const cardDescription = document.createElement("p");
    cardDescription.id = "cardDescription";
    cardDescription.textContent = item.description;
    card.appendChild(cardDescription);

    const cardMedia = document.createElement("p");
    cardMedia.id = "cardMedia";
    cardMedia.innerHTML = mediaHTML;
    card.appendChild(cardMedia);

    const cardTags = document.createElement("p");
    cardTags.id = "cardTags";
    cardTags.textContent = item.tags;
    card.appendChild(cardTags);

    const cardCreated = document.createElement("p");
    const createdTextcre = "Created: ";
    cardCreated.id = "cardCreated";
    cardCreated.textContent = createdTextcre + item.created;
    card.appendChild(cardCreated);

    const cardUpdated = document.createElement("p");
    const createdTextupd = "Updated: ";
    cardUpdated.id = "cardUpdated";
    cardUpdated.textContent = createdTextupd + item.updated;
    card.appendChild(cardUpdated);

    /* const justNow = new Date();
    if (item.endsAt < justNow) {
      let itemStatus = "Ended";
    } else {
      let itemStatus = "Active";
    } */

    const cardEndsAt = document.createElement("p");
    const createdTextends = "Ends at: ";
    cardEndsAt.id = "cardEndsAt";
    cardUpdated.textContent = createdTextends + item.endsAt;
    card.appendChild(cardEndsAt);

    const cardLink = document.createElement("button");
    cardLink.id = "cardLink";
    cardLink.textContent = "Open Post";
    cardLink.onclick = function () {
      window.open(`item.html?id=${item.id}`, "_blank");
    };
    card.appendChild(cardLink);

    cardHolder.appendChild(card);
  });

  console.log(
    "---------------------------------------------------------------------------------------------------------------------------------------"
  );
  console.log("Id: " + data[0].id);
  console.log("Title: " + data[0].title);
  console.log("Description: " + data[0].description);
  console.log("Media: " + data[0].media);
  console.log("Tags: " + data[0].tags);
  console.log("Created: " + data[0].created);
  console.log("Updated: " + data[0].updated);
  console.log("Bids: " + data[0].bids);
  console.log("-------------------------------");
  console.log("Id: " + data[1].id);
  console.log("Title: " + data[1].title);
  console.log("Description: " + data[1].description);
  console.log("Media: " + data[1].media);
  console.log("Tags: " + data[1].tags);
  console.log("Created: " + data[1].created);
  console.log("Updated: " + data[1].updated);
  console.log("Bids: " + data[1].bids);
  console.log("-------------------------------");
  console.log("Id: " + data[2].id);
  console.log("Title: " + data[2].title);
  console.log("Description: " + data[2].description);
  console.log("Media: " + data[2].media);
  console.log("Tags: " + data[2].tags);
  console.log("Created: " + data[2].created);
  console.log("Updated: " + data[2].updated);
  console.log("Bids: " + data[2].bids);
  console.log("-------------------------------");
  console.log("Id: " + data[3].id);
  console.log("Title: " + data[3].title);
  console.log("Description: " + data[3].description);
  console.log("Media: " + data[3].media);
  console.log("Tags: " + data[3].tags);
  console.log("Created: " + data[3].created);
  console.log("Updated: " + data[3].updated);
  console.log("Bids: " + data[3].bids);
  console.log("-------------------------------");
  console.log("Id: " + data[4].id);
  console.log("Title: " + data[4].title);
  console.log("Description: " + data[4].description);
  console.log("Media: " + data[4].media);
  console.log("Tags: " + data[4].tags);
  console.log("Created: " + data[4].created);
  console.log("Updated: " + data[4].updated);
  console.log("Bids: " + data[4].bids);
  console.log("-------------------------------");
  console.log("Id: " + data[5].id);
  console.log("Title: " + data[5].title);
  console.log("Description: " + data[5].description);
  console.log("Media: " + data[5].media);
  console.log("Tags: " + data[5].tags);
  console.log("Created: " + data[5].created);
  console.log("Updated: " + data[5].updated);
  console.log("Bids: " + data[5].bids);
  console.log("-------------------------------");
  console.log("Id: " + data[6].id);
  console.log("Title: " + data[6].title);
  console.log("Description: " + data[6].description);
  console.log("Media: " + data[6].media);
  console.log("Tags: " + data[6].tags);
  console.log("Created: " + data[6].created);
  console.log("Updated: " + data[6].updated);
  console.log("Bids: " + data[6].bids);
  console.log("-------------------------------");

  console.log(
    "---------------------------------------------------------------------------------------------------------------------------------------"
  );
  console.log("tableData: " + data);
  console.log(
    "---------------------------------------------------------------------------------------------------------------------------------------"
  );
  console.log("test 5");
  console.log(
    "---------------------------------------------------------------------------------------------------------------------------------------"
  );
}

function fetchAndPopulateTable() {
  fetch("https://api.noroff.dev/api/v1/auction/listings?sort=created")
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      populateTable(objectData);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchAndPopulateTable();
});
