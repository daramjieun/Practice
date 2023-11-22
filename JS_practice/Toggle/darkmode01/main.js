const checkbox = document.getElementById("checkbox");
const text = document.getElementsByClassName("textbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode")
})
