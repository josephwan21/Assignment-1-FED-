document.addEventListener("DOMContentLoaded", function () {
    var navlinks = document.querySelectorAll("nav a"); //Selecting all hyperlinks from the html documents to apply the glowing function in

    navlinks.forEach(function (navlink) {
        navlink.addEventListener("mouseenter", function () { //When the mouse cursor hovers over the hyperlink
            navlink.style.transition = "color 0.3s"; //Transition for the hyperlink to change colour when hovered over 
            navlink.style.color = "white"; // Upon hovering mouse on the hyperlinks, it glows white.
        });

        navlink.addEventListener("mouseleave", function () { //When mouse leaves the hyperlink
            navlink.style.color = "black"; // Reset color on mouse leave
        });
    });
});