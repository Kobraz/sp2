// Get the elements
const image = document.querySelector(".popup-image");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".postImageDetailed");
const closeBtn = document.querySelector(".close");

// Function to open the popup
image.addEventListener("click", function () {
  popup.classList.add("active");
  popupContent.src = this.src;
});

// Function to close the popup
closeBtn.addEventListener("click", function () {
  popup.classList.remove("active");
});
