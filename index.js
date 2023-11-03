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
