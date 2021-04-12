//navbar background toggle function.
$(document).ready( function() {
  $(window).scroll(function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      $("#mynav").css("backgroundColor","rgba(255, 255, 255, 0.96");
      $("#mynav").css("boxShadow", "0 0 15px 1px hsl(0, 2%, 89%)");
    }
    else {
      $("#mynav").css("backgroundColor", "transparent");
      $("#mynav").css("boxShadow", "none");
    }
}
)
})

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

$(".card-pic-case-child").hover(
  function() {
    $(this).animate({opacity:"1"}, "slow")
  },
  function() {
    $(this).animate({opacity:"0"}, "slow")
  }
)
