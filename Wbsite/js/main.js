$(document).ready(function(){
  


 $('.owl-one').owlCarousel({
  
  items:4,
  loop:true,
  margin:30,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:6,
          nav:false,
          loop:false
      }
  }
  
  /*navtext:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>' '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']*/
  

});


$('.owl-two').owlCarousel({


    items:4,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsiveClass:true,
    animateOut: 'fadeOut',
    smartSpeed:1000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
    
    /*navtext:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>' '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']*/
    
  
  });

// $('.owl-three').owlCarousel({
  
//     items:4,
//     loop:true,
//     margin:30,
//     autoplay:true,
//     autoplayTimeout:5000,
//     autoplayHoverPause:false,
//     responsiveClass:true,
//     rtl:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:1,
//             nav:false,
//             loop:false
//         }
//     }
    
//     /*navtext:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>' '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']*/
    
  
//   });

$('.owl-three').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

$('.owl-four').owlCarousel({
  
    items:4,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
    
    /*navtext:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>' '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']*/
    
  
  });

$('.owl-five').owlCarousel({

    rtl:true,
    items:4,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
    
    /*navtext:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>' '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']*/
    
  
  });  



$('.owl-six').owlCarousel({
  
    items:4,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
    
    /*navtext:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>' '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']*/
    
  
  });
  
  

});

function showMenu(){
    let showIcon=document.querySelector(".menubar");
    let mainMenu=document.querySelector(".menu");
    mainMenu.classList.add("menu_show");
}








