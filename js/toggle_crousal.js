

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
    
  });
});



$(document).ready(function(){
 $("#flip").click(function () {
    $("#flip i").toggleClass("down");
})
});


$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
    items:4,
    itemsDesktop:[1000,2],
    itemsTablet:[768,3],
    itemsDesktopSmall:[980,2],
    pagination:true,
    navigation:true,
    navigationText:["<",">"],
    autoPlay:true
    });
});