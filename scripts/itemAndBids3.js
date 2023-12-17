let id = getQueryStringValue("id");

async function placeBid() {
  let bidAmount = localStorage.getItem("bidAmount");

  let response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${itemId}/bids`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      id: id,
      bidAmount: bidAmount,
    }),
  });

  if (response.ok) {
    displayMessage("Bid placed successfully!", "green");
  } else {
    displayMessage("Error placing bid, please try again.", "red");
  }
}

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"),
      "$1"
    )
  );
}

function displayMessage(message, color) {
  let msgElement = document.querySelector(".message");
  msgElement.textContent = message;
  msgElement.style.color = color;
  msgElement.style.display = "block";
  setTimeout(() => {
    msgElement.style.display = "none";
  }, 3000);
}
