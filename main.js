var jumbotronImg = $(".jumbotronImg");

if($(window).width() < 900){
    jumbotronImg.width(300);
}else{
    jumbotronImg.width(500);
}