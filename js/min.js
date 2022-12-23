// Dark Mode
let mode = localStorage.getItem("mode");

if (mode) {
    document.body.classList.toggle(mode);
} else {
    mode = "light";
}

setTimeout(() => {
    document.body.classList.add("loaded");
}, 500);

document.querySelector("button").addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        mode = "light";
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
    localStorage.setItem("mode", mode);
});



// Typing effect
