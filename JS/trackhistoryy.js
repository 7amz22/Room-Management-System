const DropdownBtn = document.getElementById("DropdownBtn");
const DropdownContent = document.getElementById("DropdownContent");

DropdownBtn.addEventListener("click", (event) => {
    event.stopPropagation(); 
    DropdownContent.classList.toggle("show");
});