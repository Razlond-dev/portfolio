$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active");
    $("nav ul").toggleClass("active-menu");
  });
});

ScrollOut({
  targets:
    ".box-inner.reverse .box-image ,nav, span, h2, h1, p, a, img, .name, .avatar,.box-image, .p-box, #contact-form",
});

const year = document.querySelector('#year')

let currentYear = new Date

year.textContent = `${currentYear.getFullYear()}`