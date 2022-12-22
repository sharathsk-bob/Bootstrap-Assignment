$(window).scroll(function(){
    if($(this).scrollTop()<500 && $(this).scrollTop()>15 ){
        $('nav').removeClass("navbar-light");
        $('a').addClass("text-white");    
    }else{
        $('nav').addClass("navbar-light");
        $('a').removeClass("text-white");
    }
});