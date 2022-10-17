let ol = document.querySelector("ol");
let lastOlChild = ol.lastElementChild;
ol.prepend(lastOlChild);

let main = document.querySelector("main");
let thirdSection = main.children[2];
let secondSection = main.children[1];
main.firstElementChild.appendChild(thirdSection);
main.appendChild(secondSection);

main.lastElementChild.remove();