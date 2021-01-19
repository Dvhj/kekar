let field = document.querySelectorAll('.field'),
	btnK = document.querySelector('.btnK'),
	btnE = document.querySelector('.btnE')


btnK.addEventListener('click', function() {
	field.forEach(function(item, i){
		item.addEventListener('click', function(){
			item.style.backgroundImage = "url('img/К.png')";
			item.style.backgroundSize = "50px"
			item.style.backgroundRepeat = "no-repeat"
			item.style.backgroundPosition = "center"
		});
	});
});

btnE.addEventListener('click', function() {
	field.forEach(function(item, i){
		item.addEventListener('click', function(){
			item.style.backgroundImage = "url('img/Е.png')";
			item.style.backgroundSize = "50px"
			item.style.backgroundRepeat = "no-repeat"
			item.style.backgroundPosition = "center"
		});
	});
});

let cleanFull = document.querySelector('.clean-full'),
	cleanLetter = document.querySelector('.clean-letter')

cleanFull.addEventListener('click', function() {
	field.forEach(function(item, i){
			item.style.backgroundImage = "none"
		});
	});

cleanLetter.addEventListener('click', function() {
	field.forEach(function(item, i){
		item.addEventListener('click', function(){
			item.style.backgroundImage = "none"
		});
	});
});