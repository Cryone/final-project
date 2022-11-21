$(document).on('click', '#studio', function(){
    displayStudio()
    displayF2()
    displayF3()
    displayF4()
     return false
 })

function displayStudio (){

    var html;
    html =
            `<div class="grid p10 text-white very-big-text">
            Alger centre - Alger 
            </div>
            <div class=" text-white big-text p10"> 
            Découvrez notre cozy studio
            </div>`
    $(".header-details").html(html)
}

function displayF2 (){

    var html;
    html =
            `<div class="grid p10 text-white very-big-text">
            Alger centre - Alger 
            </div>
            <div class=" text-white big-text p10"> 
            Découvrez notre petit  studio
            </div>`
    $(".header-details").html(html)
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
   
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });