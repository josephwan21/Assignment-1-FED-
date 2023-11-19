document.addEventListener("DOMContentLoaded", function () {
    var hyperlinks = document.querySelectorAll("nav a"); //Selecting all hyperlinks from the html documents to apply the glowing function in

    hyperlinks.forEach(function (hyperlink) {
        hyperlink.addEventListener("mouseenter", function () { //When the mouse cursor hovers over the hyperlink
            hyperlink.style.transition = "color 0.3s"; //Transition for the hyperlink to change colour when hovered over 
            hyperlink.style.color = "white"; // Upon hovering mouse on the hyperlinks, it glows white.
        });

        hyperlink.addEventListener("mouseleave", function () { //When mouse leaves the hyperlink
            hyperlink.style.color = "black"; // Reset color on mouse leave
        });
    });
});