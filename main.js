function preload()
{

}

function setup()
    {
        canvas=createCanvas(640, 480);
        canvas.position(110, 150);
        video=createCapture(VIDEO);
        video.hide();

        tint_color="";
    }

    function draw()
        {
            image(video, 170, 90, 300, 300);
            tint(tint_color);
            circle(40, 30, 50);
            ellipse(600, 30, 55, 55);
            rect(60, 20, 520, 15);
            ellipse(600, 430, 55, 55);
            rect(30, 50, 15, 370);
            circle(40, 420, 50);
            rect(590, 50, 15, 370);
            rect(60, 420, 520, 15);
        }
    
        function take_snapshot()
            {
                save('student_name.png');
            }