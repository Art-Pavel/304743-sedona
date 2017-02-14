var btn = document.querySelector(".search .search-btn");
var popup = document.querySelector(".search .pop-up"); 
var login = document.querySelector(".search .check-in-date");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("pop-up-show");
    login.focus();
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (popup.classList.contains("pop-up-show")) {
popup.classList.remove("pop-up-show");
}
}});




