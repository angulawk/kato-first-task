(function() {
  let openSideMenuBtn = document.querySelector(".open_side_menu")
  let rightSideMenu = document.querySelector(".right_side_menu");
  let closeBtn = document.querySelector(".close_btn");
  let userBtn = document.querySelector(".user_btn");
  let menuLinks = document.querySelector(".menu_links");
  let body = document.querySelector("body");
  let navContainer = document.querySelector(".nav_container");

  openSideMenuBtn.addEventListener("click", () => {
    rightSideMenu.classList.add("show_side_menu");
    navContainer.classList.add("overlay");
  });

  closeBtn.addEventListener("click", () => {
    rightSideMenu.classList.remove("show_side_menu");
    navContainer.classList.remove("overlay");
  });

  userBtn.addEventListener("click", () => {
    menuLinks.classList.toggle("show_menu");
  });
})()
