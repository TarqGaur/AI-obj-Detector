function reveal() {
    console.log("scrolled");
    var reveals = document.querySelectorAll('.section');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

inputvar = "";
status1 = "";
function setup(){
    setTimeout(function(){
        canvas = createCanvas(450,450);
        canvas.center();
       
    }, 5000);
    video = createCapture(VIDEO);
    video.hide();
}
function start() {
    objectdetector = ml5.objectDetector("COCOSSD",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
    inputvar = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model is loaded");
    status1 = "true";
}
function draw() {
    image(video,0,0,450,450);
}




