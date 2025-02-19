document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const floatingImages = document.querySelector(".floating-images");
  
    overlay.style.display = "flex";
    overlay.innerHTML = "";
    setTimeout(() => {
      overlay.innerHTML = '<div id="overlayMessage" class="animate__animated animate__fadeIn" style="--animate-duration: 0.5s;">Tocá la imagen que quieras</div>';
      setTimeout(() => {
        const overlayMessage = document.getElementById("overlayMessage");
        overlayMessage.classList.remove("animate__fadeIn");
        overlayMessage.classList.add("animate__fadeOut");
        overlayMessage.style.setProperty('--animate-duration', '0.5s');
        overlayMessage.addEventListener("animationend", function() {
          setTimeout(() => {
            overlay.style.display = "none";
            overlay.innerHTML = "";
            floatingImages.style.display = "grid"; 
            floatingImages.classList.add("animate__animated", "animate__fadeIn");
            floatingImages.style.setProperty('--animate-duration', '0.5s');
          }, 400);
        }, { once: true });
      }, 2000); // duración del mensaje
    }, 400); // tiempo inicial de pantalla negra
  });
  