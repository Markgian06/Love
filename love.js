const heartsContainer = document.querySelector('.hearts');
const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💞'];

for (let i = 0; i < 50; i++) {
  createHeart();
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (10 + Math.random() * 3) + 's';
  heart.style.animationDelay = Math.random() * 3 + 's';
  heart.style.fontSize = (10 + Math.random() * 20) + 'px';
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
    createHeart(); 
  }, 10000);
}

 
 const yesBtn = document.getElementById('yesBtn');
 const noBtn = document.getElementById('noBtn');
 const successMessage = document.getElementById('successMessage');
 const container = document.getElementById('mainContainer');
 let noBtnSize = 1;
 let clickCount = 0;
 
 yesBtn.addEventListener('click', () => {
   document.querySelector('.buttons').style.display = 'none';
   document.querySelector('.message').style.display = 'none';
   successMessage.style.display = 'block';
   
   for (let i = 0; i < 50; i++) {
     setTimeout(() => createHeart(), i * 100);
   }
 });
 
 noBtn.addEventListener('mouseover', moveButton);
 noBtn.addEventListener('click', () => {
   moveButton();
   shrinkNoButton();
   growYesButton();
   clickCount++;
   
   if (clickCount >= 5) {
     yesBtn.style.transform = 'scale(2)';
     yesBtn.style.padding = '25px 80px';
   }
 });
 
 function moveButton() {
   const maxX = container.clientWidth - noBtn.offsetWidth - 20;
   const maxY = container.clientHeight - noBtn.offsetHeight - 20;
   
   const newX = Math.floor(Math.random() * maxX);
   const newY = Math.floor(Math.random() * maxY);
   
   noBtn.style.left = newX + 'px';
   noBtn.style.top = newY + 'px';
 }
 
 function shrinkNoButton() {
   noBtnSize = Math.max(0.6, noBtnSize - 0.1);
   noBtn.style.transform = `scale(${noBtnSize})`;
 }
 
 function growYesButton() {
   const currentScale = parseFloat(getComputedStyle(yesBtn).transform.split(',')[3]) || 1;
   const newScale = Math.min(1.5, currentScale + 0.1);
   yesBtn.style.transform = `scale(${newScale})`;
 }
 
 setTimeout(moveButton, 500);
