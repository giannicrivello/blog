window.addEventListener("load", MyFunction);

function MyFunction(){
	const cells = document.getElementsByTagName('code');
	for(const cell of cells) {
		console.log(cell);
		cell.classList.add("language-c");

	}
}
