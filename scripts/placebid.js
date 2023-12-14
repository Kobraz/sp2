document.addEventListener("DOMContentLoaded", () => {
  const placeBidButton = document.querySelector(".placeBid");

  placeBidButton.addEventListener("placeBid", () => {
    const bidInput = document.querySelector(".bid");
    const itemId = item.id;

    // Get the bid value from the input
    const bidValue = parseFloat(bidInput.value);

    // Check if the bid value is more than 0
    if (bidValue > 0) {
      // Make the POST request to the API
      fetch(`https://api.noroff.dev/api/v1/auction/listings/${itemId}/bids`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bid: bidValue }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Bid placed successfully!");
            // Handle further actions if needed
          } else {
            console.log("Failed to place bid");
          }
        })
        .catch((error) => {
          console.error("Error occurred:", error);
        });
    } else {
      console.log("You can't bid 0");
    }
  });
});

const queryString = window.location.search;
console.log("queryString: " + queryString);
