const quoteBtn = document.getElementById('quote-btn');
const quoteOutput = document.getElementById('quote-output');
const authorOutput = document.getElementById('author-output');

quoteBtn.addEventListener('click', generateQuote);

const quotes = [
  {
    quote: "Hi it's me, Nick",
    author: "Nick"
  },  {
    quote: "Never try to retrieve anything once a bear has it",
    author: "Nick"
  },  {
    quote: "It looks like you were bitten by a cow",
    author: "Nick"
  },  {
    quote: "Look at me I'm a cowboy",
    author: "Nick"
  },  {
    quote: "Do I need to fill this one in or should I leave it blank",
    author: "Nick"
  },  {
    quote: "Give me a couple of minutes, I just want to finish this",
    author: "Nick"
  },  {
    quote: "Yeah no that's really good, I think we should do it that way",
    author: "Nick"
  },  {
    quote: "I think there are three now, another one just came",
    author: "Nick"
  },  {
    quote: "Both places were owned by this big American guy who looked like Santa",
    author: "Nick"
  },  {
    quote: "I didn't renew my working visa, I probably should have done because I got offered a year-long contract just after the deadline passed",
    author: "Nick"
  },
]

prevQuote = 0;

function generateQuote () {
  let rand = Number.parseInt(Math.random() * quotes.length);
  if (prevQuote !== rand) {
    quoteOutput.innerHTML = `<span>${quotes[rand].quote}</span>`;
    authorOutput.innerHTML = `<small>-${quotes[rand].author}-</small>`;
    prevQuote = rand;
  } else {
    generateQuote();
  }
}
