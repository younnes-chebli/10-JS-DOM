let newSectionLearner1 = document.createElement("section");
let a1 = Math.floor(Math.random() * 254);
let b1 = Math.floor(Math.random() * 254);
let c1 = Math.floor(Math.random() * 254);
newSectionLearner1.style.backgroundColor = `rgb(${a1}, ${b1}, ${c1})`;

let a2 = Math.floor(Math.random() * 254);
let b2 = Math.floor(Math.random() * 254);
let c2 = Math.floor(Math.random() * 254);
let newSectionLearner2 = document.createElement("section");
newSectionLearner2.style.backgroundColor = `rgb(${a2}, ${b2}, ${c2})`;

let a3 = Math.floor(Math.random() * 254);
let b3 = Math.floor(Math.random() * 254);
let c3 = Math.floor(Math.random() * 254);
let newSectionLearner3 = document.createElement("section");
newSectionLearner3.style.backgroundColor = `rgb(${a3}, ${b3}, ${c3})`;

let learner1Text = document.createTextNode("Learner One");
let learner1P = document.createElement("p");
learner1P.appendChild(learner1Text);
newSectionLearner1.appendChild(learner1P);

let learner2Text = document.createTextNode("Learner Two");
let learner2P = document.createElement("p");
learner2P.appendChild(learner2Text);
newSectionLearner2.appendChild(learner2P);

let learner3Text = document.createTextNode("Learner Three");
let learner3P = document.createElement("p");
learner3P.appendChild(learner3Text);
newSectionLearner3.appendChild(learner3P);

let div = document.createElement("div");
div.append(newSectionLearner1, newSectionLearner2, newSectionLearner3);
let article = document.querySelector("article");
article.appendChild(div);

div.style.display = "flex";
div.style.flexDirection = "column";
let aFlex = Math.floor(Math.random() * 3) + 1;
let bFlex = Math.floor(Math.random() * 3) + 1;
let cFlex = Math.floor(Math.random() * 3) + 1;
div.childNodes[0].style.order = `${aFlex}`;
div.childNodes[1].style.order = `${bFlex}`;
div.childNodes[2].style.order = `${cFlex}`;