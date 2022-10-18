const ol = document.querySelector("ol");
const lastOlChild = ol.lastElementChild;
ol.prepend(lastOlChild);

const main = document.querySelector("main");
const thirdSection = main.children[2];
const secondSection = main.children[1];
main.firstElementChild.appendChild(thirdSection);
main.appendChild(secondSection);

main.lastElementChild.remove();