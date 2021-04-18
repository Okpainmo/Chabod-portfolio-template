$(document).ready( function() {
  
  //navbar background toggle function.
  $(window).scroll(function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      $("#myNav").css("backgroundColor","rgba(255, 255, 255, 0.96");
      $("#myNav").css("boxShadow", "0 0 15px 1px hsl(0, 2%, 89%)");
    }
    else {
      $("#myNav").css("backgroundColor", "transparent");
      $("#myNav").css("boxShadow", "none");
    }
  }
)
},

//float button function
$(window).scroll(
  function(){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      $("#floatButton").css("display","block");
    }
    else {
      $("#floatButton").css("display","none");
    }
  }
),

//white background for mobile before navbar background toggles
$("#bars").click(
  function() {
    $("#navbarSupportedContent").css("backgroundColor", "rgba(255, 255, 255, 0.87)");
    $("#navbarSupportedContent").css("padding", "20px 0");
    $("#navbarSupportedContent").css("margin", "10px 0");
  }
),

//overlay for card pic case
$(".card-pic-case-child").hover(
  function() {
    $(this).animate({opacity:"1"}, "slow")
  },
  function() {
    $(this).animate({opacity:"0"}, "slow")
  }
),

//close icon funtion for overall-overlay (pop-up)
$("#closeIcon").click (
  function() {
    $("#popUpOverlay").fadeOut();
  }
),

//bottom close icon funtions for overall-overlay (pop-up)
$("#closeBtn1").click (
  function() {
    $("#popUpOverlay").fadeOut();
  }
),

$("#closeBtn2").click (
  function() {
    $("#popUpOverlay").fadeOut();
  }
),

$("#closeBtn3").click (
  function() {
    $("#popUpOverlay").fadeOut();
  }
),

//funtions for alternating text content for the works pop-up (overall-overlay)
//to display work1 content 
$("#work1").click(
  function() {
    $("#workInfo1").css("display", "block"),
    $("#workInfo2").css("display", "none"),
    $("#workInfo3").css("display", "none"),
    $("#popUpOverlay").fadeIn() 
  }
),

//to display work2 content 
$("#work2").click(
  function() {
    $("#workInfo1").css("display", "none"),
    $("#workInfo2").css("display", "block"),
    $("#workInfo3").css("display", "none"),
    $("#popUpOverlay").fadeIn() 
  }
),

//to display work3 content 
$("#work3").click(
function() {
    $("#workInfo1").css("display", "none"),
    $("#workInfo2").css("display", "none"),
    $("#workInfo3").css("display", "block"),
    $("#popUpOverlay").fadeIn() 
  }
)
)
