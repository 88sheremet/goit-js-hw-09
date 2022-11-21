
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

 const startButton = document.querySelector('[data-start]'); 
console.log(startButton);
 const stopButton = document.querySelector('[data-stop]');
 console.log(stopButton);
 const body = document.querySelector('body');

 let timerId = null;

 stopButton.disabled = true;
 
 startButton.addEventListener('click', () =>{
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
 });

 stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
  
});