$(window).scroll(function(){
    if($(this).scrollTop()>15){
        $('header').addClass("navbar-light");
    }else{
        $('header').removeClass("navbar-light");
    }
});