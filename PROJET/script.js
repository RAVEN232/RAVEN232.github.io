$(document).ready(function(){
    $("#cup").mouseenter(function(){
        $(this).attr("src","anim2.png");
    });
    $("#cup").mouseleave(function(){
        $(this).attr("src","anim1.png");
    }); 
});



