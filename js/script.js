// Hamburger Menu
let navLinks = document.getElementById("navLinks")

    const showMenu = () => {
        navLinks.style.right = "0"
    }
    const hideMenu = () => {
        navLinks.style.right = "-250px"
    }
    

// Index
if (window.location.pathname === '/index.html') {
    window.location.replace('/')
}