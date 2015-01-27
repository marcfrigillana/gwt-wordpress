jQuery(document).ready(function($){
	
	var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#back-to-top').fadeIn(duration);
        } else {
            $('#back-to-top').fadeOut(duration);
        }
    });
    
    $('#back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    $('#accessibility-links ul li a').focus(function(){
        $(this).parent().addClass('access-focus');
    });
    $('#accessibility-links ul li a').blur(function(){
        $(this).parent().removeClass('access-focus');
    })
});