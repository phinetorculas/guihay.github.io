function loadHTML(url, elementId) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => (document.getElementById(elementId).innerHTML = data))
    .catch((error) => console.error("Error loading HTML:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("components/header.html", "header");
  loadHTML("components/footer.html", "footer");
});
