/*######################################################
                Services
######################################################*/
$(function()
{
    // animate on a scroll
new WOW().init();
});
$(function()
{
$("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
    enabled:true
  }
    });
});
/*######################################################
                Team
######################################################*/
$(function(){
    $("#team-members").owlCarousel({
       items:3,
       autoplay:true,
       smartSpeed:700,
       loop:true,
       autoplayHoverPause:true,
       responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        480 : {
            items:1
        },
        // breakpoint from 768 up
        768 : {
            items:2
        },
        // breakpoint from 992 up
        992:
        {
            items:3
        }
    }
    });
});
/*######################################################
                Testimonial
######################################################*/
$(function(){
    $("#cutomers-testimonials").owlCarousel({
       items:1,
       autoplay:true,
       smartSpeed:700,
       loop:true,
       autoplayHoverPause:true
    });
});
$(function(){
    $('.counter').counterUp({
        delay:10,
        time:3000
    });
});
/*######################################################
                client
######################################################*/
$(function(){
    $("#clients-list").owlCarousel({
       items:6,
       autoplay:true,
       smartSpeed:700,
       loop:true,
       autoplayHoverPause:true,
       responsive : {
        // breakpoint from 0 up
        0 : {
            items:2
        },
        // breakpoint from 480 up
        480 : {
            items:2
        },
        // breakpoint from 768 up
        768 : {
            items:4
        },
        // breakpoint from 992 up
        992:
        {
            items:6
        }
    }
    });
});
/*######################################################
                scroll
######################################################*/
$('body').scrollspy({ target: '#main-nav' })
/*######################################################
                current year
######################################################*/
$('#year').text(new Date().getFullYear());
/*######################################################
                navigation
######################################################*/
$(function()
{
    $(window).scroll(function(){
        if($(this).scrollTop() < 50)
        {
            //hide the navigation bar
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        }
        else
        {
            //show the the navigation bar
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
/*######################################################
                smooth scroll
######################################################*/
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        //get or return the section id like #services, #team, #work and etc
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop:$(section).offset().top
        }, 1250, "easeInOutExpo");
    });
});
//close menu on the click
$(function(){
    $(".navbar-collapse ul li a").click(function(){
        $(".navbar-toggler").click();
    });
});