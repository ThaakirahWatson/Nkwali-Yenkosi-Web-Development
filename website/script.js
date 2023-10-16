// JavaScript for handling item selection and pop-up
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");
    const popup = document.querySelector(".popup");
    const closePopup = document.querySelector(".close");
    const quantityInput = document.getElementById("quantity");

    // Event listener for buy buttons
    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Show the popup
            popup.style.display = "block";
        });
    });

    // Event listener for close button in the popup
    closePopup.addEventListener("click", function () {
        // Hide the popup
        popup.style.display = "none";
    });

    // Event listener for checkout button in the popup
    document.querySelector(".checkout-button").addEventListener("click", function () {
        // Get the selected quantity
        const quantity = parseInt(quantityInput.value);

        // Perform checkout logic (you can implement this)
        // For example, send data to the server or handle the checkout process.

        // After the checkout is successful, redirect to the Checkout page
        window.location.href = "checkout.html";
    });
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Get references to the sidebar and close button/link
const sidebar = document.getElementById("mySidebar");
const openSidebarLink = document.querySelector(".open-sidebar");
const closeSidebarLink = document.getElementById("close-sidebar");

// Function to open the sidebar
function openSidebar() {
    sidebar.style.width = "250px"; // Set the width of the sidebar as needed
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.style.width = "0";
}

// Event listener for opening the sidebar (e.g., when "Open Sidebar" is clicked)
openSidebarLink.addEventListener("click", openSidebar);

// Event listener for closing the sidebar (e.g., when "Close Sidebar" is clicked)
closeSidebarLink.addEventListener("click", closeSidebar);
document.addEventListener("DOMContentLoaded", function () {
    const menuCheckbox = document.getElementById("menu-checkbox");
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", function () {
        menuCheckbox.checked = !menuCheckbox.checked;
    });
});
