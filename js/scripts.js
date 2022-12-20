$(window).scroll(function(){
    if($(this).scrollTop()>15){
        $('header').addClass("fixed-content");
    }else{
        $('header').removeClass("fixed-content");
    }
});