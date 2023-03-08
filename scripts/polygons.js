let idOf = function(id) {
    return document.getElementById(id);
}

function outputPolygon() {
    let num = validateEntry(idOf("polygon").value);
    idOf("poly_out").innerHTML = "Polygon: " + getShape(num);
}

function validateEntry(num) {
    num = Number(num)
    num = num > 0 ? num : -num;
    num = Math.round(num);
    return num
}

function getShape(num) {
    switch(num) {
        case 1:
            return "monogon";
        break;
        case 2:
            return "bigon";
        break;
        case 3:
            return "triangle";
        break;
        case 4:
            return "quadrilateral";
        break;
        case 5:
            return "pentagon";
        break;
        case 6:
            return "hexagon";
        break;
        case 7:
            return "septagon";
        break;
        case 8:
            return "octagon";
        break;
        case 9:
            return "nonagon";
        break;
        case 10:
            return "undecagon";
        break;
        default:
            return "Please enter a valid number"
    }
}