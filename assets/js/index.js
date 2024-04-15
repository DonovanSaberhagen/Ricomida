const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);



$(document).ready(function() {

    
    $("span").on("dblclick", function() {     
      $(this).addClass("titulosrojo");
    });

    $("#enviarCorreo").click(function () {
        alert ("El Correo fue Enviado");
      });

      $(".card-text").click(function () {
        $('.text-secondary').toggle();
      });


});












     