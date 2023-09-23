const toggleButton = document.getElementById("toggleButton");
const sectionToToggle = document.getElementById("sectionToToggle");

toggleButton.addEventListener("click", () => {
  if (sectionToToggle.style.flex === "0") {
    sectionToToggle.style.flex = "1";
    sectionToToggle.style.display = "initial";
  } else {
    sectionToToggle.style.flex = "0";
    sectionToToggle.style.display = "none";
  }
});
