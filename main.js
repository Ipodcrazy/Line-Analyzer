// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);
//global variables
let slope;
let x1;
let y1;
let x2;
let y2;

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription("up", "down", "flat", "vertical");
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y, "origin", "x-axis", "y-axis", "quadrant 1", "quadrant 2", "quadrant 3", "quadrant 4");
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y, "origin", "x-axis", "y-axis", "quadrant 1", "quadrant 2", "quadrant 3", "quadrant 4");
    document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5;
}

function getSlope(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    slope = rise / run;
    return slope;
}

function getDescription(up, down, horizontal, vertical) {
    if (slope == "Infinity") {
        return vertical;
    }
    else if (slope > 0) {
        return up;
    }
    else if (slope < 0) {
        return down;
    }
    else if (slope == 0) {
        return horizontal;
    }
    else {
        return "No slope";
    }
    
}

function getPointLocation(x, y, origin, xaxis, yaxis, quad1, quad2, quad3, quad4) {
    if  (x == 0 && y == 0) {
        return origin;
    }
    else if (y == 0) {
        return xaxis;
    }
    else if (x == 0) {
        return yaxis;
    }
    else if (x > 0 && y > 0) {
        return quad1;
    }
    else if (x < 0 && y > 0) {
        return quad2;
    }
    else if (x < 0 && y < 0) {
        return quad3;
    }
    else if (x > 0 && y < 0) {
        return quad4;
    }
}

function getEquation(x, y) {
    let bvalue = y - (slope * x);
    // b = y - mx
    let eq = "y = " + slope + " * x" + " + " + bvalue;
    return eq;
}