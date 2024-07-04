document.addEventListener("DOMContentLoaded", () => {
  const btnNavBar = document.getElementById("btnNavBar");
  const menu = document.getElementById("menu");
  const secondMenu = document.getElementById("secondMenu");

  btnNavBar.addEventListener("click", () => {
    menu.classList.toggle("show");
    secondMenu.classList.toggle("show");
  });

  const handleResize = () => {
    if (window.innerWidth >= 769) {
      menu.style.display = "flex";
      secondMenu.style.display = "flex";
    } else {
      menu.style.display = "none";
      secondMenu.style.display = "none";
    }
  };

  window.addEventListener("resize", handleResize);

  // Initial check
  handleResize();
});
