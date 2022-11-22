

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
    return false
});

$(document).on('click', '#submit-butt', function(){

 
    $("#alert-box").fadeIn()
    $(".overly").fadeIn()
    displayName ()
    return false;
})

$(document).on('click', '.overly, #exit-contact', function(){

    $("#alert-box").fadeOut()
    $(".overly").fadeOut()
 

})

function displayName (){
    var contactName =$('#name').val();
    var contactEmail =$('#email').val();
    var html;
    html =`
    <div>
        <span id="exit-contact" class="material-symbols-outlined text-blue pointer">
        close
        </span>
        <div class="p10 text-blue text-center">
        Merci ${contactName} pour votre message. <br><br><br>
        Un message sera envoyer à votre adresse ' ${contactEmail} ' dans les prochaines 24h.
        </div>
    </div>
    `
    $("#alert-box").html(html)
}