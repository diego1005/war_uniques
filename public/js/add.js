function test (flag) {
    const flagItems = document.querySelectorAll(".flag-block");
    flagItems.forEach(item => item.style.display = "none");
    document.getElementById("flag").value = flag;
}