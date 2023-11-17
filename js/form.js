const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const media = formData.getAll("media");
  document.querySelector("pre").textContent = media;
});
