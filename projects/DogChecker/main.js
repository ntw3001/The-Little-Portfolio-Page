const submitBtn = document.querySelector('button[type=submit]');

submitBtn.disabled = true;

const elements =  document.querySelectorAll('.element');
const selectColor = document.getElementById('selectColor');
const colorList = [];
const resultMessage = document.getElementById('resultMessage');
let chosenElement = null;
let correctColor

let colorArray= ["00", "00", "00"];
const zeroPosition = Math.floor(Math.random() * 3);
const onePosition = Math.floor(Math.random() * 3);
const twoPosition = Math.floor(Math.random() * 3);

let lowVal = Math.floor(Math.random() * 8);
let valRange = Math.floor(Math.random() * 4) + 4;
let highVal = lowVal + valRange;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

elements.forEach(function (element) {
  const color = getRandomColor();
  const textBackground = element.querySelector('.element_text_bkgrnd');
  element.style.backgroundColor = color;
  if (textBackground) {
    textBackground.innerHTML = color;
  }
  colorList.push(color);
  let randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  randomColor = randomColor.trim();
  selectColor.style.backgroundColor = `${randomColor}`;
  correctColor = randomColor;
});

function getRandomColor() {
  const hexRange = "0123456789ABCDEF";
  let letter = hexRange.slice(lowVal, highVal);
  let color = "#";
  let arrayEntry1 = "";
  for (let i = 0; i<2; i++) {
    arrayEntry1 += letter[Math.floor(Math.random() * letter.length)];
  }
  colorArray[zeroPosition] = arrayEntry1;
  let arrayEntry2 = "";
  for (let i = 0; i<2; i++) {
    arrayEntry2 += letter[Math.floor(Math.random() * letter.length)];
  }
  colorArray[onePosition] = arrayEntry2;
  let arrayEntry3 = "";
  for (let i = 0; i<2; i++) {
    arrayEntry3 += letter[Math.floor(Math.random() * letter.length)];
  }
  colorArray[twoPosition] = arrayEntry3;
  color = color + colorArray.join("");
  return color
}

elements.forEach(function (element) {
  element.addEventListener('click', function () {
    chosenElement = element.querySelector('.element_text_bkgrnd').innerHTML;
      elements.forEach(function (el) {
        el.classList.remove('chosen');
      });
    element.classList.toggle('chosen');
    submitBtn.disabled = false;
    submitBtn.classList.remove('btn-light');
    submitBtn.classList.add('btn-success');
  });
});

submitBtn.addEventListener('click', function () {
  if (chosenElement === correctColor) {
    sessionStorage.setItem("result", "winner");
    window.location.href = "/projects/DogChecker/result.html";
  } else {
    sessionStorage.setItem("result", "loser");
    window.location.href = "/projects/DogChecker/result.html";
  }
});
