let panels = [];
let entries = [];
let i = 0;
let j = 0;
let k = 1;

window.addEventListener("load", () => {
    panels = document.getElementsByClassName("block");
    entries = document.getElementsByClassName("entries");

    panels[0].style.display = "flex";

    let file = document.querySelector("#prod");
    file.addEventListener("change", () => {
        document.querySelector("#file_name").innerText = file.files[0].name;
    });

    document.getElementById(`${k}_btnNext`).disabled = true
    
    btnAct();

});

function next(flag) {
    if (flag != undefined) {
        panels[i].style.display = "none";
        document.getElementById("flag").value = flag;
        panels[i+1].style.display = "flex";
        i++;
    } else {
        panels[i].style.display = "none";
        panels[i+1].style.display = "flex";
        i++;
        j++;
        k++;
        document.getElementById(`${k}_btnNext`).disabled = true
        btnAct();
    }
}

function back() {
    panels[i].style.display = "none";
    panels[i-1].style.display = "flex";
    i--
}

function btnAct() {
    entries[j].addEventListener("input", () => {
        if (entries[j].value.length > 0) {
            document.getElementById(`${k}_btnNext`).disabled = false;
        }else {
            document.getElementById(`${k}_btnNext`).disabled = true
        }
    })
    console.log(j, k);
}