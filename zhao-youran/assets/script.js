document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('mouseover', () => {
      letter.style.transform = 'scale(1.15) rotate(-3deg)';
      letter.style.fontVariationSettings = '"wght" 800';
      letter.style.color = '#9c27b0';
    });
  
    letter.addEventListener('mouseout', () => {
      letter.style.transform = 'scale(1)';
      letter.style.fontVariationSettings = '"wght" 500';
      letter.style.color = '#333';
    });
  
    letter.addEventListener('click', () => {
      letter.style.transform = 'scale(1.5) rotate(15deg)';
      letter.style.color = '#00bcd4';
  
      setTimeout(() => {
        letter.style.transform = 'scale(1)';
        letter.style.color = '#333';
      }, 600);
    });
  });
  