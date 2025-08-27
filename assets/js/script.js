/*animação numeros*/ 
    function animateNumber(id, endValue, duration) {
      const element = document.getElementById(id);
      let startValue = 0;
      const increment = endValue / (duration / 10);
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(interval);
        }
        element.textContent = "+" + Math.floor(startValue);
      }, 30);
    }

    window.addEventListener("DOMContentLoaded", () => {
      animateNumber("num-servicos", 10, 1000);
      animateNumber("num-estados", 6, 1000);
      animateNumber("num-clientes", 900, 1500);
    });
  