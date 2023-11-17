const form = document.querySelector("form");

form.querySelector(".add-media").addEventListener("click", () => {
  const input = document.createElement("input");
  input.name = "media";
  input.type = "url";
  form.querySelector(".media").append(input);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const media = formData.getAll("media");
  document.querySelector("pre").textContent = JSON.stringify(media, null, 2);
});

console.log("test");
