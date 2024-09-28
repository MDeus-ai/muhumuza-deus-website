window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 443) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
})

window.addEventListener('scroll', function() {
    var my_name = document.getElementById('muhumuzadeus_on_header');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollPosition > 450) {
        my_name.textContent = 'MUHUMUZA DEUS\\>'; // Adding the content
        my_name.style.visibility = 'visible'; // Make it visible
        my_name.style.fontWeight = "bolder"
    }
    
     
    else {
        my_name.style.visibility = 'hidden'; // Hide it
        my_name.textContent = ''; // Remove the content
    }

});


    



document.querySelector('.menu_hamburger').addEventListener('click', function() {
    var offcanvas = document.getElementById('offcanvasMenu');
    offcanvas.style.right = "0"; // Open the offcanvas
});

document.querySelector('.close-offcanvas').addEventListener('click', function() {
    var offcanvas = document.getElementById('offcanvasMenu');
    offcanvas.style.right = "-100%"; // Close the offcanvas
});

// Close the offcanvas by clicking outside of it
window.addEventListener('click', function(event) {
    var offcanvas = document.getElementById('offcanvasMenu');
    if (event.target == offcanvas) {
        offcanvas.style.right = "-100%";
    }
});
