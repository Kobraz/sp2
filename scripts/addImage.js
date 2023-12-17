document.getElementById("addImageButton").addEventListener("click", function () {
  const imageInputs = document.getElementById("imageInputs");
  const newImageInput = document.createElement("div");
  newImageInput.innerHTML = `
        <label class="label" for="postImage">Image</label>
        <input class="postImage" name="postImage[]" type="text" placeholder="Image URL" />
    `;
  imageInputs.appendChild(newImageInput);
});
