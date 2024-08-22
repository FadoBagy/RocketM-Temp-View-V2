export function header(addEventOnElem) {
    // navbar toggle
    const navbar = document.querySelector("[data-navbar]");
    const navToggler = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");
    const toggleNavbar = function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    }
    addEventOnElem(navToggler, "click", toggleNavbar);

    // close navbar when click on any navbar links
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const closeNavbar = function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    }
    addEventOnElem(navLinks, "click", closeNavbar);

    /// header activer when scroll down
    const header = document.querySelector("[data-header]");
    const headerActive = function () {
        window.scrollY > 100 ? header.classList.add("active")
            : header.classList.remove("active");

    }
    addEventOnElem(window, "scroll", headerActive);
}