 /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

  // Toggle tranparent navbar when the user scrolls the page

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

  $(document).ready(function(ev){
    var items = $(".nav li").length;
    var leftRight=0;
    if(items>5){
        leftRight=(items-5)*50*-1;
    }
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
        
 
      $('#custom_carousel .controls li.active').removeClass('active');
      $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })
    $('.nav').draggable({ 
        axis: "x",
         stop: function() {
            var ml = parseInt($(this).css('left'));
            if(ml>0)
            $(this).animate({left:"0px"});
                if(ml<leftRight)
                    $(this).animate({left:leftRight+"px"});
                    
        }
      
    });
});