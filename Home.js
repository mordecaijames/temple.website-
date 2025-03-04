function toggleMenu() {
    const navList = document.getElementById("nav-list");
    navList.style.display = navList.style.display === "flex" ? "none" : "flex";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
    this.reset();
});
