let acordeontitle = document.querySelectorAll(".acordeon-title");

acordeontitle.forEach(title => {
  title.addEventListener("click", function() {
    let acordeontitleactivo = document.querySelector(".acordeon-title.active");

    this.classList.toggle("active");
    let acordeonbody = this.nextElementSibling;
    if (this.classList.contains("active")) {
      acordeonbody.style.maxHeight = acordeonbody.scrollHeight + "3px";
      if (acordeontitleactivo && acordeontitleactivo !== acordeontitle) {
        acordeontitleactivo.classList.toggle("active");
        acordeontitleactivo.nextElementSibling.style.maxHeight = 0;
      }
    } else {
      acordeonbody.style.maxHeight = 0;
    }
  });
});
