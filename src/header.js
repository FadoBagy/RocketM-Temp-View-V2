export function header(addEventOnElem) {
    // Navbar toggle
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    if (navbar && overlay && navTogglers.length > 0) {
        const toggleNavbar = function () {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        };
        addEventOnElem(navTogglers, "click", toggleNavbar);
    } else {
        console.warn('Navbar or togglers not found!');
    }

    // Close navbar on navbar link click
    const navLinks = document.querySelectorAll("[data-nav-link]");
    if (navbar && overlay && navLinks.length > 0) {
        const closeNavbar = function () {
            navbar.classList.remove("active");
            overlay.classList.remove("active");
        };
        addEventOnElem(navLinks, "click", closeNavbar);
    } else {
        console.warn('Navbar links not found!');
    }

    // Header active on scroll
    const headerElem = document.querySelector("[data-header]");
    if (headerElem) {
        const headerActive = function () {
            window.scrollY > 100
                ? headerElem.classList.add("active")
                : headerElem.classList.remove("active");
        };
        addEventOnElem(window, "scroll", headerActive);
    } else {
        console.warn('Header element not found!');
    }
}
