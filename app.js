$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    function newDate() {
      return new Date().getFullYear();
    }
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("autodate").innerHTML = newDate();
    });
  
    const hamburgerLines = document.querySelector('.hamburger-lines');
    const menuItems = document.querySelector('.menu-items');
  
    hamburgerLines.addEventListener('click', function () {
      menuItems.classList.toggle('show');
    });
  });