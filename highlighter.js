import { highlightAll } from "/core/src/index.js";
import { highlightElement } from '/core/src/index.js';
import { detectLanguage } from '/core/src/detect.js';

const loc = document.location;
window.addEventListener("load", MyFunction);

function MyFunction(){
	const cells = document.getElementsByTagName('code');
	for(const cell of cells) {
		console.log(cell);
		cell.classList.add("shj-lang-c");

		highlightElement(cell, detectLanguage(cell.textContent));
	}
}
highlightAll();
