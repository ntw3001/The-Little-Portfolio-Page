const output = document.getElementById('output');
const submitBtn = document.querySelector('button[type=submit]');
const result = sessionStorage.getItem("result");

console.log(result);

showOutput = function() {
  if (result === 'winner') {
    output.innerHTML = 'Welcome aboard, fellow human! I am also a human.';
  } else {
    output.style.fontSize = '40px';
    output.innerHTML = '01000111 01100101 01110100 00100000 01101111 01110101 01110100 00100000 01101111 01100110 00100000 01101000 01100101 01110010 01100101 00100000 01100011 01101100 01100001 01101110 01101011 01100010 01100001 01100111';
  }
}

submitBtn.addEventListener('click', function () {
  window.location.href = "index.html";
});

showOutput();
