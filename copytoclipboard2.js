
// Copy Component (webflow element)	
// Extract from the Libi library by Tom Qwen. ETA Late 2022 

let does_copyComponent = document.querySelectorAll('[does="copy-component-button"]')
let does_component = document.querySelectorAll('[does="component"]');

for (let z = 0; z < does_copyComponent.length; z++) {
	
	does_copyComponent[z].addEventListener('click', function() {
				
	let codeSnippet = JSON.parse(does_component[z].textContent)

	document.addEventListener("copy", (event) => {
	
		event.clipboardData.setData("application/json", JSON.stringify(codeSnippet));
		event.preventDefault();
		
	})
	
	document.execCommand('copy');
	does_copyComponent[z].innerHTML = 'Copied to clipboard';
	resetText(this)
	
});
}

// Reset changetext - confirmation for copy buttons above;

function resetText(target) {
	
	setTimeout(() => {
		
		target.innerText = 'Copy Component'
		
	}, 3000);
	
}
 