let idOf = function(id) {
    return document.getElementById(id);
}

function scriptTest() {
    alert("anyone aout ther e?");
}

function greetUser() {
    let feeling = idOf("feeling").value;
    let name = idOf("name").value;

    let company = "Jaded Lihzard";

    idOf("greeting").innerHTML = "The " + company + " welcomes you, " + name + "! We're glad you are doing " + feeling;
}

function buttonUnclickable() {
    idOf("unclickable").disabled = true;
    idOf("unclickable").innerHTML = "no sir";
}

let licked = false;
function playLickEffect() {
    if(!licked) {
        idOf("lick_out").innerHTML = "lick :P";
        licked = !licked;
    } else {
        idOf("lick_out").innerHTML = "";
        licked = !licked;
    }
}

let isLeft = true;
function moveSides() {
    if(isLeft) {
        idOf("move").style.marginLeft = "200px";
        isLeft = !isLeft;
    } else {
        idOf("move").style.marginLeft = "0px";
        isLeft = !isLeft;
    }
}

let fatness = 2;
function moreFat() {
    idOf("fat").innerHTML = "f" + "a".repeat(fatness) + "t";
    fatness++;
}

function reset() {
    idOf("unclickable").disabled = false;
    idOf("unclickable").innerHTML = "Oh you thought I cared?";
    licked = false;
    idOf("lick_out").innerHTML = "";
    isLeft = false;
    idOf("move").style.marginLeft = "0px";
    fatness = 2;
    idOf("fat").innerHTML = "fat";
}