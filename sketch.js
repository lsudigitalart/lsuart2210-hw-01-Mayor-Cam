function setup()
{
  var canvasWidth = 500;
  var canvasHeight = 500;
  createCanvas(canvasWidth,canvasHeight);


/*
// circles within circles
  for (var r = 30; r > 0; r--)
  {
      ellipse(250, 250, 25 + r*25);
  }
*/

  var maxRad = 50;        // max radius for oscillating lines
  var minRad = 10;        // minimum radius for oscillating lines
  var radius = maxRad;    // radius begins at max radius
  var waveDelta = 0;      // acts as a boolean to determine whether lines are increasing or decreasing in width
  var lineSpace = canvasWidth/3;    // distance between lines made of circles
  var dotSpace = lineSpace/6;      // distance between circles that make lines

  //parent for-loop copies lines and circles into a grid
  for (var j = 0; j < canvasWidth * 2; j = j + lineSpace)
  {
/*
    //nested for-loop creates multiple circles at certain nodes
    for (var y = 0; y < canvasHeight); y = y + lineSpace)
    {

    }
*/
    //nested for-loop creates circles to make lines
    for (var i = 0; i < canvasWidth; i = i + dotSpace)
    {
      // down diagonal line, increment y
      fill(0,0,0);
      ellipse(i, i+j, radius);

      // down diagonal line, increment x
      fill(0,0,0);
      ellipse(i+j, i, radius);

      // up diagonal line, increment y
      fill(0,0,0);
      ellipse(i, -i + j, radius);

      // up diagonal line, increment x
      fill(0,0,0);
      ellipse(i+j, -i, radius);

  // buggy code
  /*
      // Oscillation radius change
      if (boolean(waveDelta) == false;)
        {radius--;}
      if (boolean(waveDelta) == true;)
        {radius++;}
  */
  // buggy code

/*
      // Oscillation direction change
      if (radius == maxRad)
        {waveDelta = 0;}
      if (radius == minRad)
        {waveDelta = 1;}
*/
    }
  }
}
