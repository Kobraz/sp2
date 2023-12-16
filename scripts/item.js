import { addBidEventListener } from "../scripts/placeBid.mjs";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function fetchAndDisplayItem() {
  const itemId = getParameterByName("id");

  fetch(`https://api.noroff.dev/api/v1/auction/listings/${itemId}`)
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      displayItem(objectData);
      /* addBidEventListener(); // Refererer til utkommentert kodeblokk linje 49 */
    });
}

function displayItem(item) {
  const itemContent = document.getElementById("itemContent");

  let mediaHTML = "";
  if (Array.isArray(item.media)) {
    item.media.forEach((mediaUrl) => {
      mediaHTML += `<img class="popup-image" src="${mediaUrl}" alt="image">`;
    });
  } else {
    mediaHTML = `<img src="${item.media}" alt="image">`;
  }

  itemContent.innerHTML = `
         <h2 id="cardHeader" class="cardHeader">${item.title}</h2>
         <p class="cardId">${item.id}</p>
         <p class="cardDescription">${item.description}</p>
         <p class="cardMedia">${mediaHTML}</p>
         <p class="cardTags">${item.tags}</p>
         <p class="cardCreated"><span class="textCont">Created: </span>${item.created}</p>
         <p class="cardUpdated"><span class="textCont">Updated: </span>${item.updated}</p>
         <p class="cardEndsAt"><span class="textCont">Ends at: </span>${item.endsAt}</p>
         <p class="cardBids"><span class="textCont">Bids: </span>${item._count}</p>
         <label for="bidAmount">Enter bid: </label><input type="number" id="bidAmount" class="bidAmount" name="bidAmount" min="0" max="1000"><button id="placeBid" class="placeBid">Place bid</button>
      `;

  console.log("Item title: " + item.title);
  addBidEventListener();
}

/* function addBidEventListener() {
  const placeBidButton = document.querySelector(".placeBid");

  placeBidButton.addEventListener("click", function () {
    console.log("Button Clicked");
  });
} */

fetchAndDisplayItem();
