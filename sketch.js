function setup()
{
  var canvasWidth = 500;
  var canvasHeight = 500;
  createCanvas(canvasWidth,canvasHeight);

  var radius = 50;                 // radius begins at max radius
  var lineSpace = 500/3;           // distance between lines
  var dotSpace = lineSpace/6;      // distance between circles that form lines

  //parent for-loop copies concentric circles along the x axis to create a pattern
  for (var j = 0; j < canvasWidth * 2; j = j + lineSpace)
  {
    //nested for-loop copies concentric circles at line intersections along the y axis.
    for (var y = 0; y <= canvasHeight; y = y + lineSpace)
    {
      //nested for loop creates concentric circles
      for (var r = 7; r > 3; r--)
      {
          if (r == 7 || r == 5)
            {fill(0,0,0);}
          else
            {fill(255,255,255);}
          ellipse(j, y, radius + r*10);   //concentric circles at intersections all the way to the left
          ellipse(j + lineSpace/2, y + lineSpace/2, radius + r*10)    // staggered concentric circles at the next column of intersections
      }
    }
  }

  var radius2 = lineSpace - radius;   // radius of border circles that cover up diamond shapes
  // creates black circles that obscure half-diamond shapes on the borders
  for (var i = lineSpace/2;  i < canvasWidth; i+= lineSpace )
  {
      fill(0,0,0);
      ellipse(i,0, radius2);               //top row of black circles
      ellipse(i, canvasHeight, radius2);  //bottom row of black circles
      ellipse(0,i, radius2);              //left row of black circles
      ellipse(canvasWidth, i, radius2);   //right row of black circles
  }
/*
    fill(0,0,0);
    ellipse(canvasWidth/2,0,radius2);
    ellipse(canvasWidth/2, canvasHeight, radius2);
    ellipse(0, canvasHeight/2, radius2);
    ellipse(canvasWidth, canvasHeight/2, radius2);
*/

  //parent for-loop copies lines along the x axis to create a pattern
  for (var j = 0; j < canvasWidth * 2; j += lineSpace)
  {

    //nested for-loop creates successive circles form wavy lines
    for (var i = 0; i < canvasHeight; i += dotSpace)
    {
      // down diagonal line, increment y
      fill(0,0,0);
      ellipse(i, i+j, radius);

      // down diagonal line, increment x
      fill(0,0,0);
      ellipse(i+j, i, radius);

      // up diagonal line, increment y
      fill(0,0,0);
      ellipse(i, -i+j, radius);

      // up diagonal line, increment x
      fill(0,0,0);
      ellipse(i+j, -i, radius);
    }
  }
}
