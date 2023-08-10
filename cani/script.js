// Write a JavaScript a function that makes an HTTP GET
// request and returns a Promise that resolves with the response data.

// async function func(){
//     let response = fetch
// }

fetch("https://dog.ceo/api/breed/hound/images")
  .then((res) => res.json())
  .then((data) => data.message)
  .then((breeds) => displayDog(breeds))
  .catch((err) => console.log(err));

let div = document.createElement("div");

// document.div.appendChild(header);

document.body.appendChild(div);

// function allBreeds(arr) {
//   let header = document.createElement("h1");
//   arr.forEach((el) => {
//     header.innerText = el;
//   });
// }

function displayDog(array) {
  array.forEach((dog) => {
    let img = document.createElement("img");
    div.appendChild(img);
    img.src = dog;
  });
}
