//navbar background toggle function.
$(document).ready( function() {
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
})

// $(document).ready( function() {
//   $(window).scroll(function(){
//     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//       $(".works-heading").css("position","fixed");
//       $(".works-heading").css("top", 0);
//       $(".works-heading").css("left", 0);
//     }
//     else {
//       $("#myNav").css("backgroundColor", "transparent");
//       $("#myNav").css("boxShadow", "none");
//     }
//   }
// )
// })
// $(document).ready( function() {
//   $(window).scroll(function(){
//     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//       $(".works-heading").css("position","fixed");
//       $(".works-heading").css("top", 0);
//       $(".works-heading").css("left", 0);
//     }
//     else {
//       $("#myNav").css("backgroundColor", "transparent");
//       $("#myNav").css("boxShadow", "none");
//     }
//   }
// )
// })

//float button function.
$(document).ready(
  $(window).scroll(
    function(){
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
          $("#floatButton").css("display","block");
        }
        else {
          $("#floatButton").css("display","none");
        }
      }
  )
)

//mobile navigation background function
$(document).ready(
  $("#bars").click(
    function() {
      $("#navbarSupportedContent").css("backgroundColor", "rgba(255, 255, 255, 0.87)");
      $("#navbarSupportedContent").css("padding", "20px 0");
    }
  )
)

//works section hover effect
$(document).ready(
  $(".card-pic-case-child").hover(
    function() {
      $(this).animate({opacity:"1"}, "slow")
    },
    function() {
      $(this).animate({opacity:"0"}, "slow")
    }
  )
)


$(document).ready(
  $("#closeIcon").click (
    function() {
      $("#popUpOverlay").fadeOut();
    }
  )
)

$(document).ready (
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
  )
)

$(document).ready(
  $("#work1").click(
      function() {
      $("#workInfo1").css("display", "block"),
      $("#workInfo2").css("display", "none"),
      $("#workInfo3").css("display", "none"),
      $("#popUpOverlay").fadeIn() 
    }
  ),
  $("#work2").click(
    function() {
    $("#workInfo1").css("display", "none"),
    $("#workInfo2").css("display", "block"),
    $("#workInfo3").css("display", "none"),
    $("#popUpOverlay").fadeIn() 
    }
  ),
  $("#work3").click(
    function() {
    $("#workInfo1").css("display", "none"),
    $("#workInfo2").css("display", "none"),
    $("#workInfo3").css("display", "block"),
    $("#popUpOverlay").fadeIn() 
    }
  )
)