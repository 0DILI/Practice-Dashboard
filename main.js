const showSection3Button = document.getElementById("showSection3");
const hideSection3Button = document.getElementById("hideSection3");
const section3 = document.getElementById("section3");

showSection3Button.addEventListener("click", () => {
  section3.classList.remove("hidden");
});

hideSection3Button.addEventListener("click", () => {
  section3.classList.add("hidden");
});
