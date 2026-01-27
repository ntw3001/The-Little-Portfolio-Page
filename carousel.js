const slides = [
  { title: "Solfie", img: "images/solfie.png", link: "https://solfie-398005.web.app/themespace", blurb: "projects/Solfie/blurb.txt" },
  { title: "BBQuery", img: "images/ball.png", link: "projects/BBQuery/index.html" },
  { title: "FRNSHR", img: "images/FRNSHR.png", link: "https://whispering-waters-21428-518fbcb27ec7.herokuapp.com/" },
  { title: "Dog Checker", img: "images/strawberry.jpg", link: "projects/DogChecker/index.html" },
  // { title: "Sumer Sale", img: "images/strawberry.jpg", link: "projects/SumerSale/index.html" },
  { title: "Text Formatter", img: "images/strawberry.jpg", link: "projects/TextFormatter/index.html" },
];

const blurbs = {
  "Solfie": "Solfie is a responsive web app built with Vue 3, Vite, and Vuex, using Firebase for hosting, authentication, and storage. It integrates OpenAI threads and completions and works seamlessly on both desktop and mobile.</br></br>Solfie is a life-management application that allows users to prepare and record personal goals and daily targets. Features currently in development will allow users to share and discuss specific goals, with the potential of assisting in collaboration between therapists and clients.</br></br>More details about using this app can be found at <a href='https://ishikismoothy.jp/2025/12/23/solfie-quick-start/' target='_blank' style='font-weight:600; text-decoration:underline'> the Ishikismoothy blog</a> (in Japanese).",

  "BBQuery": "BBQuery is a lightweight conversational assistant for LINE, built using Ruby. It allows players of Blood Bowl to look up tables quickly during a game, as well as check available inducement bonuses for their team.",

  "FRNSHR": "FRNSHR is a web app built with Ruby on Rails and PostgreSQL.</br></br>It scrapes furniture stores to collect information about items. Images are processed using Minimagick and Colorscore to extract dominant colours. Users can choose a colour scheme, search amongst furniture items that match tha scheme, and create collections of items they like. They can then plan purchases, with a visual epresentation of each colour's dominance in the collection. The purchase list can then be exported as a PDF for reference in-store.</br></br>FRNSHR was built as a final project for the Le Wagon bootcamp course, as part of a team of four developers. It was built for a specific workflow to be displayed in a demo presentation, and furniture which was once available may no longer be discovered.",

  "Dog Checker": "Dog Checker is a silly little puzzle, spawned from a Javascript tutorial and adjusted to improve user experience and increase difficulty. In order to prove their humanity, the user must demonstrate the power of their mighty colour vision. Colourblind mode is currently unavailable.",

  // "Sumer Sale": "Sumer Sale is an e-commerce website that offers a wide range of products at discounted prices. It features seasonal sales, exclusive deals, and a user-friendly shopping experience.",

  "Text Formatter": "Text Formatter is a simple Javascript tool that allows users to format text in different styles. Included here for its delightening Spongebob button.",
};

const list = document.querySelector(".list");
const blurbDiv = document.getElementById("blurb");
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

  lis.forEach(li => {
    li.onclick = null;
    li.querySelector("a")?.removeEventListener("click", li._linkHandler);
    li._linkHandler = null;
  });

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

  const activeSlide = lis[activeIndex];
  const link = activeSlide.querySelector("a").href;
  activeSlide.onclick = () => window.open(link, "_blank");

  lis[(activeIndex - 1 + total) % total].onclick = (e) => {
    e.preventDefault();
    movePrev();
  };
  lis[(activeIndex + 1) % total].onclick = (e) => {
    e.preventDefault();
    moveNext();
  };

  let blurb = blurbs[slides[activeIndex].title];

  blurbDiv.innerHTML = blurb || "This project is indescribable!";

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
