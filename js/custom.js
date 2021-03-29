// ------------Mmenu starts-----------
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#my-menu", {
            "extensions": [
                "pagedim-black",
                "position-right"
            ]
        });
    }
);
// ------------Mmenu ends-----------


// ----------search overlay-----------
$("#hsearch").click(function () {
    $(".search-overlay").addClass("active");
});

$(".search-overlay_close-icon").click(function () {
    $(".search-overlay").removeClass("active");
});
// ----------search overlay-----------


// if($(window).width() < 767)
// {
// // change functionality for smaller screens
// $(".listing-tab").champ({
// plugin_type : "accordion"
// });

// } else {
// // change functionality for larger screens
// $(".listing-tab").champ();
// }

// $('#responsiveTabsDemo').responsiveTabs({
//     startCollapsed: 'accordion'
// });


// ----------Sticky header ------------
window.onscroll = function() {myFunction()};

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// ------ increment decrement quantity ------

$(document).ready(function () {
    //var counter = $('#TextBox').val();
    $('#AddButton').click(function () {
        var counter = $('#quantity').val();
        counter++;
        $('#quantity').val(counter);
    });
    $('#SubtractButton').click(function () {
        if ($('#quantity').val() > 0) {
            var counter = $('#quantity').val();
            counter--;
            $('#quantity').val(counter);
        }
    });
});


// ---------- sidebar -----------
if (window.innerWidth < 1024) {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}


/*Product Thumbslider START*/
$('.thumbslider').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3,

        },
        768: {
            items: 4,

        },
        1024: {
            items: 3,
        },
        1249: {
            items: 3,
        }
    }
});
/*Product Thumbslider CLOSE*/

$('.featured-tab-slider').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        700: {
            items: 3

        },
        1024: {
            items: 4

        },
        1200: {
            items: 5

        }
    }
});


//   --------------animation activate-------------
new WOW().init();


//   ------------- noya logo banner slider -----------------
$('.home-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: true,
    dots: true
});

// -------- shop bby brand slider ---------------
$('.shop-by-brand-slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        700: {
            items: 3

        },
        1024: {
            items: 4

        },
        1200: {
            items: 5

        }
    }
})