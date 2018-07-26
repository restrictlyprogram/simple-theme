var password = $(".password");
var goButton = $(".goButton");

goButton.click(function(){
    if(password.val() == "devaccess"){
        location.replace("index2.html");
    }
})
