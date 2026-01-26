const darkModeBtn = document.getElementById("darkModeBtn");
const btnTxt = document.querySelector(".btn-txt");
const main = document.querySelector("main");
const imgs = document.querySelectorAll("img");

darkModeBtn.addEventListener("click", (e) => {

  if (e.target.checked) {
    btnTxt.innerText = "Light Mode";
    main.style.filter= "invert(100)";
    imgs.forEach((img) => {
      img.style.filter = "invert(100)";
    });
  } else {
    btnTxt.innerText = "Dark Mode";
    main.style.filter= "invert(0)";
    imgs.forEach((img) => {
      img.style.filter = "invert(0)";
    })
  }

  if(!main.classList.contains("animate")){
    main.classList.add("animate");
  } else {
    main.classList.remove("animate");
    setTimeout(() => {
      main.classList.add("animate");
    }, 10);
  }
});
