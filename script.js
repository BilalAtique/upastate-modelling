const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
console.log(body)

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
    console.log("Close Button clicked");
    nav.style.display = "none";
    closeIcon.style.display = "none";
    body.style.overflow = "visible";
};
