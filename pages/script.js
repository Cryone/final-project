$ (document).ready (function () {




})
// ***************************************
// ******************************************
// SWIPER GALLERY PHOTOS
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



// ***************************************
// ******************************************
// ON CLICK TO PRODUCT PAGE === SINGLE PAGE WITH INDEX.HTML
$(document).on('click', '#studio', function(){
    
    displayStudio()
    
    $(".product-container").css('display','grid')
    $(".inner-nav").fadeOut()
    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".footer").css('height','100px')
 
 })
 

$(document).on('click', '#f2', function(){
 
    displayF2()
    $(".product-container").css('display','grid')
    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".footer").css('height','100px')

 })
$(document).on('click', '#f3', function(){

    displayF3()
    $(".product-container").css('display','grid')
    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".footer").css('height','100px')
 })
$(document).on('click', '#f4', function(){

    displayF4()
    $(".product-container").css('display','grid')
    $(".header-main").fadeOut()
    $("#best-product").fadeOut()
    $(".footer").css('height','100px')
 })

function displayStudio (){

    var html;
    html =
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
    {"location":"Alger", "location_detail":"F2","price":"5000","tags":["1","2"]},
    {"location":"Tipasa", "location_detail":"F2","price":"5000","tags":["1","2"]},
    {"location":"Oran", "location_detail":"F2","price":"5000","tags":["1","2"]},
    {"location":"Annaba", "location_detail":"F2","price":"5000","tags":["1","2"]},
    {"location":"Mostaganem", "location_detail":"F2","price":"5000","tags":["1","2","4"]},
    {"location":"ouargla", "location_detail":"F2","price":"5000","tags":["4","2"]},
    {"location":"Tamanrasset", "location_detail":"F2","price":"5000","tags":["4","2"]},
    {"location":"Illizi", "location_detail":"F2","price":"5000","tags":["1","2"]},
    {"location":"boumerdes", "location_detail":"F2","price":"5000","tags":["1","2"]},
    {"location":"Blida", "location_detail":"F2","price":"5000","tags":["1","2"]},


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

    for (var element of tags){
        var html;
        var id =element.id;
        var name =element.name;

        html=`<div class="inner-nave-items grid text-center p10 pointer data-id="${id}">
        <span class="material-symbols-outlined text-center small-text">
            bathtub
        </span>
        <div>${name}</div>
    </div>`
        $(".inner-nav").append(html)
    }
}


$(document).on('click','.inner-nave-items',function(){
    var tag_id=$(this).data('id')

    display_products({tag:tag_id})


})

function display_products(filters){

    $(".products-container").html("")

    
// Here we are looping for defining the elements of each objects
    for(var element of products) {

        var html;

        var name=element.name
        var host_name=element.host_name
        var location=element.location
        var location_detail=element.location_detail
        var host_type=element.host_type
        var price=element.price
        // var image=element.images[0]
        var tags = element.tags
        var check_tag = []
        if(filters && filters.tag){
            for( var tag of tags){
                if(tag != filters.tag) continue
                check_tag.push('true')
            }
            if(check_tag.length==0)continue
    
        }
        console.log(check_tag)


        html=`
        <div>
        <div class="grid best-product-container-box-alger text-white center big-text pointer">
        ${location}
        </div>
        <div class="text-center">
            <div class=" text-black bold left pointer">Alger centre</div>
            <div class="text-gray left pointer ">${location_detail}  </div>
            <div class="text-gray left pointer">${location_dates} </div>
            <div class="center text-black bold left pointer pt10">${price} par nuit</div>
        </div>
    </div>
        
        `

        // <a href="./product.html" target="_blank">
        // <div class="grid center card-product" >
        //     <div class="grid center w100 pointer product-img"><img src="./img/${image}" alt=""></div>
        //     <div class="w100 p10 h100 pt40">          
        //         <div class=" text-black bold left pointer">${location}</div>
        //         <div class="text-gray left pointer">${location_detail}  </div>
        //         <div class="text-gray left pointer">${host_type}  </div>
        //         <div class="center text-black bold left pointer pt10">${price}$ per night</div>
        //     </div>
        // </div>
        // </a>

        $(".best-product-container").append(html)


        }
}

