function preload()
{}
function setup()
{
    canvas = createCanvas(500,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
}
function draw()
{
    image(video, 110, 110, 300, 300)
    fill(255, 255, 205)
    circle(31, 31, 60);
    circle(95, 31, 60);
    circle(159, 31, 60);
    circle(223, 31, 60);
    circle(287, 31, 60);
    circle(350, 31, 60);
    circle(414, 31, 60);
    circle(478, 31, 60); 
    circle(31, 465, 60);
    circle(95, 465, 60);
    circle(159, 465, 60);
    circle(223, 465, 60);
    circle(287, 465,60);
    circle(350, 465, 60);
    circle(414, 465, 60);                         
    circle(478, 465, 60);
}
function takeSnapshot()
{}