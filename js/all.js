$('document').ready(function(){
	// $('.pinned').pin({containerSelector: '.container'});

	// $('.header').on('hover', function(){
		// console.log('hover');
		// $('.fotorama').hover();
	// });
	$('.expo-slide a').click(function(e){
		e.stopPropagation();
	});
	$('.fotorama .fotorama__nav__shaft .fotorama__thumb-border').next('.fotorama__nav__frame').find('.fotorama__thumb').append('<img src="img/slider/thumb/bot.jpg" width="100" height="68">');
});
