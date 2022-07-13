let panels = [];
let entries = [];
let i = 0;

window.addEventListener("load", () => {
    panels = document.getElementsByClassName("block");
    entries = document.getElementsByClassName("entries");

    panels[0].style.display = "flex";

    let file = document.querySelector("#prod");
    file.addEventListener("change", () => {
        document.querySelector("#file_name").innerText = file.files[0].name;
    });

    document.getElementById("btnNext").disabled = true

    for (let entry of entries) {
        entry.addEventListener("input", () => {
            if (entry.value.length > 0) {
                document.getElementById("btnNext").disabled = false;
            }else {
                document.getElementById("btnNext").disabled = true
            }
        })
    }

});

function next(flag) {
    if (flag != undefined) {
        panels[i].style.display = "none";
        document.getElementById("flag").value = flag;
        panels[i+1].style.display = "flex";
        i++;
        document.getElementById("btnNext").style.display = "block";
        document.querySelector(".block-container").style.display = "flex";
    } else {
        panels[i].style.display = "none";
        panels[i+1].style.display = "flex";
        i++;
        document.getElementById("btnNext").disabled = true
    }
}

function back() {
    if (i == 1) {
        document.getElementById("btnNext").style.display = "none";
        document.querySelector(".block-container").style.display = "none";
        panels[i].style.display = "none";
        panels[i-1].style.display = "flex";
        i--
    }else {
        panels[i].style.display = "none";
        panels[i-1].style.display = "flex";
        entries[i-2].value = '';
        i--
    }
}