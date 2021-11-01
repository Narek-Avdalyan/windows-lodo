const firstSquare = document.getElementById("square1");
const secondSquare = document.getElementById("square2");
const thirdSquare = document.getElementById("square3");
const lastSquare = document.getElementById("square4");

const changeColors = () => {
    const squeareClass1 =  thirdSquare.className;
    const squeareClass2 =  firstSquare.className;
    const squeareClass3 =  lastSquare.className;
    const squeareClass4 =  secondSquare.className;

    firstSquare.className = squeareClass1;
    secondSquare.className = squeareClass2;
    thirdSquare.className = squeareClass3;
    lastSquare.className = squeareClass4;
}
