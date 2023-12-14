document.addEventListener("DOMContentLoaded", () => {
  const placeBidButton = document.querySelector(".placeBid");
  const bidInput = document.querySelector("#bid"); // Updated query selector for the bid input
  console.log(placeBidButton); // Log to check if the element is found
  console.log(bidInput); // Log to check if the element is found

  const queryString = window.location.search;
  const queryStringSliced = queryString.slice(4);
  console.log("Query String:", queryString);
  console.log("Query String Sliced:", queryStringSliced);

  placeBidButton.addEventListener("click", () => {
    const itemId = queryStringSliced; // Assuming item is declared and holds the ID of the auction item
    const bidValue = parseFloat(bidInput.value);

    if (bidValue > 0) {
      const accessToken = localStorage.getItem("accessToken");
      const buyerInfo = {
        email: localStorage.getItem("email"),
        name: localStorage.getItem("name"),
        // Possibly include more buyer details here
      };

      // Create the payload including bid amount and buyer information
      const requestBody = {
        amount: bidValue,
        buyer: buyerInfo,
      };

      // Make the POST request to the API with authentication headers
      fetch(`https://api.noroff.dev/api/v1/auction/listings/${itemId}/bids`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Add the access token for authentication
        },
        body: JSON.stringify(requestBody),
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
