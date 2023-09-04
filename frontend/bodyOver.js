document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("bodyid");
  if (element) {
    element.removeAttribute("data-bs-overflow", "auto");
  }
});
