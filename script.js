  const menuButton = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidenav");

  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
  });

