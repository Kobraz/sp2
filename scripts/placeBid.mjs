export function addBidEventListener();

function addBidEventListener() {
    const placeBidButton = document.querySelector(".placeBid");
    const bidAmountInput = document.querySelector(".bidAmount");
  
    placeBidButton.addEventListener("click", function () {
      const itemId = getParameterByName("id");
      const bidAmount = bidAmountInput.value;
  
      console.log("ItemId: " + itemId);
      console.log("bidAmount: " + bidAmount);
      console.log("ItemId: " + getParameterByName("id"));
      console.log("bidAmount: " + bidAmountInput.value);
  
      if (!bidAmount || bidAmount <= 0) {
        alert("Please enter a valid bid amount!");
        return;
      }
  
      const bidData = {
        bid: bidAmount,
      };
  
      fetch(`https://api.noroff.dev/api/v1/auction/listings/${itemId}/bids`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bidData),
      })
        .then((response) => {
          if (response.ok) {
            alert("Bid successfully placed!");
            return response.json();
          } else {
            throw new Error("Bid failed");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to place bid. Please try again.");
        });
    });
  }
  
  addBidEventListener();
  