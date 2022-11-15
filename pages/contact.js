var name =$('#name')

function displayName ({
    

})
$(document).on('click', '#submit-butt', function(){

 
    $("#alert-box").fadeIn()
    $(".overly").fadeIn()

    return false;
})

$(document).on('click', '.overly, #exit-contact', function(){

    $("#alert-box").fadeOut()
    $(".overly").fadeOut()


})