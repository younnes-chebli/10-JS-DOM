let title = document.title;
console.log(title);

title = "Modifying the DOM";
console.log(title);

let body = document.body;
//body.style.backgroundColor = "#FF69B4";
let a = Math.floor(Math.random() * 254);
let b = Math.floor(Math.random() * 254);
let c = Math.floor(Math.random() * 254);
body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

let bodyChildren = document.body.children;
for(child of bodyChildren) {
    console.log(child);
}