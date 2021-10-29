const changesquare1 = document.createElement("div");
const changesquare2 = document.createElement("div");
const changesquare3 = document.createElement("div");
const changesquare4 = document.createElement("div");

const arr = [changesquare1,changesquare2,changesquare3,changesquare4]

randomArr = () => {
    return Math.floor(Math.random() * 300);
}

changecolors = () => {
document.getElementById("foot").innerHTML = "";
const newdiv = document.createElement("div");
newdiv.setAttribute("id", "logo");

arr.forEach(element => {
    element.id = "colors";
    element.setAttribute("style", `background-color: rgb(${randomArr() + ',' + randomArr() + ',' + randomArr()})`);
    newdiv.appendChild(element);
});

document.getElementById("foot").appendChild(newdiv);
}