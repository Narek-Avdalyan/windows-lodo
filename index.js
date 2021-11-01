const firstSquare = document.getElementById("square1");
const secondSquare = document.getElementById("square2");
const thirdSquare = document.getElementById("square3");
const lastSquare = document.getElementById("square4");

const changeColors = () => {
    const squareClass1 =  thirdSquare.className;
    const squareClass2 =  firstSquare.className;
    const squareClass3 =  lastSquare.className;
    const squareClass4 =  secondSquare.className;

    firstSquare.className = squareClass1;
    secondSquare.className = squareClass2;
    thirdSquare.className = squareClass3;
    lastSquare.className = squareClass4;
}
