
document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "d") {

      document.body.style.transform = " rotate3d(1, 1, 1, 10deg)";
    }
    if (event.key.toLowerCase() === "o") {
 
      document.body.style.transform = " scaleX(1.5)";
    }
    if (event.key.toLowerCase() === "r") {
  
      document.body.classList.add('rotate') ;
    }
    if (event.key.toLowerCase() === "m") {

      document.body.style.transform = " scaleX(0)";
    }
    if (event.key.toLowerCase() === "i") {
      document.body.style.transform = " rotate3d(1, 1, 1, 360deg)";
    }
 
  });
});







//navbar-toggler-m

//Buttons Cards Events
/*
c("#theoryButton").addEventListener("click", () => {
  c("#homePage").classList.add("anim-cardSelected");
  setTimeout(NoneHome, 500);
  setTimeout(showTheory, 500);
});

c("#practiceButton").addEventListener("click", () => {
  c("#homePage").classList.add("anim-cardSelected");
  setTimeout(NoneHome, 500);
  setTimeout(showPractice, 500);
});
*/
//Clicks Events





/*
c("#practice").addEventListener("click", () => {
  showPractice();
});
c("#theory").addEventListener("click", () => {
  showTheory();
});
*/


//Functions
/*
function NoneHome() {
  c("#homePage").classList.add("d-none");
}

function showTheory() {
  c("#theoryPage").classList.remove("d-none");
  c("#homePage").classList.add("anim-cardSelected");
  c("#homePage").classList.add("d-none");
  c("#PracticePage").classList.add("d-none");
}

function showPractice() {
  c("#PracticePage").classList.remove("d-none");
  c("#homePage").classList.add("anim-cardSelected");
  c("#homePage").classList.add("d-none");
  c("#theoryPage").classList.add("d-none");
}
*/
