let panels = []
let i = 0;

window.addEventListener("load", () => {
    panels = document.getElementsByClassName("block");

    panels[0].style.display = "flex";

    let file = document.querySelector("#prod");
    file.addEventListener("change", () => {
        document.querySelector("#file_name").innerText = file.files[0].name;
    });

});

function next(flag) {
    if (flag != undefined) {
        console.log("flag", i);
        panels[i].style.display = "none";
        document.getElementById("flag").value = flag;
        panels[i+1].style.display = "flex";
        i++;
        console.log("flag+1", i);
    } else {
        console.log("noflag", i);
        panels[i].style.display = "none";
        panels[i+1].style.display = "flex";
        i++
        console.log("noflag+1", i);
    }
}