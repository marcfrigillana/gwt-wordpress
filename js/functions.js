/*
 * scripts for mega menu and accessibility features.
 * 
 */

// Cookie handler, non-$ style
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else
        var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "");
}

jQuery(document).ready(function($){
	
	// Accessibility
	$('#openMenu').on('click', function () {
        if ($(this).attr('class') == "is_open") {
			$('#acsblty').animate({left: '-30px'});
			//changeImage();
			//$(this).src = "'" + template_directory + "'/images/arrow-left.png";
			$(this).attr('class', 'is_closed');
			
        } else {
			$('#acsblty').animate({left: '0px'});
			//changeImage();
			//$(this).src = "'" + template_directory + "'/images/arrow-right.png";
			$(this).attr('class', 'is_open');
        }
    });
	
	 function changeImage() {

        if ($('.openMenu').attr('id') == "is_open") 
        {
            $('#is_open').src = "gwt-wordpress-6.3.1/images/arrow-left.png";
			//$('#is_open').src = "'" + template_directory + "'/images/arrow-left.png";
			console.log($('#is_open'));
        }
        else 
        {
			$('#is_closed').src = "gwt-wordpress-6.3.1/images/arrow-right.png";
            //$('#is_closed').src = "'" + template_directory + "'/images/arrow-right.png";
        }
    };
	
	// Mega Menu
	var hasMegaMenu = $('.has-megamenu');
	hasMegaMenu.click(
	  function(e) {
	    e.preventDefault();
	    var $this = $(this);
		
	    var currentMegaMenu = $('#' + $this.attr('id').substr(0, $this.attr('id').indexOf('-')) + '-megamenu');

	    hasMegaMenu.removeClass('active');
	    $this.toggleClass('active');
	    $('.megamenu:visible').slideUp('slow')
	    if (currentMegaMenu.is(':visible')) {
			currentMegaMenu.slideUp('slow')
			hasMegaMenu.removeClass('active');
	    } else {
	    	currentMegaMenu.slideDown('slow')
	  	}
	});
	
	$('.megamenu').hide();
		
	var tabTitle = $('.tab-title');
	tabTitle.on('click', function(){
		tabTitle.removeClass('active');
		$(this).addClass('active');
		
		var h1 = $("a",this).attr('href');
		//h1.removeClass('active');
		//console.log(h1);
		//alert(h1);
		
		//$(this).removeClass('active');;
	});
	/*
	$('.tab-title').on('toggled', function (event, tab) {
		console.log(tab);
	});
	*/
	
	// Saturation handler
    if (readCookie('a11y-desaturated')) {
        $('body').addClass('desaturated');
		$('head').append($("<link href='" + template_directory + "/css/a11y-desaturate.css' id='desaturateStylesheet' rel='stylesheet' type='text/css' />"));
        $('#is_normal_color').attr('id', 'is_grayscale').attr('aria-checked', true).addClass('active');
    };
	
    $('.toggle-grayscale').on('click', function () {
        if ($(this).attr('id') == "is_normal_color") {
			$('head').append($("<link href='" + template_directory + "/css/a11y-desaturate.css' id='desaturateStylesheet' rel='stylesheet' type='text/css' />"));
            $('body').addClass('desaturated');
            $(this).attr('id', 'is_grayscale').attr('aria-checked', true).addClass('active');
            createCookie('a11y-desaturated', '1');
            return false;
        } else {
			$('#desaturateStylesheet').remove();
            $('body').removeClass('desaturated');
            $(this).attr('id', 'is_normal_color').removeAttr('aria-checked').removeClass('active');
            eraseCookie('a11y-desaturated');
            return false;
        }
    });
    
    // Contrast handler
    if (readCookie('a11y-high-contrast')) {
        $('body').addClass('contrast');
        $('head').append($("<link href='" + template_directory + "/css/a11y-contrast.css' id='highContrastStylesheet' rel='stylesheet' type='text/css' />"));
        $('#is_normal_contrast').attr('id', 'is_high_contrast').attr('aria-checked', true).addClass('active');
    };

    $('.toggle-contrast').on('click', function () {
        if ($(this).attr('id') == "is_normal_contrast") {
            $('head').append($("<link href='" + template_directory + "/css/a11y-contrast.css' id='highContrastStylesheet' rel='stylesheet' type='text/css' />"));
            $('body').addClass('contrast');
            $(this).attr('id', 'is_high_contrast').attr('aria-checked', true).addClass('active');
            createCookie('a11y-high-contrast', '1');
            return false;
        } else {
            $('#highContrastStylesheet').remove();
            $('body').removeClass('contrast');
            $(this).attr('id', 'is_normal_contrast').removeAttr('aria-checked').removeClass('active');
            eraseCookie('a11y-high-contrast');
            return false;
        }
    });

    // Fontsize handler
    if (readCookie('a11y-larger-fontsize')) {
        $('body').addClass('fontsize');
		$('head').append($("<link href='" + template_directory + "/css/a11y-fontsize.css' id='fontsizeStylesheet' rel='stylesheet' type='text/css' />"));
        $('#is_normal_fontsize').attr('id', 'is_large_fontsize').attr('aria-checked', true).addClass('active');
    }

    $('.toggle-fontsize').on('click', function () {
        if ($(this).attr('id') == "is_normal_fontsize") {
			$('head').append($("<link href='" + template_directory + "/css/a11y-fontsize.css' id='fontsizeStylesheet' rel='stylesheet' type='text/css' />"));
            $('body').addClass('fontsize');
            $(this).attr('id', 'is_large_fontsize').attr('aria-checked', true).addClass('active');
            createCookie('a11y-larger-fontsize', '1');
            return false;
        } else {
			$('#fontsizeStylesheet').remove();
			$('body').removeClass('fontsize');
            $(this).attr('id', 'is_normal_fontsize').removeAttr('aria-checked').removeClass('active');
            eraseCookie('a11y-larger-fontsize');
            return false;
        }
    });
	console.log(readCookie());
})
