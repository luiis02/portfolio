function escribirEnPantalla(texto) {
    let arr = texto.split("");
    let i = 0;
    let mostrarBarra = true;
  
    function actualizarPantalla() {
      let intervalo = setInterval(function () {
        if (i == arr.length) {
  
          clearInterval(intervalo);
          setTimeout(() => {
            document.getElementById("titulo1").innerHTML = "";
            i = 0;
            mostrarBarra = true;
            actualizarPantalla();
          }, 1000); // Pausa de 1 segundo antes de reiniciar
        } else {
          if (arr[i] == " ") {
            document.getElementById("titulo1").innerHTML += arr[i];
            document.getElementById("titulo1").innerHTML += arr[i + 1];
            i += 2;
          } else {
            document.getElementById("titulo1").innerHTML += arr[i];
            i++;
          }
        }
  
      }, 500);
    }
  
    actualizarPantalla();
  }
  
  
  
  
  // Llamada a la función
  escribirEnPantalla('cout << "My education";');