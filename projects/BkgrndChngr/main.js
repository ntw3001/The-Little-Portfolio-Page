const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(typeof btn.value);
    number=parseInt(btn.value);
    colourchange(number);
  });
});

const body=document.body;
function colourchange(number){
  body.className = "";
  switch (number) {
    case 1:
      body.classList.add("background-1");
      break;
    case 2:
      body.classList.add("background-2");
      break;
    case 3:
      body.classList.add("background-3");
      break;
    case 4:
      body.classList.add("background-4");
      break;
    case 5:
      body.classList.add("background-5");
      break;
    case 6:
      body.classList.add("background-6");
      break;
    case 7:
      body.classList.add("background-7");
      break;
    default:
      body.style.backgroundColor = "white";
  }
}
