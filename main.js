var jumbotronImg = $(".jumbotronImg");

if($(window).width() < 900){
    jumbotronImg.width($(window).width()-100);
}else if($(window).width() > 900){
    jumbotronImg.width(500);
}