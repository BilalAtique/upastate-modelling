const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

menuIcon.onclick = () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        closeIcon.style.display = "none";
    } else {
        nav.style.display = "flex";
        closeIcon.style.display = "block";
        body.style.overflow = "hidden";
    }
};

closeIcon.onclick = () => {
    nav.style.display = "none";
    closeIcon.style.display = "none";
    body.style.overflow = "visible";
};
