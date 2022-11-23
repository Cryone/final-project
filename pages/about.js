// ***************************************
// ******************************************
// ON CLICK HAMBURGER
$(document).on('click', '#hamburger', function(){
    $(".overly").css('display','grid')
    $("#exit").css('display','grid')
    $(".nav-items").css('display','grid')
    $("#hamburger").css('display','none')
    $("#alert-box").fadeOut()
});
$(document).on('click', '#exit, .overly', function(){
    $(".overly").css('display','none')
    $("#exit").css('display','none')
    $(".nav-items").css('display','none')
    $("#hamburger").css('display','grid')
   
});