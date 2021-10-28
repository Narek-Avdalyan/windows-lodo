let square1 = "red";
let square2 = "green";
let square3 = "blue";
let square4 = "gold";
let arr = [square1,square2,square3,square4]
function changecolors(){

function randomArr(a,b) {
    return Math.random() - 0.5;
}
console.log(arr);
arr.sort(randomArr);
document.getElementById("foot").innerHTML = "";
const newdiv = document.createElement("div");
newdiv.setAttribute("id", "firstdiv");

const changesquare1 =document.createElement("div");
changesquare1.id = arr[0];

const changesquare2 =document.createElement("div");
changesquare2.setAttribute("id",arr[1]);

const changesquare3 =document.createElement("div");
changesquare3.setAttribute("id",arr[2]);

const changesquare4 =document.createElement("div");
changesquare4.setAttribute("id",arr[3]);

newdiv.appendChild(changesquare1);
newdiv.appendChild(changesquare2);
newdiv.appendChild(changesquare3);
newdiv.appendChild(changesquare4);

document.getElementById("foot").appendChild(newdiv);
}