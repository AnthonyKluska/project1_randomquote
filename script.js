/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quoteArr = [ // array of objects of quotes
  {quote:'Contradictions do not exist. Whenever you think you are facing a contradiction, check your premises. You will find that one of them is wrong.', 
    source:'Ayn Rand', citation:'Introduction to Objectivist Epistomology', year: 1990},
  {quote:'The first principle is that you must not fool yourself — and you are the easiest person to fool.', 
    source:'Richard Feynman', citation:'Cargo Cult Science', year: 1974},
  {quote:'Happiness is the meaning and the purpose of life, the whole aim and end of human existence.', 
    source:'Aristotal', citation:'Nicomachean Ethics', year:-340},
  {quote:'The idea behind digital computers may be explained by saying that these machines are intended to carry out any operations which could be done by a human computer. ', 
    source:'Alan Turing', citation:'Computing Machinery and Intelligence', year:1950 },
  {quote:'In fact, there is an axiom of martial arts training that everyone ought to know: The way you train is the way you will fight. Martial arts that allow you to apply your technique at close to full power in daily training and sport allow you to constantly use those very techniques in almost exactly the same way during a real fight.', 
    source:'Renzo Gracie', citation:'Mastering Jujitsu', year: 2003}
];

function newQuote(){// calles the function for new quote
  console.log ("newquote()");
  var quoteNumber = randomizeQuotes(); 
  loadQuote(quoteNumber); 
}

function randomizeQuotes(){ // creates a random number used by newQuote() to randomly choose a qote from the object array
  var numberRange = quoteArr.length -1; 
  var randomNumb = Math.floor(Math.random() * Math.floor(numberRange));
  console.log(randomNumb); 
  return randomNumb;  
  
}

function loadQuote(i){ // edits the inner HTML for the new quote
  var output = document.getElementById("quote-box");
  while (output.hasChildNodes()) {
    output.removeChild(output.childNodes[0]);
  }
  var fstquote = document.createElement("P");
  fstquote.innerText = quoteArr[i].quote;
  fstquote.className = "quote"; 
  output.appendChild(fstquote); 

  var metaData = document.createElement("P");
  var source = document.createElement("span");
  var citation = document.createElement("span"); 
  var year = document.createElement("span"); 
  
  citation.className = "citation";
  year.className = "year";
  source.innerText = quoteArr[i].source;
  citation.innerText = quoteArr[i].citation;
  year.innerText = quoteArr[i].year;

  metaData.appendChild(source);
  metaData.appendChild(citation);
  metaData.appendChild(year);
  metaData.className = "source";

  output.appendChild(metaData); 

newQuote();// nee quate created at start of the page
var timer = setInterval(newQuote, 10000); // if no button clicked new quot apears evert 10 secons

var button = document.getElementById("loadQuote"); // dispays a new quote on click
button.addEventListener('click', ()=>{ 
  newQuote();  
});