btn_nav = document.querySelector("#btn-nav-user");

if (btn_nav != null) {
    btn_nav.addEventListener("click", () => {
        let tag = document.querySelector(".nav-user-content");
        tag.style.display = (tag.style.display == "") ? "flex" : "";
    });
}

