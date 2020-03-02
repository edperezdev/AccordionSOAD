let acordeontitle = document.querySelectorAll(".acordeon-title");

acordeontitle.forEach(title => {
  title.addEventListener("click", function() {
    let acordeontitleactivo = document.querySelector(".acordeon-title.activo");
    this.querySelector(".mas").classList.toggle("inactive");
    this.querySelector(".menos").classList.toggle("active");
    this.classList.toggle("activo");
    let acordeonbody = this.nextElementSibling;
    if (this.classList.contains("activo")) {
      acordeonbody.style.maxHeight = acordeonbody.scrollHeight + "3px";
      if (acordeontitleactivo && acordeontitleactivo !== acordeontitle) {
        acordeontitleactivo.classList.toggle("activo");
        acordeontitleactivo.nextElementSibling.style.maxHeight = 0;
      }
    } else {
      acordeonbody.style.maxHeight = 0;
    }
  });
});
