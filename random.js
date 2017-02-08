var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.

function createFirstScene() {
    var random = Math.random()
    // hair and face
makeCircle(100, 50, 25, "brown", 1.0)
makeCircle(100, 60, 20, "white", 1.0)
if (random > 0.3){
makeCircle(100, 45, 19, "red", 1.0)
//name
document.getElementById("name").setAttribute("style", "display: none;")
document.getElementById("nameone").setAttribute("style", "display: block;")
document.getElementById("nametwo").setAttribute("style", "display: none;")
document.getElementById("namethree").setAttribute("style", "display: none;")
document.getElementById("namefour").setAttribute("style", "display: none;")
document.getElementById("namefive").setAttribute("style", "display: none;")
document.getElementById("namesix").setAttribute("style", "display: none;")
}else{
//name
document.getElementById("name").setAttribute("style", "display: none;")
document.getElementById("nameone").setAttribute("style", "display: none;")
document.getElementById("nametwo").setAttribute("style", "display: block;")
document.getElementById("namethree").setAttribute("style", "display: none;")
document.getElementById("namefour").setAttribute("style", "display: none;")
document.getElementById("namefive").setAttribute("style", "display: none;")
document.getElementById("namesix").setAttribute("style", "display: none;")
}
makeCircle(100, 50, 20, "tan", 1.0)
   //neck and shirt
makeEllipse(100, 90, 25, 20, "red", 1.0)
makeRect(95, 60, 10, 20, "tan", 1.0)
makeRect(75, 70, 15, 40, "white", 1.0)
makeRect(110, 70, 15, 40, "white", 1.0)
//teeth
makeCircle(100, 60, 10, "white", 1.0)
makeCircle(100, 50, 10, "tan", 1.0)
//eyes
makeCircle(90, 45, 3, "black", 1.0)
makeCircle(110, 45, 3, "black", 1.0)



}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    var random = Math.random()
    //hair and face
makeCircle(100, 50, 25, "yellow", 1.0)
makeCircle(100, 60, 20, "white", 1.0)
if (random > 0.3){
makeRect(120, 50, 4.9, 1.7, "blue", 1.0)
makeRect(119, 45, 5.5, 1.7, "blue", 1.0)
//name
document.getElementById("name").setAttribute("style", "display: none;")
document.getElementById("nameone").setAttribute("style", "display: none;")
document.getElementById("nametwo").setAttribute("style", "display: none;")
document.getElementById("namethree").setAttribute("style", "display: block;")
document.getElementById("namefour").setAttribute("style", "display: none;")
document.getElementById("namefive").setAttribute("style", "display: none;")
document.getElementById("namesix").setAttribute("style", "display: none;")
}else{
//name
document.getElementById("name").setAttribute("style", "display: none;")
document.getElementById("nameone").setAttribute("style", "display: none;")
document.getElementById("nametwo").setAttribute("style", "display: none;")
document.getElementById("namethree").setAttribute("style", "display: none;")
document.getElementById("namefour").setAttribute("style", "display: block;")
document.getElementById("namefive").setAttribute("style", "display: none;")
document.getElementById("namesix").setAttribute("style", "display: none;")
}
makeCircle(100, 50, 20, "tan", 1.0)
   //neck and shirt
makeEllipse(100, 90, 25, 20, "blue", 1.0)
makeRect(95, 60, 10, 20, "tan", 1.0)
makeRect(75, 70, 15, 40, "white", 1.0)
makeRect(110, 70, 15, 40, "white", 1.0)
//teeth
makeCircle(100, 60, 6, "white", 1.0)
//eyes
makeCircle(90, 45, 3, "black", 1.0)
makeCircle(110, 45, 3, "black", 1.0)
makeCircle(88, 42, 3, "tan", 1.0)
makeCircle(112, 42, 3, "tan", 1.0)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    var random = Math.random()
    //hair and face
makeCircle(100, 50, 25, "red", 1.0)
makeCircle(100, 60, 20, "white", 1.0)
makeCircle(100, 50, 20, "tan", 1.0)
//teeth
makeCircle(100, 60, 5, "white", 1.0)
makeRect(93, 60, 15, 5, "tan", 1.0)
if (random < 0.33){
  makeCircle(90, 55, 1, "brown", 1.0)  
  //name
document.getElementById("name").setAttribute("style", "display: none;")
document.getElementById("nameone").setAttribute("style", "display: none;")
document.getElementById("nametwo").setAttribute("style", "display: none;")
document.getElementById("namethree").setAttribute("style", "display: none;")
document.getElementById("namefour").setAttribute("style", "display: none;")
document.getElementById("namefive").setAttribute("style", "display: block;")
document.getElementById("namesix").setAttribute("style", "display: none;")
}else{
//name
document.getElementById("name").setAttribute("style", "display: none;")
document.getElementById("nameone").setAttribute("style", "display: none;")
document.getElementById("nametwo").setAttribute("style", "display: none;")
document.getElementById("namethree").setAttribute("style", "display: none;")
document.getElementById("namefour").setAttribute("style", "display: none;")
document.getElementById("namefive").setAttribute("style", "display: none;")
document.getElementById("namesix").setAttribute("style", "display: block;")
}
    //neck and shirt
makeEllipse(100, 90, 25, 20, "green", 1.0)
makeRect(95, 60, 10, 20, "tan", 1.0)
makeRect(75, 70, 15, 40, "white", 1.0)
makeRect(110, 70, 15, 40, "white", 1.0)

//eyes
makeCircle(90, 45, 3, "black", 1.0)
makeCircle(110, 45, 3, "black", 1.0)
makeRect(85, 40, 10, 5, "tan", 1.0)
makeRect(105, 40, 10, 5, "tan", 1.0)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var myNumber = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if (myNumber < 0.33){
        createFirstScene()
    }
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if (myNumber < 0.67){
    createSecondScene()
    }
    
    
    // Else, call the function to create your third scene.
    else{
    createThirdScene()
    }
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}