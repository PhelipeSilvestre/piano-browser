const keys = document.querySelectorAll(".key");

const handleMouseDown = (key) => {
  if (key.className.includes("black")) {
    key.classList.add("black-pressed");
    return;
  }
  key.style.backgroundColor = "#ddd";
};

const handleMouseUp = (key) => {
  if (key.className.includes("black")) {
    key.classList.remove("black-pressed");
    return;
  }
  key.style.backgroundColor = "white";
};

keys.forEach((key) => {
  key.addEventListener("mousedown", () => handleMouseDown(key));

  key.addEventListener("mouseup", () => handleMouseUp(key));
});
