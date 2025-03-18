const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '10px';
buttonContainer.style.margin = '20px 0';

const highlightButton = createButton('💫Highlight Alternate Ingredients');
const checkInstructionsButton = createButton('✔️ Check Instructions (3s Interval)');
const resetInstructionsButton = createButton('↺ Reset Instructions');


buttonContainer.appendChild(highlightButton);
buttonContainer.appendChild(checkInstructionsButton);
buttonContainer.appendChild(resetInstructionsButton);


const cakeImage = document.getElementById('cake');
cakeImage.parentNode.insertBefore(buttonContainer, cakeImage.nextSibling);


function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.padding = '8px 16px';
  button.style.backgroundColor = '#8B4513';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.fontFamily = 'inherit';
  
  
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#A0522D';
  });
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#8B4513';
  });
  
  return button;
}


highlightButton.addEventListener('click', () => {
  const ingredients = document.querySelectorAll('#recipe-ingredients li');
  
  ingredients.forEach((item, index) => {
    
    item.style.backgroundColor = '';
    item.style.fontWeight = '';
    

    if (index % 2 === 0) {
      item.style.backgroundColor = '#FFE4B5';
      item.style.fontWeight = 'bold';
    }
  });
});


checkInstructionsButton.addEventListener('click', () => {
  const instructions = document.querySelectorAll('#recipe-instructions li');
  let currentIndex = 0;
  

  instructions.forEach(item => {
    item.style.position = 'relative';
    removeCheckmark(item);
  });
  
 
  const interval = setInterval(() => {
    if (currentIndex < instructions.length) {
      addCheckmark(instructions[currentIndex]);
      currentIndex++;
    } else {
      clearInterval(interval);
    }
  }, 3000);
});


resetInstructionsButton.addEventListener('click', () => {
  const instructions = document.querySelectorAll('#recipe-instructions li');
  instructions.forEach(item => {
    removeCheckmark(item);
  });
});


function addCheckmark(element) {
  if (element.querySelector('.checkmark')) return;
  
  const checkmark = document.createElement('span');
  checkmark.innerHTML = '✓';
  checkmark.className = 'checkmark animate__animated animate__bounceIn';
  checkmark.style.position = 'absolute';
  checkmark.style.left = '-25px';
  checkmark.style.color = 'green';
  checkmark.style.fontWeight = 'bold';
  
  
  element.style.position = 'relative';
  element.style.textDecoration = 'line-through';
  element.style.color = '#666';
  
  
  element.appendChild(checkmark);
}


function removeCheckmark(element) {
  const checkmark = element.querySelector('.checkmark');
  if (checkmark) {
    element.removeChild(checkmark);
  }
  element.style.textDecoration = 'none';
  element.style.color = '';
}


const ingredientsHeader = document.querySelector('h2.headers:first-of-type');
if (ingredientsHeader) {
  ingredientsHeader.style.cursor = 'pointer';
  ingredientsHeader.addEventListener('click', () => {
    ingredientsHeader.classList.remove('animate__animated', 'animate__tada');
    void ingredientsHeader.offsetWidth; 
    ingredientsHeader.classList.add('animate__animated', 'animate__tada');
  });
}


const instructionsHeader = document.querySelector('h2.headers:nth-of-type(2)');
if (instructionsHeader) {
  instructionsHeader.style.cursor = 'pointer';
  instructionsHeader.addEventListener('click', () => {
    instructionsHeader.classList.remove('animate__animated', 'animate__rubberBand');
    void instructionsHeader.offsetWidth; 
    instructionsHeader.classList.add('animate__animated', 'animate__rubberBand');
  });
}


if (cakeImage) {
  cakeImage.style.cursor = 'pointer';
  cakeImage.addEventListener('click', () => {
    cakeImage.classList.remove('animate__animated', 'animate__heartBeat');
    void cakeImage.offsetWidth; 
    cakeImage.classList.add('animate__animated', 'animate__heartBeat');
  });
}