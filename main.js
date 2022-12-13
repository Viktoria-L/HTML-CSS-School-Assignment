document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

//Funktion för att visa sortering även på mindre enheter
function showList() {
  const sortera = document.querySelectorAll(".sortdiv");

  sortera.forEach((x) => {
    console.log(sortera);
    if (x.classList.contains("is-hidden-mobile")) {
      x.classList.remove("is-hidden-mobile");
    } else {
      x.classList.toggle("is-hidden-mobile");
    }
  });
}

const filter = document.querySelector(".filter");
filter.addEventListener("click", () => {
  showList();
});
