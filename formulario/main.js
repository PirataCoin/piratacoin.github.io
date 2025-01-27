// Validación del formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
  
    // Obtiene los valores de las contraseñas
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMensaje = document.getElementById('errorMensaje');
  
    // Verifica si las contraseñas coinciden
    if (password !== confirmPassword) {
      // Muestra un mensaje de error si las contraseñas no coinciden
      errorMensaje.style.display = 'block';
      return;
    }
  
    // Si las contraseñas coinciden, redirige al archivo index.html en Web de Tareas
    errorMensaje.style.display = 'none';
    window.location.href = '../Web de Tareas/index.html'; // Redirección a Web de Tareas
  }
  
  
// Inicializa la animación de partículas en el contenedor con id "particles-js"
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffd700"
      },
      "shape": {
        "type": "image",
        "image": {
          "src": "../img/logo.webp", // Subir un nivel para acceder a la carpeta 'img'

          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffd700",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  