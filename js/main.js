$(document).ready(function(){
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active')
    $('nav ul').toggleClass('active-menu')
  })
})

ScrollOut({ targets: 'nav, span, h2, h1, p, a, img, .name, .avatar, .p-box, #contact-form' })