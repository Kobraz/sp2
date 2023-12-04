fetch("https://api.noroff.dev/api/v1/auction/listings")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let tableData = objectData.map((values) => {}); 
    objectData.map((values) => {
      let mediaHTML = '';
      if (Array.isArray(values.media)) {
         values.media.forEach(mediaUrl => {
           mediaHTML += `<img src="${mediaUrl}" alt="image">`;
         });
      } else {
         mediaHTML = `<img src="${values.media}" alt="image">`;
      }
     
    objectData.map((values) => {
      tableData += ` <tr>
        <td><a href="details.html?id=${values.id}">${values.title}</a></td>
        <td>${values.description}</td>
        <td><img src="${values.media}" alt="image"></td>
        <td>${values.tags}</td>
        <td>${values.created}</td>
        <td>${values.updated}</td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML = tableData;

    //const apiArray = [${values.id},${values.title}, ${values.description}, ${values.price}, ${values.category}, ${values.rating}, ${values.image}]

    console.log("Id: " + objectData[0].id);
    console.log("Title: " + objectData[0].title);
    console.log("Description: " + objectData[0].description);
    console.log("Media: " + objectData[0].media);
    console.log("Tags: " + objectData[0].tags);
    console.log("Created: " + objectData[0].created);
    console.log("Updated: " + objectData[0].updated);

    console.log("tableData: " + tableData);
  });
