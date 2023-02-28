
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            300: {
                items: 3
            },
            450: {
                items: 4
            },
            650: {
                items: 5
            },
            1000: {
                items: 9
            }
        }
    });
    $(".owl-prev").html('<i class="owlLeft fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class=" owlRight fa fa-chevron-right"></i>');
});


// window.addEventListener('scroll' , function(e) {
//     e.preventDefault();

//     let $headers = document.getElementById('headerUp');

//     if(window.pageYOffset > 50) {
//         $headers.style.top = '0px';
//         $headers.style.position = 'fixed';
//     }else{
//         $headers.style.top = '0px';
//          $headers.style.position = 'static';
//     }

//     // console.log(window.pageYOffset);
// })
// $(window).resize(function () {
//     if ($(window).width() <= 800) {
//         console.log("salam");
//     }
//     else {
//         console.log("sagol");

//      }
// });

