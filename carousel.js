const slides = [
  { title: "Solfie", img: "images/solfie.png", link: "projects/Solfie/index.html" },
  { title: "BBQuery", img: "images/ball.png", link: "projects/BBQuery/index.html" },
  { title: "FRNSHR", img: "images/FRNSHR.png", link: "projects/FRNSHR/index.html" },
  { title: "Robot Query", img: "images/strawberry.jpg", link: "projects/RobotQuery/index.html" },
  { title: "Sumer Sale", img: "images/strawberry.jpg", link: "projects/SumerSale/index.html" },
];

const list = document.querySelector(".list");
let activeIndex = 0;
let activeListener = null;

function renderSlides() {
  list.innerHTML = "";
  slides.forEach((slide, i) => {
    const li = document.createElement("li");
    li.classList.add("slide");
    li.innerHTML = `
      <a href="${slide.link}" target="_blank" class="flex flex-col items-center p-2">
        <img src="${slide.img}" alt="${slide.title}" class="w-24 h-24 rounded-md mb-2">
        <span class="text-center text-sm font-semibold text-gray-800">${slide.title}</span>
      </a>
    `;
    list.appendChild(li);
  });
}

function updateSlides() {
  const lis = document.querySelectorAll(".list li");
  const total = slides.length;

  // Remove old click listeners
  lis.forEach(li => {
    li.onclick = null;
    li.querySelector("a")?.removeEventListener("click", li._linkHandler);
    li._linkHandler = null; // store handler reference if needed
  });

  // Reset classes
  lis.forEach(li => li.className = "slide hide");

  lis.forEach((li, i) => {
    let rel = (i - activeIndex + total) % total;
    if (rel > Math.floor(total / 2)) rel -= total;

    switch (rel) {
      case 0: li.classList.add("act"); break;
      case -1: li.classList.add("prev"); break;
      case 1: li.classList.add("next"); break;
      case -2: li.classList.add("prevprev"); break;
      case 2: li.classList.add("nextnext"); break;
      default: li.classList.add("hide");
    }
  });

  // Active slide click
  const activeSlide = lis[activeIndex];
  const link = activeSlide.querySelector("a").href;
  activeSlide.onclick = () => window.open(link, "_blank");

  // Prev/Next slide clicks
  lis[(activeIndex - 1 + total) % total].onclick = (e) => {
    e.preventDefault();
    movePrev();
  };
  lis[(activeIndex + 1) % total].onclick = (e) => {
    e.preventDefault();
    moveNext();
  };
}


function moveNext() {
  console.log("Moving to next slide");
  activeIndex = (activeIndex + 1) % slides.length;
  updateSlides();
}

function movePrev() {
  console.log("Moving to previous slide");
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
  updateSlides();
}


renderSlides();
updateSlides();
