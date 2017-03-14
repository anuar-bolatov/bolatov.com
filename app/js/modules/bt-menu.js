$(document).ready(function(){

	var button = document.querySelector('.bt-menu');
	button.addEventListener('click', function (){
	  button.classList.toggle('bt-menu-open');
	});

	$('.bt-menu').click(function(){
		$(this).toggleClass('bt-menu-rotate');
	});
		
});
