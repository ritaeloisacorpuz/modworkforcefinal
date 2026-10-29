/**
 * Component Loader Script for Modular Architecture
 * Loads header.html and footer.html dynamically into HTML placeholders.
 */
function loadComponent(elementId, filepath) {
    fetch(filepath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                targetElement.innerHTML = data;
            }
        })
        .catch(error => {
            console.error(`Error loading ${filepath}:`, error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});