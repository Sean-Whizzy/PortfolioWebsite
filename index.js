/* JavaScript */
/* Toggle side menu visibility */
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu.style.display === "block") {
        sideMenu.style.display = "none";
    } else {
        sideMenu.style.display = "block";
    }
}
document.getElementById('menuIcon').addEventListener('click', function() {
    this.classList.toggle('active');
});
function toggleMenu() {
    var sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
}