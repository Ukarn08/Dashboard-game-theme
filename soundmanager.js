// githublink  audio 

var audio = new Audio("CosmicLaugh.mp3");

audio.volume = 0.1;
audio.onclick = function(){
audio.play();
}



// Sound selection on hover


document.addEventListener("DOMContentLoaded", function () {
    const hoverSound = document.getElementById('hoverSound');
    const buttons = document.querySelectorAll('.hover-button'); // Select all buttons with the class 'hover-button'

     // Adjust the volume level (0.5 reduces the volume to half)
     hoverSound.volume = 0.1;

    function playHoverSound() {
        hoverSound.currentTime = 0; // Reset sound to the beginning
        hoverSound.play();
    }

    buttons.forEach(button => {
        button.addEventListener('mouseenter', playHoverSound);
    });
});





