// const root = document.querySelector("html");
// const btn = document.querySelector("#themeBtn");

// function toggleTheme() {
//   root.classList.toggle("dark");
// }

// btn.addEventListener("click", toggleTheme);

const html = document.querySelector("html");
const toggleSwitch = document.querySelector("#theme-toggle");

function toggleSwitchFn() {
  const isDark = event.target.checked === true;
  html.classList.toggle("dark", isDark);
  localStorage.setItem("isDarkMode", isDark);
}

toggleSwitch?.addEventListener("change", toggleSwitchFn);

function getSavedTheme() {
  const isDark = localStorage.getItem("isDarkMode") === "true";
  html.classList.toggle("dark", isDark);
  toggleSwitch.checked = isDark;
}

getSavedTheme();
