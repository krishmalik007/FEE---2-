let url = "https://swapi.dev/api/people/1";

let container = document.querySelector(".container");
fetch(url)
  .then((data) => data.json())
  .then((data) => {
  });
async function getStarwardata() {
  let data = await fetch(url);
  let resultData = await data.json();
  showData(resultData);
}
getStarwardata();
function showData(data) {
  container.innerHTML = "";
  let div = document.createElement("div");
  div.innerHTML = `<div class="name">${data.name}</div>
    <div class="gender">${data.gender}</div>
    <div class="height">${data.height}</div>
    <div class="Mass">${data.mass}</div>
    <div class="birth_year">${data.birth_year}</div>`;
  container.append(div);
}
