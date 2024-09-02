function toggleNav() {
    var nav = document.getElementById("navLinks");
    if (nav.className === "nav-links") {
        nav.className += " active";
    } else {
        nav.className = "nav-links";
    }
}

window.addEventListener("resize", function () {
    var footer = document.querySelector("footer");
    if (window.innerWidth < 600) {
        footer.style.padding = "10px 20px";
    } else {
        footer.style.padding = "20px 50px";
    }
});
