
const responsive = {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        560: {
            items: 2,
        },
        960: {
            items: 3,
        },
        
        }



$('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:4000,
        dots:true,
        loop:true,
        responsive: responsive,
        
       
        
        })
        $(document).ready(function () {

                $nav = $('.nav');
                $toggleicons = $('.toggle-icons');
            
                /** click event on toggle menu */
                $toggleicons.click(function () {
                    $nav.toggleClass('collapse');
                }) });