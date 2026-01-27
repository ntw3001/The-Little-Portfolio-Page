const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');

const uppercaseBtn=document.querySelector('.uppercase');
const lowercaseBtn=document.querySelector('.lowercase');
const capitalizeBtn=document.querySelector('.capitalize');
const boldBtn=document.querySelector('.bold');
const italicBtn=document.querySelector('.italic');
const underlineBtn=document.querySelector('.underline');
const spongebobBtn=document.querySelector('.spongebob');
const revertBtn=document.querySelector('.revert');

inputField.addEventListener('keyup', someonesTyping);

function someonesTyping() {
  getValue()
  clear()
}

function getValue() {
    outputField.innerHTML = inputField.value;
}

function clear() {
  uppercaseBtn.classList.remove('active')
  lowercaseBtn.classList.remove('active')
  capitalizeBtn.classList.remove('active')
  boldBtn.classList.remove('active')
  italicBtn.classList.remove('active')
  underlineBtn.classList.remove('active')
  spongebobBtn.classList.remove('active')
}

uppercaseBtn.addEventListener('click', (e) => {
  e.target.classList.add('active')
  spongebobBtn.classList.remove('active')
  lowercaseBtn.classList.remove('active')
  capitalizeBtn.classList.remove('active')
  return (outputField.innerHTML = outputField.innerHTML.toUpperCase());
});

lowercaseBtn.addEventListener('click', (e) => {
  e.target.classList.add('active')
  spongebobBtn.classList.remove('active')
  uppercaseBtn.classList.remove('active')
  capitalizeBtn.classList.remove('active')
  return (outputField.innerHTML = outputField.innerHTML.toLowerCase());
});

capitalizeBtn.addEventListener('click', (e) => {
  e.target.classList.add('active')
  spongebobBtn.classList.remove('active')
  uppercaseBtn.classList.remove('active')
  lowercaseBtn.classList.remove('active')
  return (outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase());
});

boldBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  return (outputField.style.fontWeight === 'bold' ? outputField.style.fontWeight = 'normal' : outputField.style.fontWeight = 'bold');
});

italicBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  return (outputField.style.fontStyle === 'italic' ? outputField.style.fontStyle = 'normal' : outputField.style.fontStyle = 'italic');
});

underlineBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  return (outputField.style.textDecoration === 'underline' ? outputField.style.textDecoration = 'none' : outputField.style.textDecoration = 'underline');
});

function spongeText () {
  let rawArray = outputField.innerHTML.split('')
  let alphaArray = []
  const nonAlpha = {}

  const alphaCheck = /([a-zA-Z])+/g
  rawArray.forEach((char, index) => {
    if (!char.match(alphaCheck)) {
      nonAlpha[index] = char
    } else {
      alphaArray.push(char)
    }
  })

  alphaArray = alphaArray.map((char, index) =>
    index % 2 === 0 ? char.toLowerCase() : char.toUpperCase());

  let resultArray = rawArray.map((char, index) =>
    nonAlpha[index] !== undefined ? char : alphaArray.shift()
  );

  outputField.innerHTML = resultArray.join('')
};

spongebobBtn.addEventListener('click', (e) => {
  e.target.classList.add('active')
  uppercaseBtn.classList.remove('active')
  lowercaseBtn.classList.remove('active')
  capitalizeBtn.classList.remove('active')
  return spongeText();
});

revertBtn.addEventListener('click', () => {
  outputField.innerHTML = inputField.value;
  uppercaseBtn.classList.remove('active')
  lowercaseBtn.classList.remove('active')
  capitalizeBtn.classList.remove('active')
  boldBtn.classList.remove('active')
  italicBtn.classList.remove('active')
  underlineBtn.classList.remove('active')
  spongebobBtn.classList.remove('active')
});
