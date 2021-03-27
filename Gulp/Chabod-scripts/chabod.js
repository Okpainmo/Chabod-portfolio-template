// VARIABLES BEGIN//  // VARIABLES BEGIN//

const bars = document.getElementById("bars");

//VARIABLES END//  //VARIABLES END//


function scrollBuddy() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("mynav").style.backgroundColor = "rgba(255, 255, 255, 0.96)";
    document.getElementById("mynav").style.boxShadow = "0 0 15px 1px hsl(0, 2%, 89%)";
  } else {
    document.getElementById("mynav").style.backgroundColor = "transparent";
    document.getElementById("mynav").style.boxShadow = "none";
  }
}

function floatTopButton() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("floatButton").style.display = "block";
  }
  else {
    document.getElementById("floatButton").style.display = "none";
  }
}

function navClick() {
    document.getElementById("navbarSupportedContent").style.backgroundColor = "rgba(255, 255, 255, 0.87)";
    document.getElementById("navbarSupportedContent").style.padding = "20px 0"; 
}

//EVENT LISTENERS BEGIN//  //EVENT LISTENERS BEGIN //

window.addEventListener ("scroll", floatTopButton);
window.addEventListener ("scroll", scrollBuddy);
bars.addEventListener("click", navClick);
