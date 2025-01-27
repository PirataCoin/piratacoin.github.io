document.addEventListener("DOMContentLoaded", () => {
  // Configuración de Particles.js (monedas más grandes)
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffd700" },
      "shape": { 
        "type": "image", 
        "image": { 
          "src": "img/logo.webp", 
          "width": 150,  // Tamaño de imagen aumentado
          "height": 150 
        } 
      },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 12, "random": true }, // Monedas más grandes
      "line_linked": { "enable": true, "distance": 150, "color": "#ffd700", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      }
    },
    "retina_detect": true
  });

  // Control de audio
  const audio = document.getElementById('background-audio');
  const toggleButton = document.getElementById('audio-toggle');
  let userInteracted = false; // Bandera para interacción del usuario

  // Asegurar que el botón tenga un z-index alto
  toggleButton.style.position = 'relative'; // Asegura que el botón esté posicionado
  toggleButton.style.zIndex = '1000'; // Coloca el botón encima del canvas

  // Función para manejar el audio
  const handleAudio = () => {
    if (!userInteracted) {
      audio.load(); // Reinicia el audio para forzar la reproducción
      userInteracted = true;
    }

    if (audio.paused) {
      audio.play()
        .then(() => {
          toggleButton.textContent = '🔊 Apagar música';
        })
        .catch(err => {
          console.error("Error crítico:", err);
          toggleButton.textContent = '🔇 Error (ver consola)';
        });
    } else {
      audio.pause();
      toggleButton.textContent = '🔇 Encender música';
    }
  };

  // Evento de clic en el botón
  toggleButton.addEventListener('click', handleAudio);

  // Prevenir interacciones no deseadas con el canvas
  const canvas = document.querySelector('#particles-js canvas');
  if (canvas) {
    canvas.style.pointerEvents = 'none'; // Evitar que el canvas interfiera con el clic
  }
});
