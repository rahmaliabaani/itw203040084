// page scroll
$('.page-scroll').on('click', function(e){
	// ambil tujuan
	var tujuan = $(this).attr('href');
	// tangkap elemen tujuan
	var elemenTujuan = $(tujuan);

	// pindah scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top-60
		}, 1250, 'easeInOutExpo');

	e.preventDefault();


});