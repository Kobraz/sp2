fetch("https://api.noroff.dev/api/v1/auction/listings")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
      tableData += ` <tr>
        <td><a href="details.html?id=${values.id}">${values.title}</a></td>
        <td>${values.description}</td>
        <td><img src="${values.media}"></td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML = tableData;

    //const apiArray = [${values.id},${values.title}, ${values.description}, ${values.price}, ${values.category}, ${values.rating}, ${values.image}]

    console.log(objectData[0].id);
    console.log(objectData[0].title);
    console.log(objectData[0].description);
  });
