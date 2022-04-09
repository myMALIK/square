noseX =0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup() {

    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('POSE NET IS INITIALISED')
}

function draw() {
    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = " + difference + "px";
    background('#969A97')
    fill('#F90093')
    stroke('#F90093')
    square(noseX, noseY, difference)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX + "noseY " +noseY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference );
    }
}