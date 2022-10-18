let title = document.title;
console.log(title);

title = "Modifying the DOM";
console.log(title);

const body = document.body;
//body.style.backgroundColor = "#FF69B4";
const a = Math.floor(Math.random() * 254);
const b = Math.floor(Math.random() * 254);
const c = Math.floor(Math.random() * 254);
body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

const bodyChildren = document.body.children;
for(const child of bodyChildren) {
    console.log(child);
}