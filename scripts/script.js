let buttons = document.querySelectorAll(".add-button");
let piles = document.querySelectorAll(".pile")

function  rgb(value) { return Math.floor(Math.random() * value);}

function copy() {
    
}

function addBrick(pile) {
  let textColor = `${rgb(255)}, ${rgb(255)}, ${rgb(255)}`
  let linerarGradient = `linear-gradient(rgba(${textColor}, 0.5), rgba(${textColor}, 1))`
  let brick = document.createElement('div');
  brick.classList.add('brick');
  brick.textContent = `rgb(${textColor})`;
  brick.style.backgroundImage = linerarGradient;
  pile.appendChild(brick);
  if (pile.childElementCount > 10) { pile.removeChild(pile.firstChild) }
};

buttons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    addBrick(piles[index]);
  })
})



