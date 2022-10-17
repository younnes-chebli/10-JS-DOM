let importants = document.getElementsByClassName("important");
for(important of importants) {
    important.setAttribute("title", "");
}
console.log(importants);

let images = document.querySelectorAll("img");
for(image of images) {
    if(image.classList.contains("important")) {
        image.style.display = "none";
    }
}

const hasClass = (element) => {
    return element.classList.length > 0;
};

let paragraphs = document.querySelectorAll("p");
for(paragraph of paragraphs) {
    if (hasClass(paragraph)) {
        console.log(paragraph.innerHTML);
        console.log(paragraph.classList.value)
    } else {
        let a = Math.floor(Math.random() * 254);
        let b = Math.floor(Math.random() * 254);
        let c = Math.floor(Math.random() * 254);
        paragraph.style.color = `rgb(${a}, ${b}, ${c})`;
    }
}

