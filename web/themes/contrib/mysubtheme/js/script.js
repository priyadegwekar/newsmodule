jQuery(document).ready(function(){
    let name = prompt("What is your first name?");
    let email = prompt("What is your email?");
    if ($("body").hasClass("path-newss")) {
        alert("Your name is " + name + " " + email);
    }
}); 