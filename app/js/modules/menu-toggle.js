var button = document.querySelector('.menu-toggle');
	button.addEventListener('click', function (){
	  button.classList.toggle('menu-toggle-open');
	});

$('.menu-toggle').click(function(){
	$(this).toggleClass('menu-toggle-rotate');
});
