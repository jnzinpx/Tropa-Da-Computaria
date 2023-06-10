window.addEventListener('resize', function() {
    var container = document.querySelector('.container');

    if (window.innerWidth < 600) {
        container.classList.add('small');
        container.classList.remove('medium', 'large');
    } else if (window.innerWidth >= 600 && window.innerWidth < 1200) {
        container.classList.add('medium');
        container.classList.remove('small', 'large');
    } else {
        container.classList.add('large');
        container.classList.remove('small', 'medium');
    }
});

window.onload = function() {
    const container = document.querySelector('.container2');
    const numBubbles = 10; // Define o número de bolhas que você deseja
  
    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = Math.random() * container.offsetWidth + 'px';
      bubble.style.top = Math.random() * container.offsetHeight + 'px';
      bubble.style.animationDuration = Math.random() * 6 + 4 + 's'; // Define a duração da animação de cada bolha
      container.appendChild(bubble);
    }
  }
  
  
  