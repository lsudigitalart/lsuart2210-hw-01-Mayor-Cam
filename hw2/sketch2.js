// Cameron Moore - hw2

function setup()
{
  var canvasWidth = 400;
  var canvasHeight = 269;
  createCanvas(canvasWidth,canvasHeight);

  // Black Background
  fill(0,0,0);
  rect(0,0, canvasWidth, canvasHeight);

  // Yellow circle
  fill(230,180,18)
  ellipse(0,225,320,300);

  strokeWeight(6);
  ellipse(0,225, 310, 275);
  ellipse(0,225, 305, 253);
  ellipse(0,225, 295, 234);
  strokeWeight(8);
  ellipse(0,225, 285, 217);

  line(0,132, 64,203);
  line(0,202,46,204);
  strokeWeight(12);
  line(0,179,51,203);


  // Skin colored circle
  strokeWeight(8);
  fill(219,197,186);
  ellipse(90,300,280, 200);






  // Red Background on top
  fill(150,2,0);
  rect(0,0,canvasWidth, 73);



  // Lines over red background
  strokeWeight(7);
  line(0, 38, canvasWidth, 33);
  line(0, 61, canvasWidth, 55);
  line(0, 73, canvasWidth, 69);
}
