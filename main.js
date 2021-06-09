nosex=0;
nosey=0;
leftWristx=0;
rightWristx=0;
difference=0;
function preload(){

};
function setup(){
    Video=createCapture(VIDEO);
    Video.size(550,500);

    canvas=createCanvas(550,500)
    canvas.position(560,100);

    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex = "+nosex+" and nosey = "+nosey);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("left Wrist x= "+leftWristx+" right wrist x= "+rightWristx+" difference= "+difference);
    }
}

function draw()
 { background('#969A97');
  document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
  fill('#F90093'); stroke('#F90093');
  square(nosex, nosey, difference);
 }
