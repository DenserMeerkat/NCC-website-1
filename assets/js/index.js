window.onload = function () {
    var menu = document.getElementById("main-nav");
    if (window.innerWidth < 768) {
      menu.classList.add("hide");
    }
  };
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky + 25 && window.innerWidth > 768) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  function menu_toggle() {
    var menu = document.getElementById("main-nav");
    var icon = document.getElementById("menu-icon");
    if (menu.classList.contains("hide")) {
      menu.classList.toggle("hide");
      icon.innerHTML = "close";
    } else {
      menu.classList.toggle("hide");
      icon.innerHTML = "menu";
    }
  }