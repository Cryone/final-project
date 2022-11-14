

$(document).on('click', '#submit-butt', function(){

 
    $("#alert-box").css("display","grid","important")
    $(".overly").css("display","grid","important")


})

$(document).on('click', '.overly, #exit-contact', function(){

    $("#alert-box").css('display','grid')
    $(".overly").fadeOut()


})