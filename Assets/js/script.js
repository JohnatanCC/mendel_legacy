
document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "1") {
 
      document.body.style.fontWeight = "bold";
    }
    if (event.key.toLowerCase() === "2") {
 
      document.body.style.fontWeight = "initial";
    }
 
  });
});