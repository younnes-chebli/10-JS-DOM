const importants = document.getElementsByClassName("important");
for(const important of importants) {
    important.setAttribute("title", "");
}
console.log(importants);

const images = document.querySelectorAll("img");
for(const image of images) {
    if(image.classList.contains("important")) {
        image.style.display = "none";
    }
}

const hasClass = (element) => {
    return element.classList.length > 0;
};

const paragraphs = document.querySelectorAll("p");
for(const paragraph of paragraphs) {
    if (hasClass(paragraph)) {
        console.log(paragraph.innerHTML);
        console.log(paragraph.classList.value)
    } else {
        const a = Math.floor(Math.random() * 254);
        const b = Math.floor(Math.random() * 254);
        const c = Math.floor(Math.random() * 254);
        paragraph.style.color = `rgb(${a}, ${b}, ${c})`;
    }
}

