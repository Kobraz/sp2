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
    });
}

function displayItem(item) {
  const itemContent = document.getElementById("itemContent");

  // ... code to display the item details ...

  itemContent.innerHTML = `
       <h2 id="cardHeader">${item.title}</h2>
       <p>${item.description}</p>
       <img src="${item.image}" alt="${item.title}">
       <p>Price: ${item.price} kr</p>
    `;
}

fetchAndDisplayItem();
