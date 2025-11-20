const root = document.querySelector("html");
const btn = document.querySelector("#themeBtn");

function toggleTheme() {
  root.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
