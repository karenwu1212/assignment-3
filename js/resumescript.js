//header & footer//
var header = document.querySelector('header');
var h1Element = document.createElement('h1');
	h1Element.textContent = "Who I Am";
	header.appendChild(h1Element);

var footer = document.querySelector('footer');
	footer.textContent = "I can be reached via 720.505.9368 or karenwyj2012@gmail.com";
	document.body.appendChild(footer);

//resume section//

var resumesec = document.querySelector('.resume-section');
var button = document.querySelector('.collapse');
var isVisible = true;
	button.addEventListener('click',function (){
		if (isVisible === true) {
			resumesec.classList.add('hidden'); 
			button.textContent='Expand';
			isVisible = false;
		}
		else if (isVisible === false){
			resumesec.classList.remove('hidden');
			button.textContent='Collapse';
			isVisible=true;
		}
	})



