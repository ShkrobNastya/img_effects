const myImg = document.getElementById("myImg");
const clouds = document.getElementById("clouds");
const airplane = document.getElementById("airplane");
const ballloons = document.querySelector(".hotairballoon");

myImg.addEventListener ('click', () => {
    if(clouds.style.animationPlayState == "paused") {
        clouds.style.animationPlayState = "running";
        airplane.style.animationPlayState = "running";
        ballloons.style.animationPlayState = "running";
        myImg.src="./img/pause.png";
    }
    else {
        clouds.style.animationPlayState = "paused";
        airplane.style.animationPlayState = "paused";
        ballloons.style.animationPlayState = "paused";
        myImg.src="./img/play.png";
    }
});