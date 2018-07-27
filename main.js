var jumbotronImg = $(".jumbotronImg");
var counter = 0;

if($(window).width() < 900){
    jumbotronImg.width($(window).width()-100);
}else if($(window).width() > 900){
    jumbotronImg.width(500);
}

$(".jumbotronTextHeader").click(function(){
    counter++;

    if(counter == 5){
        location.replace("maintainence.html");
    }
})
