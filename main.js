// Get elements from the DOM
const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');

// Offset value for the slides container
let offset = 0;
// Slide ID on increment
let slideIncrement = 0;
// Slide ID on decrement
let slideDecrement = slides.length - 1;

// Add click event to right arrow
arrRight.addEventListener('click', ()=>{
    // Disable right arrow button
    arrRight.disabled=true;
    // Set offset to slide width
    offset = slides[0].offsetWidth;
    // Set container transition
    container.style.transition = "left ease-in-out 0.5s";
    // Move slides container by negative offset
    container.style.left = -offset + 'px';
    //Set a timeout
    setTimeout(()=>{
        // Remove container transition
        container.style.transition = "none";
        // Move the current slide to the last position
        slides[slideIncrement].style.order = slides.length - 1;
        // Move the container back to the statring position
        container.style.left = 0;
        // Increment slide increment ID
        slideIncrement++;
        // Set decrement ID to previous increment ID
        slideDecrement = slideIncrement - 1;
        // If the slide increment ID reaches the slides length
        if(slideIncrement === slides.length){
            // Set the slide increment ID to zero
            slideIncrement = 0;
            // Select all slides
            slides.forEach(slide =>{
                // Reset all slides order
                slide.style.order = "initial";
            });
        }
        // Enable right arrow click
        arrRight.disabled = false;
    },500);
});

// Add click event to left arrow
arrLeft.addEventListener('click', ()=>{
    // Diasble left arrow button
    arrLeft.disabled = true;
    // Set offset to slide width
    offset = slides[0].offsetWidth;
    // Remove container transition
    container.style.transition = "none";
    // check if slide decrement is below zero
    if(slideDecrement < 0){
        // Select all slides
        slides.forEach(slide => {
            // Reset all slides order
            slide.style.order = "initial";
        });
        // Set decremrent ID to last slide index
        slideDecrement = slides.length - 1;
    }
    // Move the current slide to the first position
    slides[slideDecrement].style.order = "-1";
    // Move slides container by neagative offset
    container.style.left = -offset +'px';
    // Set a short timeout
    setTimeout(()=>{
        // Set container transition
        container.style.transition = "left ease-in-out 0.5s"
        // Move the contianer back to the starting positon
        container.style.left=0;
    },1);
    // Set a timeout
    setTimeout(()=>{
        // Decrement slide decrement ID
        slideDecrement--;
        // Set increment ID to previous decrement ID
        slideIncrement = slideDecrement+1;
        // Enable left arrow click
        arrLeft.disabled=false;
    },500);
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};