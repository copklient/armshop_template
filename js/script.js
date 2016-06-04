function settings() {
    if (localStorage.getItem('settings') == 'off' || !localStorage.getItem('settings')) {
        localStorage.setItem('settings', 'on');
        $('.settingsNF')
    }
    else{
    	localStorage.setItem('settings', 'off');
    }
}

function settingsBar(){
	if(localStorage.getItem('settings') == 'off'){
		$('#settings').css('display','none');
	}
	else if(localStorage.getItem('settings') == 'on'){
		$('.settingsNF').html('Off Settings bar');
	}
	else{
		$('#settings').css('display','none');
		$('.settingsNF').html('On Settings bar');
	}
}
settingsBar();

var w = innerWidth;
var h = innerHeight;
$('#myCarousel .item img').css('width', w,'height', h);

$( window ).resize(function() {
	w = innerWidth;
	h = innerHeight;
	$('#myCarousel .item img').css('width', w,'height', h);
});