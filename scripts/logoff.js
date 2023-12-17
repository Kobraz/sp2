document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Logoff").addEventListener("click", function (event) {
    event.preventDefault(); // prevent the default action of the link
    localStorage.clear(); // clear the data from local storage
    location.reload(); // reload the page
  });
});
