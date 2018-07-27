var password = $(".password");
var goButton = $(".goButton");
var counter = 0;

// goButton.click(function(){
//     if(password.val() == "devaccess"){
//         location.replace("index.html");
//     }
// })

$(".maintainenceHeader").click(function(){
    counter++;
    if(counter == 5){
        location.replace("index.html")
    }
})