// Selectors
console.log(window.innerWidth);

const hamburgerBtn = document.getElementById("hamburger");
const pageContainer = document.getElementById("page-container");
const dropdown = document.getElementById("dropdown");
const exitDropdownBtn = document.getElementById("exit-dropdown");
const dropdownItem = document.querySelector("#dropdown-ul");
const mobileSocials = document.querySelector(".mobile-socials");

// Event Listeners

// open dropdown modal on click
hamburgerBtn.addEventListener("click", () => {
  openDropdown();
});

// close dropdown modal when user clicks x button
exitDropdownBtn.addEventListener("click", () => {
  closeDropdown();
});

// close dropdown modal when user selects dropdown nav item
dropdownItem.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-item")) closeDropdown();
});

mobileSocials.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-socials-item")) closeDropdown();
});

// Functions
const openDropdown = () => {
  dropdown.classList.remove("hidden");
  pageContainer.classList.add("page-container");
  // Prevent background scrolling when mobile dropdown is open
  document.body.style.overflow = "hidden";
};

const closeDropdown = () => {
  dropdown.classList.add("hidden");
  pageContainer.classList.remove("page-container");
  document.body.style.overflow = "";
};

// If user resizes screen > 782px and mobile dropdown is open,
// hide mobile dropdown so it doesn't show when user minimizes
// screen again
window.addEventListener("resize", () => {
  if (window.innerWidth > 782 && !dropdown.classList.contains("hidden")) {
    console.log("hey");
    closeDropdown();
  }
});
