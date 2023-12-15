document.addEventListener("DOMContentLoaded", () {


});

async function main() {
  await fetchAndDisplayItem();
  placeBid();
}

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
      /* addBidEventListener(); // Refererer til utkommentert kodeblokk function addBidEventListener() */
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
}

/* function addBidEventListener() {
    const placeBidButton = document.querySelector(".placeBid");
  
    placeBidButton.addEventListener("click", function () {
      console.log("Button Clicked");
    });
  } */

function placeBid() {
  document.addEventListener("DOMContentLoaded", () => {
    const placeBidButton = document.getElementById("placeBid");
    const bidInput = document.getElementById("bidAmount");
    console.log(placeBidButton);
    console.log(bidInput);
    console.log(document.getElementById("placeBid"));
    console.log(document.getElementById("bidAmount"));

    const queryString = window.location.search;
    const queryStringSliced = queryString.slice(4);
    console.log("Query String:", queryString);
    console.log("Query String Sliced:", queryStringSliced);

    placeBidButton.addEventListener("click", () => {
      const itemId = queryStringSliced;
      const bidValue = parseFloat(bidInput.value);

      if (bidValue > 0) {
        const accessToken = localStorage.getItem("accessToken");
        const buyerInfo = {
          email: localStorage.getItem("email"),
          name: localStorage.getItem("name"),
        };
        console.log("accessToken: " + accessToken);

        const requestBody = {
          amount: bidValue,
          buyer: buyerInfo,
        };

        fetch(`https://api.noroff.dev/api/v1/auction/listings/${itemId}/bids`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, //
          },
          body: JSON.stringify(requestBody),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Bid placed successfully!");
              messageSuccess();
            } else {
              console.log("Failed to place bid");
              messageFailed();
            }
          })
          .catch((error) => {
            console.error("Error occurred:", error);
            messageError();
          });
      } else {
        console.log("You can't bid 0");
        messageErrorNull();
      }
    });
  });
}

main();

/* fetchAndDisplayItem();
placeBid(); */
