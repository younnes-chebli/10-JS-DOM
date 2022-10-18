const newSectionLearner1 = document.createElement("section");
const a1 = Math.floor(Math.random() * 254);
const b1 = Math.floor(Math.random() * 254);
const c1 = Math.floor(Math.random() * 254);
newSectionLearner1.style.backgroundColor = `rgb(${a1}, ${b1}, ${c1})`;

const a2 = Math.floor(Math.random() * 254);
const b2 = Math.floor(Math.random() * 254);
const c2 = Math.floor(Math.random() * 254);
const newSectionLearner2 = document.createElement("section");
newSectionLearner2.style.backgroundColor = `rgb(${a2}, ${b2}, ${c2})`;

const a3 = Math.floor(Math.random() * 254);
const b3 = Math.floor(Math.random() * 254);
const c3 = Math.floor(Math.random() * 254);
const newSectionLearner3 = document.createElement("section");
newSectionLearner3.style.backgroundColor = `rgb(${a3}, ${b3}, ${c3})`;

const learner1Text = document.createTextNode("Learner One");
const learner1P = document.createElement("p");
learner1P.appendChild(learner1Text);
newSectionLearner1.appendChild(learner1P);

const learner2Text = document.createTextNode("Learner Two");
const learner2P = document.createElement("p");
learner2P.appendChild(learner2Text);
newSectionLearner2.appendChild(learner2P);

const learner3Text = document.createTextNode("Learner Three");
const learner3P = document.createElement("p");
learner3P.appendChild(learner3Text);
newSectionLearner3.appendChild(learner3P);

const div = document.createElement("div");
div.append(newSectionLearner1, newSectionLearner2, newSectionLearner3);
const article = document.querySelector("article");
article.appendChild(div);

div.style.display = "flex";
div.style.flexDirection = "column";
const aFlex = Math.floor(Math.random() * 3) + 1;
const bFlex = Math.floor(Math.random() * 3) + 1;
const cFlex = Math.floor(Math.random() * 3) + 1;
div.childNodes[0].style.order = `${aFlex}`;
div.childNodes[1].style.order = `${bFlex}`;
div.childNodes[2].style.order = `${cFlex}`;