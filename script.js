const toggles = document.querySelectorAll(".dropdown-toggle");

function closeDropdown(button) {
  button.setAttribute("aria-expanded", "false");
  document.getElementById(button.getAttribute("aria-controls")).hidden = true;
}

function openDropdown(button) {
  button.setAttribute("aria-expanded", "true");
  document.getElementById(button.getAttribute("aria-controls")).hidden = false;
}

function closeAll() {
  toggles.forEach(closeDropdown);
}

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    closeAll();                 // قائمة واحدة مفتوحة في كل مرة
    if (!isOpen) openDropdown(button);
  });
});

// الإغلاق عند الضغط خارج القائمة
document.addEventListener("click", (e) => {
  if (!e.target.closest(".has-dropdown")) closeAll();
});

// الإغلاق بزر Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});