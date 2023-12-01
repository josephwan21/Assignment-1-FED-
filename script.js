document.addEventListener("DOMContentLoaded", function () {
    var navlinks = document.querySelectorAll("nav a"); //Selecting all navigation links from the html documents to apply the glowing function in

    navlinks.forEach(function (navlink) {
        navlink.addEventListener("mouseenter", function () { //When the mouse cursor hovers over the navigation link
            navlink.style.transition = "color 0.3s"; //Transition for the navigation link to change colour when hovered over 
            navlink.style.color = "white"; // Upon hovering mouse on the navigation links, it glows white.
        });

        navlink.addEventListener("mouseleave", function () { //When mouse leaves the navigation link
            navlink.style.color = "black"; // Reset color on mouse leave
        });
    });
});

function validateForm() { //Form Validation for the Contact Us Section
    var name = document.getElementById('name').value; //Setting up variables for each form with their respective unique IDs
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') { //The trim function essentially just removes white spaces, so if the user just puts space before a character, it'll be trimmed out
        alert('Please fill in all fields'); //If nothing is filled up in either of the fields, an alert should show up.
        return;
    }

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) { /*If the input put in the email address input box matches the string, it returns true which in this case is if emailRegex doesn't match the string
    in which case it'll alert the user to input a valid email address as shown below*/
        alert('Please enter a valid email address');
        return;
    }

    alert('Message submitted successfully!'); //If no issues, pop up should display this message
}