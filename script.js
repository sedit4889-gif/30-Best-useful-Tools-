// ===============================
// S TOOLS - Main JavaScript
// ===============================


// 🌙 Dark / Light Theme
function toggleTheme() {

    const body = document.body;
    const button = document.querySelector(".theme-btn");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        button.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        button.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
}


// 💾 Load Saved Theme
window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");
    const button = document.querySelector(".theme-btn");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");

        if (button) {
            button.textContent = "🌙";
        }
    }

});


// 🔍 Search Tools
function searchTools() {

    const searchInput = document.getElementById("toolSearch");

    const searchText = searchInput.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {

        const toolName =
            card.getAttribute("data-name").toLowerCase();

        if (toolName.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}


// 🛠️ Open Tool
function openTool(toolName) {

    alert(
        "🚧 " +
        toolName +
        " is coming soon!\n\nS TOOLS mein ye tool jaldi available hoga."
    );

}
