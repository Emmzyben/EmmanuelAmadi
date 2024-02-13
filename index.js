
document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("targetDiv");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("targetDiv1");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("portfolio");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("targetDiv3");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});



function myFunction(x) {
    x.classList.toggle("change");
  }

  var open = false;

  function openNav() {
    var sideNav = document.getElementById("mySidenav");

    if (sideNav.style.width === "0px" || sideNav.style.width === "") {
        sideNav.style.width = "250px";
        open = true;
    } else {
        sideNav.style.width = "0";
        open = false;
    }
}


document.querySelectorAll("#mySidenav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
   
        event.stopPropagation();

        var sideNav = document.getElementById("mySidenav");
        sideNav.style.width = "0";
        open = false;
    });
});
