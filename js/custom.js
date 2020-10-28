$(document).ready(function () {
    $('.humberger-menu').click(function(){
        $('.mobile-menu').addClass('open')
    });
    $('.menu-close').click(function(){
        $('.mobile-menu').removeClass('open')
    })
    $('header .bottom-back .right-details .navigation li').click(function(){
        $('.mobile-menu').removeClass('open')
    });


   
    $("header .bottom-back .right-details .navigation li:first").addClass("current_menu_items").show(); //Activate first tab
    //On Click Event
    $("header .bottom-back .right-details .navigation li").click(function () {
        $("header .bottom-back .right-details .navigation li").removeClass("current_menu_items"); 
        $(this).addClass("current_menu_items"); 
        
    });   
	

});

window.addEventListener('load', function(){
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
})




