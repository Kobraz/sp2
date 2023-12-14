/* document.addEventListener("DOMContentLoaded", function () {
  const placeBidButton = document.querySelector(".placeBid");

  placeBidButton.addEventListener("click", function () {
    console.log("Button Clicked");
  });
});
 */
document.addEventListener("DOMContentLoaded", () => {
  const placeBidButton = document.querySelector(".placeBid");

  placeBidButton.addEventListener("click", () => {
    const bidInput = document.querySelector(".bid");
    const itemId = item.id; // Replace 'your_item_id' with the actual item ID

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
