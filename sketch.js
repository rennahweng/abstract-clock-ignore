function setup() {
  createCanvas(800, 600); // make an HTML canvas element width x height pixels
  angleMode(DEGREES);
}

function draw() {
  clear();
  background(255, 0, 0, 0);

  // set position of the clock
  translate(400, 300); // put in middle, x and y based on canvas size
  rotate(270);
  strokeWeight(5);
  stroke(255);
  point(0, 0);

  let currHour = hour();
  let currMinute = minute();
  let currSecond = second();

  // seconds arc
  strokeWeight(2);
  stroke(255);
  noFill();
  let secondAngle = map(currSecond, 0, 60, 0, 360);
  arc(0, 0, 400, 400, 0, secondAngle);

  // minutes arc
  strokeWeight(5);
  stroke(255);
  let minuteAngle = map(currMinute, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, minuteAngle);

  // hours arc
  strokeWeight(10);
  stroke(255);
  let hourAngle = map(currHour % 12, 0, 12, 0, 360);
  arc(0, 0, 150, 150, 0, hourAngle);
}
