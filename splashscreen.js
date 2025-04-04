 document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.getElementById('progress');
    const heart = document.querySelector('.heart');
    const loadingText = document.querySelector('.loading-complete');
    const heartContainer = document.querySelector('.heart-container');
    const background = document.querySelector('.background');
    
    heartContainer.addEventListener('mouseover', () => {
      if (!heart.classList.contains('complete')) {
        heart.style.transform = 'scale(1.05)';
      }
    });
    
    heartContainer.addEventListener('mouseout', () => {
      if (!heart.classList.contains('complete')) {
        heart.style.transform = 'scale(1)';
      }
    });
    
    heartContainer.addEventListener('click', () => {
      if (!heart.classList.contains('complete')) {
        document.querySelector('.heart-path').style.animationDuration = '1s';
        document.querySelector('.heart-fill').style.animationDuration = '1s';
        document.querySelector('.heart-fill').style.animationDelay = '1s';
        loadingText.style.animationDelay = '2s';
      }
    });
    
    const duration = 8000; 
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;
    
    const progressInterval = setInterval(() => {
      currentStep++;
      const percentage = Math.min(Math.round((currentStep / steps) * 100), 100);
      progressElement.textContent = percentage;
      
      if (percentage === 100) {
        clearInterval(progressInterval);
        heart.classList.add('complete');
        
        setTimeout(() => {
          heartContainer.classList.add('hidden');
          background.classList.add('show');
        }, 3000);
       }
     }, interval);

     heartContainer.style.cursor = 'pointer';
  });