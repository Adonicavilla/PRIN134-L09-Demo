const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.flexWrap = 'wrap'; 
buttonContainer.style.gap = '15px';
buttonContainer.style.margin = '20px auto';
buttonContainer.style.padding = '20px';
buttonContainer.style.maxWidth = '90%';
buttonContainer.style.backgroundImage = 'url("https://cdnjs.cloudflare.com/ajax/libs/minecraft-textures/1.19.3/images/blocks/grass_block_top.png")';
buttonContainer.style.backgroundRepeat = 'repeat';
buttonContainer.style.borderRadius = '15px'; 
buttonContainer.style.boxShadow = '0 0 0 5px #ffffff, 0 0 0 10px #FF9CD6'; // Cute double border with pink
buttonContainer.style.imageRendering = 'pixelated'; 

const highlightButton = createButton('💫 Highlight Ingredients');
const checkInstructionsButton = createButton('✔️ Check Instructions');
const resetInstructionsButton = createButton('↺ Reset');

buttonContainer.appendChild(highlightButton);
buttonContainer.appendChild(checkInstructionsButton);
buttonContainer.appendChild(resetInstructionsButton);

const cakeImage = document.getElementById('cake');
cakeImage.parentNode.insertBefore(buttonContainer, cakeImage.nextSibling);

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.padding = '12px 20px';
  button.style.backgroundColor = '#FFADD6';
  button.style.color = '#5D3A3A'; 
  button.style.border = '3px solid #ffffff';
  button.style.borderBottom = '5px solid #ffffff'; 
  button.style.borderRadius = '10px'; 
  button.style.cursor = 'pointer';
  button.style.fontFamily = '"VT323", "Minecraft", monospace'; 
  button.style.fontSize = '18px';
  button.style.fontWeight = 'bold';
  button.style.boxShadow = '0 4px 0 #FF73B5, 0 0 10px rgba(255, 182, 229, 0.7)';
  button.style.transition = 'transform 0.2s, box-shadow 0.2s';
  button.style.textAlign = 'center';

  const buttonContent = document.createElement('div');
  buttonContent.style.display = 'flex';
  buttonContent.style.alignItems = 'center';
  buttonContent.style.justifyContent = 'center';
  buttonContent.style.gap = '8px';
  
  const kawaiiEmoji = document.createElement('span');

  if (text.includes('Highlight')) {
    kawaiiEmoji.textContent = '✨';
  } else if (text.includes('Check')) {
    kawaiiEmoji.textContent = '🌸';
  } else {
    kawaiiEmoji.textContent = '🍰';
  }
  
  kawaiiEmoji.style.fontSize = '20px';
  buttonContent.appendChild(kawaiiEmoji);
  buttonContent.appendChild(document.createTextNode(text.replace(/[✨💫✔️↺]/g, ''))); // Remove original emoji
  
  button.textContent = '';
  button.appendChild(buttonContent);

  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#FFB6E3';
    button.style.transform = 'translateY(-2px) scale(1.05)';
    button.style.boxShadow = '0 6px 0 #FF73B5, 0 0 15px rgba(255, 182, 229, 0.9)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#FFADD6';
    button.style.transform = 'translateY(0) scale(1)';
    button.style.boxShadow = '0 4px 0 #FF73B5, 0 0 10px rgba(255, 182, 229, 0.7)';
  });
  

  button.addEventListener('mousedown', () => {
    button.style.transform = 'translateY(3px) scale(0.98)';
    button.style.boxShadow = '0 1px 0 #FF73B5, 0 0 5px rgba(255, 182, 229, 0.7)';
  });
  
  button.addEventListener('mouseup', () => {
    button.style.transform = 'translateY(0) scale(1)';
    button.style.boxShadow = '0 4px 0 #FF73B5, 0 0 10px rgba(255, 182, 229, 0.7)';
  });
  
  return button;
}


const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

document.body.style.backgroundColor = '#C2EBFF'; // Sky blue background
document.body.style.backgroundImage = 'repeating-linear-gradient(45deg, #C2EBFF, #C2EBFF 20px, #D0F0FF 20px, #D0F0FF 40px)'; // Striped pattern
document.body.style.fontFamily = '"VT323", "Minecraft", monospace';


function addKawaiiClouds() {
  const cloudsContainer = document.createElement('div');
  cloudsContainer.style.position = 'fixed';
  cloudsContainer.style.top = '0';
  cloudsContainer.style.left = '0';
  cloudsContainer.style.width = '100%';
  cloudsContainer.style.height = '100%';
  cloudsContainer.style.pointerEvents = 'none';
  cloudsContainer.style.zIndex = '-1';
  
  for (let i = 0; i < 5; i++) {
    const cloud = document.createElement('div');
    cloud.style.position = 'absolute';
    cloud.style.top = `${Math.random() * 70}%`;
    cloud.style.left = `${Math.random() * 100}%`;
    cloud.style.width = `${Math.random() * 100 + 100}px`;
    cloud.style.height = `${Math.random() * 50 + 50}px`;
    cloud.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    cloud.style.borderRadius = '50%';
    cloud.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
    cloud.style.animation = `float ${Math.random() * 20 + 20}s linear infinite`;
    cloudsContainer.appendChild(cloud);
    

    if (Math.random() > 0.5) {
      const face = document.createElement('div');
      face.style.position = 'relative';
      face.style.top = '50%';
      face.style.left = '50%';
      face.style.transform = 'translate(-50%, -50%)';
      face.innerHTML = Math.random() > 0.5 ? '•ᴗ•' : '^ᴗ^';
      face.style.fontSize = '20px';
      face.style.color = '#FF9CD6';
      face.style.textAlign = 'center';
      cloud.appendChild(face);
    }
  }
  
 
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      from { transform: translateX(0); }
      to { transform: translateX(calc(100vw + 200px)); }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(cloudsContainer);
}

addKawaiiClouds();


const headers = document.querySelectorAll('h2.headers');
headers.forEach(header => {
  header.style.backgroundColor = '#A276FF'; 
  header.style.color = '#ffffff';
  header.style.textShadow = '2px 2px #7248B7';
  header.style.padding = '15px';
  header.style.borderRadius = '15px';
  header.style.boxShadow = '0 0 0 4px #ffffff, 0 5px 0 #7248B7';
  header.style.textAlign = 'center';
  header.style.fontSize = '26px';
  header.style.position = 'relative';
  header.style.margin = '30px auto';
  header.style.maxWidth = '80%';

  const leftDeco = document.createElement('span');
  leftDeco.textContent = '★彡';
  leftDeco.style.position = 'absolute';
  leftDeco.style.left = '10px';
  
  const rightDeco = document.createElement('span');
  rightDeco.textContent = '彡★';
  rightDeco.style.position = 'absolute';
  rightDeco.style.right = '10px';
  
  header.appendChild(leftDeco);
  header.appendChild(rightDeco);
});


highlightButton.addEventListener('click', () => {
  const ingredients = document.querySelectorAll('#recipe-ingredients li');
  
  ingredients.forEach((item, index) => {
    item.style.backgroundColor = '';
    item.style.fontWeight = '';

    if (index % 2 === 0) {
      item.style.backgroundColor = '#FFE8F7'; 
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
  checkmark.style.color = '#FF6AC1'; 
  checkmark.style.fontWeight = 'bold';
  checkmark.style.fontSize = '24px';
  
  element.style.position = 'relative';
  element.style.textDecoration = 'line-through';
  element.style.color = '#A276FF'; 
  
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


const listItems = document.querySelectorAll('#recipe-ingredients li, #recipe-instructions li');
listItems.forEach(item => {
  item.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
  item.style.padding = '12px';
  item.style.margin = '10px 0';
  item.style.color = '#5D3A3A'; 
  item.style.borderRadius = '10px';
  item.style.boxShadow = '0 3px 0 #FFADD6, 0 0 5px rgba(255, 115, 181, 0.3)';
  item.style.border = '2px dashed #FFADD6';
  item.style.transition = 'transform 0.2s';
  

  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateX(5px)';
    item.style.backgroundColor = 'rgba(255, 246, 252, 0.9)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateX(0)';
    item.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
  });
});


const ingredientsHeader = document.querySelector('h2.headers:first-of-type');
if (ingredientsHeader) {
  ingredientsHeader.style.cursor = 'pointer';
  ingredientsHeader.addEventListener('click', () => {
    ingredientsHeader.classList.remove('animate__animated', 'animate__tada');
    void ingredientsHeader.offsetWidth; 
    ingredientsHeader.classList.add('animate__animated', 'animate__tada');
    addSparkles(ingredientsHeader);
  });
}

const instructionsHeader = document.querySelector('h2.headers:nth-of-type(2)');
if (instructionsHeader) {
  instructionsHeader.style.cursor = 'pointer';
  instructionsHeader.addEventListener('click', () => {
    instructionsHeader.classList.remove('animate__animated', 'animate__rubberBand');
    void instructionsHeader.offsetWidth; 
    instructionsHeader.classList.add('animate__animated', 'animate__rubberBand');
    addSparkles(instructionsHeader);
  });
}


if (cakeImage) {
  cakeImage.style.cursor = 'pointer';
  cakeImage.style.borderRadius = '20px';
  cakeImage.style.boxShadow = '0 0 0 5px #ffffff, 0 0 0 10px #FF9CD6, 0 10px 20px rgba(0, 0, 0, 0.1)';
  cakeImage.style.margin = '20px auto';
  cakeImage.style.display = 'block';
  

  const cakeWrapper = document.createElement('div');
  cakeWrapper.style.position = 'relative';
  cakeWrapper.style.width = 'fit-content';
  cakeWrapper.style.margin = '0 auto';
  const decorations = ['🍓', '🍰', '🧁', '🍥'];
  
  for (let i = 0; i < 8; i++) {
    const deco = document.createElement('div');
    deco.textContent = decorations[i % decorations.length];
    deco.style.position = 'absolute';
    deco.style.fontSize = '24px';
    
    const angle = (i / 8) * 2 * Math.PI;
    const radius = 150;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    deco.style.left = `calc(50% + ${x}px)`;
    deco.style.top = `calc(50% + ${y}px)`;
    deco.style.transform = 'translate(-50%, -50%)';
    deco.style.animation = `float-deco ${3 + i}s ease-in-out infinite alternate`;
    
    cakeWrapper.appendChild(deco);
  }
  

  const decoStyle = document.createElement('style');
  decoStyle.innerHTML = `
    @keyframes float-deco {
      0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
      100% { transform: translate(-50%, -50%) scale(1.2) rotate(20deg); }
    }
  `;
  document.head.appendChild(decoStyle);
  

  cakeImage.parentNode.insertBefore(cakeWrapper, cakeImage);
  cakeWrapper.appendChild(cakeImage);
  
  cakeImage.addEventListener('click', () => {
    cakeImage.classList.remove('animate__animated', 'animate__heartBeat');
    void cakeImage.offsetWidth; 
    cakeImage.classList.add('animate__animated', 'animate__heartBeat');
    addHearts(cakeImage);
  });
}


function addSparkles(element) {
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = `${Math.random() * 10 + 10}px`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = `sparkle 1s forwards`;
    sparkle.style.zIndex = '1000';
    
    element.appendChild(sparkle);
    
    setTimeout(() => {
      element.removeChild(sparkle);
    }, 1000);
  }
  

  if (!document.querySelector('#sparkle-style')) {
    const sparkleStyle = document.createElement('style');
    sparkleStyle.id = 'sparkle-style';
    sparkleStyle.innerHTML = `
      @keyframes sparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(sparkleStyle);
  }
}


function addHearts(element) {
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.fontSize = `${Math.random() * 15 + 15}px`;
    heart.style.left = `${rect.left + rect.width/2 + (Math.random() * 100 - 50)}px`;
    heart.style.top = `${rect.top + rect.height/2}px`;
    heart.style.pointerEvents = 'none';
    heart.style.animation = `float-heart ${Math.random() * 2 + 2}s forwards`;
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      document.body.removeChild(heart);
    }, 3000);
  }
  

  if (!document.querySelector('#heart-style')) {
    const heartStyle = document.createElement('style');
    heartStyle.id = 'heart-style';
    heartStyle.innerHTML = `
      @keyframes float-heart {
        0% { transform: translateY(0) scale(0); opacity: 0; }
        10% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-100px) scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(heartStyle);
  }
}