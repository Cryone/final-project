$ (document).ready (function () {

    
    display_tags ()

})


// ***************************************
// ******************************************
// ON CLICK HAMBURGER
$(document).on('click', '#hamburger', function(){
    $(".overly").css('display','grid')
    $("#exit").css('display','grid')
    $(".nav-items").css('display','grid')
    $("#hamburger").css('display','none')
    


});

$(document).on('click', '#exit, .overly', function(){
    $(".overly").css('display','none')
    $("#exit").css('display','none')
    $(".nav-items").css('display','none')
    $("#hamburger").css('display','grid')

    return false
});


// ***************************************
// ******************************************
// ON CLICK TO PRODUCT PAGE === SINGLE PAGE WITH INDEX.HTML
$(document).on('click', '.studio', function(){
    $(".product-container").css('display','grid')
    displayStudio()    
    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".nav-mobile").css('display','none')
    $(".overly").css('display','none')
    
    $(".footer").css('height','100px')
    new Swiper('.swiper', {
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


})


$(document).on('click', '.f2', function(){
    $(".product-container").css('display','grid')
    displayF2()
   
    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".nav-mobile").css('display','none')
    $(".overly").css('display','none')
    $(".footer").css('height','100px')
    new Swiper('.swiper', {
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

 })
$(document).on('click', '.f3', function(){
    $(".product-container").css('display','grid')
    displayF3()
    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".nav-mobile").css('display','none')
    $(".overly").css('display','none')
    $(".footer").css('height','100px')
    new Swiper('.swiper', {
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
 })
$(document).on('click', '.f4', function(){
    $(".product-container").css('display','grid')
    displayF4()

    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".nav-mobile").css('display','none')
    $(".overly").css('display','none')
    $(".footer").css('height','100px')
    new Swiper('.swiper', {
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
 })

function displayStudio (){


    var html =
            `<div class="header-details">
            <div class="grid p10 text-white very-big-text">
                Alger centre - Alger 
            </div>
            <div class=" text-white big-text p10"> 
            Découvrer notre cozy studio
            </div>
        </div>
        <div class="flex space-between">
            <div class="grid swiper">
        
                <div class="swiper-wrapper">
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
               </div>
               <div class="swiper-pagination p10 center"></div>
           
               <div class="swiper-button-prev text-white  "></div>
               <div class="swiper-button-next text-white  "></div>
           
               <div class="swiper-scrollbar white center "></div>
           </div>
           <div class="grid pl30 side-text">
               <div class="grid p10 text-white  ">
                   Vous voulez vérifier la disponibilité ? <a class="grid pointer text-white bold" href="../pages/contact.html">CLIQUEZ-ICI</a> 
               </div>
               <div class=" grid text-white p10 right"> 
                   Prix : 5000da par nuit
               </div>
               <div class=" grid text-white p10 right"> 
                Les frais de services sont estimé à 1%
            </div>
            <div class=" grid text-white p10 right"> 
                Toutes nos réservations sont limitées
            </div>
           </div>
        </div>`
    $(".product-container").html(html)
}

function displayF2 (){

    var html;
    html =
            `<div class="header-details">
            <div class="grid p10 text-white very-big-text">
                Alger centre - Alger 
            </div>
            <div class=" text-white big-text p10"> 
            Découvrer notre jolie F2
            </div>
        </div>
        <div class="flex space-between">
            <div class="grid swiper">
        
                <div class="swiper-wrapper">
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
               </div>
               <div class="swiper-pagination p10 center"></div>
           
               <div class="swiper-button-prev text-white  "></div>
               <div class="swiper-button-next text-white  "></div>
           
               <div class="swiper-scrollbar white center "></div>
           </div>
           <div class="grid pl30 side-text">
               <div class="grid p10 text-white  ">
                   Vous voulez vérifier la disponibilité ? <a class="grid pointer text-white bold" href="../pages/contact.html">CLIQUEZ-ICI</a> 
               </div>
               <div class=" grid text-white p10 right"> 
                   Prix : 8000da par nuit
               </div>
               <div class=" grid text-white p10 right"> 
                Les frais de services sont estimé à 2%
            </div>
            <div class=" grid text-white p10 right"> 
                Toutes nos réservations sont limitées
            </div>
           </div>
        </div>`
    $(".product-container").html(html)
}

function displayF3 (){

    var html;
    html =
            `<div class="header-details">
            <div class="grid p10 text-white very-big-text">
                Alger centre - Alger 
            </div>
            <div class=" text-white big-text p10"> 
            Explorer nos spacieux F3
            </div>
        </div>
        <div class="flex space-between">
            <div class="grid swiper">
        
                <div class="swiper-wrapper">
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
               </div>
               <div class="swiper-pagination p10 center"></div>
           
               <div class="swiper-button-prev text-white  "></div>
               <div class="swiper-button-next text-white  "></div>
           
               <div class="swiper-scrollbar white center "></div>
           </div>
           <div class="grid pl30 side-text">
               <div class="grid p10 text-white  ">
                   Vous voulez vérifier la disponibilité ? <a class="grid pointer text-white bold" href="../pages/contact.html">CLIQUEZ-ICI</a> 
               </div>
               <div class=" grid text-white p10 right"> 
                   Prix : 12000da par nuit
               </div>
               <div class=" grid text-white p10 right"> 
                Les frais de services sont estimé à 3%
            </div>
            <div class=" grid text-white p10 right"> 
                Toutes nos réservations sont limitées
            </div>
           </div>
        </div>`
    $(".product-container").html(html)
}

function displayF4 (){

    var html;
    html =
            `<div class="header-details">
            <div class="grid p10 text-white very-big-text">
                Alger centre - Alger 
            </div>
            <div class=" text-white big-text p10"> 
            Réserver l'un de nos sublime F4
            </div>
        </div>
        <div class="flex space-between">
            <div class="grid swiper">
        
                <div class="swiper-wrapper">
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product1.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product2.jpg" alt=""></div>
                   <div class="swiper-slide  "><img src="../res/product3.jpg" alt=""></div>
               </div>
               <div class="swiper-pagination p10 center"></div>
           
               <div class="swiper-button-prev text-white  "></div>
               <div class="swiper-button-next text-white  "></div>
           
               <div class="swiper-scrollbar white center "></div>
           </div>
           <div class="grid pl30 side-text">
               <div class="grid p10 text-white  ">
                   Vous voulez vérifier la disponibilité ? <a class="grid pointer text-white bold" href="../pages/contact.html">CLIQUEZ-ICI</a> 
               </div>
               <div class=" grid text-white p10 right"> 
                   Prix : 18000da par nuit
               </div>
               <div class=" grid text-white p10 right"> 
                Les frais de services sont estimé à 6%
            </div>
            <div class=" grid text-white p10 right"> 
                Toutes nos réservations sont limitées
            </div>
           </div>
        </div>`
    $(".product-container").html(html)
}


// ***************************************
// ******************************************
// TAGS FITLERS
var products=[
    {"location":"Alger", "location_detail":"F2","location_dates":"14 février - 5 mars","price":"5000","tags":["1","2"],"img":"1"},


    {"location":"Tipasa", "location_detail":"F3","location_dates":"14 janvier - 20 avril","price":"5000","tags":["1","2","5"], "img":"2"},


    {"location":"Oran", "location_detail":"F4","location_dates":"10 juillet - 15 septembre","price":"5000","tags":["1","2","3"], "img":"3"},


    {"location":"Annaba", "location_detail":"studio","location_dates":"14 février - 5 mars","price":"5000","tags":["1","2","3"], "img":"4"},


    {"location":"Mostaganem", "location_detail":"F4","location_dates":"14 février - 5 mars","price":"5000","tags":["1","2","4","5"], "img":"2"},


    {"location":"ouargla", "location_detail":"F3","location_dates":"14 janvier - 20 avril","price":"5000","tags":["4","2"], "img":"6"},


    {"location":"Tamanrasset", "location_detail":"F2","location_dates":"10 juillet - 15 septembre","price":"5000","tags":["4","2","3"], "img":"7"},


    {"location":"Illizi", "location_detail":"studio","location_dates":"10 juillet - 15 septembre","price":"5000","tags":["1","2"], "img":"3"},

    {"location":"boumerdes", "location_detail":"studio","location_dates":"10 juillet - 15 septembre","price":"5000","tags":["1","2","5"], "img":"4"},

    {"location":"Blida", "location_detail":"F2","location_dates":"14 février - 5 mars","price":"5000","tags":["1","2","3"], "img":"3"},
]

var tags=[
{"id":"1","name":"Plusieurs sanitaires!"},
{"id":"2","name":"Prix bas"},
{"id":"3","name":"Maisons de vaccances"},
{"id":"4","name":"Niveau de villa!"},
{"id":"5","name":"Salle des fêtes"},
] 


function display_tags (){
    $(".inner-nav").html("")

    for (let element of tags){
        
        var id =element.id;
        var name =element.name;

        var html=`<div class="inner-nav-items grid text-center p10 pointer" data-id="${id}">
        <span class="material-symbols-outlined text-center small-text">
            bathtub
        </span>
        <div>${name}</div>
    </div>`
        $(".inner-nav").append(html)
    }
}


$(document).on('click','.inner-nav-items',function(){
    var tag_id=$(this).data('id')
    console.log(tag_id);
    var filters = {tag:tag_id}
    display_products(filters)
    $(".header-main").css('display','none')
    var element = document.querySelector("#best-product")
    element.scrollIntoView()
})

function display_products(filters){
    $(".best-product-container").html("")
    
// Here we are looping for defining the elements of each objects
    for(var element of products) {
        // var image=element.images[0]
        var tags = element.tags
        var result = 0
        // var check_tag = []
        if(filters && filters.tag){
            for( var tag of tags){
                if(tag != filters.tag) continue
                result = 1
            }
           
        console.log(result,element)
            if (result != 1) continue

        }



       var html=`
        <div>
        <div class="grid best-product-container-box text-white center big-text pointer">
        
        <img src="../res/${element.img}.jpg" alt="">
        </div>
        <div class="text-center">
            <div class=" text-black bold left pointer">${element.location}</div>
            <div class="text-gray left pointer ">${element.location_detail}  </div>
            <div class="text-gray left pointer">${element.location_dates} </div>
            <div class="center text-black bold left pointer pt10">${element.price} par nuit</div>
        </div>
    </div>
        
        `
        $(".best-product-container").append(html)


        }
}

