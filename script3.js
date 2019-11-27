const quotes = [
  {
    name: "Stephen King",
    quote: "get busy living or bet busy dying."
  },
  {
    name: "John F.Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly"
  },
  {
    name: "Abraham Lincoln",
    quote:
      "I'm a sucess today because I had a friend who believe in me and I didn't have the heart to let him down."
  },
  {
    name: "Learnodo Da Vinci",
    quote:
      "It had lon come to my attention that people of accomplihment rearely sat back and let things happen to them. They went out and happened to things"
  },
  {
    name: "Leo Tolstoy",
    quote: "If you want to be happye be."
  }
];

// const simpleQuotes = [
//     {
//         name:'author number 1',
//         quote: 'quote number 1',
//     },
//     {
//         name:'author number 1',
//         quote: 'quote number 1',
//     }
// ]

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  //   console.log(number);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
