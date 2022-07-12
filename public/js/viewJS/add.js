let panels = []
let i = 0;

window.addEventListener("load", () => {
    panels = document.getElementsByClassName("block");
    entries = document.getElementsByClassName("entries");

    //falta leer bien cada elemento, contando de a par
    /*
    const len = entries.length;
    for (let i=0; i<len; i++) {
        if (entries[i].value == "") {
            entries[i+1].disabled = true;
        }else {
            entries[i+1].disabled = false;
        }
    }
    */

    panels[0].style.display = "flex";

    let file = document.querySelector("#prod");
    file.addEventListener("change", () => {
        document.querySelector("#file_name").innerText = file.files[0].name;
    });

});

function next() {
    if (flag != undefined) {
        panels[i].style.display = "none";
        document.getElementById("flag").value = flag;
        panels[i+1].style.display = "flex";
        i++;
    } else {
        panels[i].style.display = "none";
        panels[i+1].style.display = "flex";
        i++
    }
}

function back() {
    panels[i].style.display = "none";
    panels[i-1].style.display = "flex";
    i--
}