function preload(){}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    circle(50,50,100);
    circle(590,50,100);
    circle(590,430,100); 
    circle(50,430,100);
    video = createCapture(VIDEO);
    
}