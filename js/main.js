const formulario = document.getElementById("formularioregistro");

  formulario.addEventListener("submit", function (event) {
     let valido = true;

    const nombre = formularioregistro.elements["nombre"];
    const apellidos = formularioregistro.elements["Apellidos"];
    const edad = formularioregistro.elements["edad"];

    if (!nombre.trim()) {//verifica si el campo está vacio
      alert("El campo nombre no puede estar vacio.");
   }

    f (!apellidos.trim()) {//verifica si el campo está vacio
      alert("El campo nombre no puede estar vacio.");
   }

    if (edad.value < 18) {//verifica que el usuario sea mayor de edad
      alert("Debes tener al menos 18 años.");
      valido = false;
    }

    if (!valido) {
      event.preventDefault(); // Previene el envío si hay errores
    }
  });