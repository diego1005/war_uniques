let isPick = (selected) => {
    let tagImg = document.getElementById("img-flag");
    let selection = "/images/flags/";
    switch (selected) {
        case 1:
            selection += "germany.png";
            break;
        case 2:
            selection += "england.png";
            break;
        case 3:
            selection += "japan.png";
            break;
        case 4:
            selection += "russia.png";
            break;
        case 5:
            selection += "usa.png";
            break;
        default:
            selection = "";
            break;
    }
    tagImg.src = selection;
    tagImg.style.width = "100%";
}