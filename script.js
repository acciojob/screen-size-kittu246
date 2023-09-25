//your JS code here. If required.
function getWidth() {

let section = document.getElementById("sizeInfo");
let y = document.body.clientHeight;
let x = document.body.clientWidth;
section.innerHTML = `<h1> Width: ${x} and Height: ${y} </h1>`;

}
