document.addEventListener("DOMContentLoaded", () => {
  const placeBidButton = document.querySelector(".placeBid");
  const bidInput = document.querySelector(".bidAmount");
  console.log(placeBidButton);
  console.log(bidInput);

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
