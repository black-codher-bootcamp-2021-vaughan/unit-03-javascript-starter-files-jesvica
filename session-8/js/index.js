import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";


const button = document.createElement('button');
const text = document.createTextNode('Show Population');
button.appendChild(text);
button.onclick = displayPopulation;
document.body.appendChild(button);