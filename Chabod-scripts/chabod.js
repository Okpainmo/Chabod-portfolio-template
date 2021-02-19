window.onscroll = function() {scrollBuddy()};

function scrollBuddy() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("mynav").style.backgroundColor = "rgba(255, 255, 255, 0.96)";
  } else {
    document.getElementById("mynav").style.backgroundColor = "transparent";
  }
}

const bars = document.getElementById("bars");

function navClick() {
    document.getElementById("navbarSupportedContent").style.backgroundColor = "rgba(255, 255, 255, 0.87)";
    document.getElementById("navbarSupportedContent").style.padding = "20px 0" 
}

bars.addEventListener("click", navClick)
