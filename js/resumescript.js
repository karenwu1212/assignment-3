//header & footer//
var header = document.querySelector('header');
var h1Element = document.createElement('h1');
	h1Element.textContent = "Who I Am";
	header.appendChild(h1Element);

var footer = document.querySelector('footer');
	footer.textContent = "I can be reached via 720.505.9368 or karenwyj2012@gmail.com";
	document.body.appendChild(footer);

//resume section//

var resumesecArr = document.querySelectorAll('.resume-section');
var buttonArr = document.querySelectorAll('.collapse');

for (var i=0; i<buttonArr.length; i+=1){
	(function(n){
		buttonArr[n].addEventListener('click',function (){
			if (buttonArr[n].textContent==='Collapse'){
				resumesecArr[n].classList.add('hidden');
				buttonArr[n].textContent='Expand';
			}
			else {
				resumesecArr[n].classList.remove('hidden');
				buttonArr[n].textContent='Collapse';
			}
		})
	})(i);
};



