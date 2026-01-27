const output = document.getElementById('output');
const submitBtn = document.querySelector('button[type=submit]');
const result = sessionStorage.getItem("result");

console.log(result);

showOutput = function() {
  if (result === 'winner') {
    output.innerHTML = 'Welcome aboard, fellow human! I am also a human.';
  } else {
    output.style.fontSize = '40px';
    output.innerHTML = 'Bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark';
  }
}

submitBtn.addEventListener('click', function () {
  window.location.href = "index.html";
});

showOutput();
