(function() {
    const quotes = [
      {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        author:"Francis of Assisi"
        },
        {
          quote:"Believe you can and you're halfway there.",
          author:"Theodore Roosevelt"
        },
        {
          quote:"It does not matter how slowly you go as long as you do not stop.",
          author:"Confucius"
        },
        {
          quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
          author:"Thomas A. Edison"
        },
        {
          quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
          author:"Confucius"
        },
        {
          quote:"Don't watch the clock; do what it does. Keep going.",
          author:"Sam Levenson"
        },
        {
          quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
          author:"Ayn Rand"
        },
        {
          quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
          author:"Ayn Rand"
        },
        {
          quote:"Expect problems and eat them for breakfast.",
          author:"Alfred A. Montapert"
        },
        {
          quote:"Start where you are. Use what you have. Do what you can.",
          author:"Arthur Ashe"
        },
        {
          quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
          author:"Samuel Beckett"
        },
        {
          quote:"Be yourself; everyone else is already taken.",
          author:"Oscar Wilde"
        },
        {
          quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          author:"Albert Einstein"
        },
        {
          quote:"Always remember that you are absolutely unique. Just like everyone else.",
          author:"Margaret Mead"
        },
        {
          quote:"Do not take life too seriously. You will never get out of it alive.",
          author:"Elbert Hubbard"
        },
        {
          quote:"People who think they know everything are a great annoyance to those of us who do.",
          author:"Isaac Asimov"
        },
        {
          quote:"Procrastination is the art of keeping up with yesterday.",
          author:"Don Marquis"
        },
        {
          quote:"Get your facts first, then you can distort them as you please.",
          author:"Mark Twain"
        },
        {
          quote:"A day without sunshine is like, you know, night.",
          author:"Steve Martin"
        },
        {
          quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
          author:"Ellen DeGeneres"
        },
        {
          quote:"Don't sweat the petty things and don't pet the sweaty things.",
          author:"George Carlin"
        },
        {
          quote:"Always do whatever's next.",
          author:"George Carlin"
        },
        {
          quote:"Atheism is a non-prophet organization.",
          author:"George Carlin"
        },
        {
          quote:"Hapiness is not something ready made. It comes from your own actions.",
          author:"Dalai Lama"
        },
        {
          quote:
          "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
        },
        {
          quote:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
          author: "John Kenneth Galbraith"
        },
        {
          quote:
            "God save me from my friends. I can protect myself from my enemies.",
          author: "Claude Louis Hector de Villars "
        },
        {
          quote: "The price of anything is the amount of life you exchange for it.",
          author: "David Thoreau"
        },
        {
          quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
          author: "Charles Lindbergh"
        },
        {
          quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
          author: " Tyne Daly"
        }
  
    ];
  
    const btn = document.getElementById("generate-btn");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();
  
  (function() {
    const quotes = [
    { author: "Jess C. Scott", source: "The Darker Side of Life", quote: "The brightest light casts the darkest shadow." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "To condense fact from the vapor of nuance." },
    { author: "William Gibson", source: "Neuromancer", quote: "Falling burned and blinded through a Siberian sky." },
    { author: "Anna L. Davis", source: "Open Source", quote: "I’d been an outcast my entire life. Growing up with technophobe parents in the dawn of a Cyborg Age did that to a person." },
    { author: "Eric Schmidth", source: "Dystopian Times", quote: "The Internet is the first thing that humanity has built that humanity doesn’t understand, the largest experiment in anarchy that we have ever had." },
    { author: "Philip K. Dick", source: "Do Androids Dream of Electric Sheep?", quote: "You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity." },
    { author: "Lain Iwakura", source: "Serial Experiments: Lain", quote: "No matter where you go, everyone’s connected." },
    { author: "William Gibson", source: "Zero History", quote: "When you want to know how things really work, study them when they’re coming apart." },
    { author: "Jeff Somers", source: "The Electric Church", quote: "Let me show you an endless trail of sunsets." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "Jack the sound barrier. Bring the noise." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "Well, all information looks like noise until you break the code." }
  ];
  
    const btn = document.getElementById("generate-btn2");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote2").textContent = quotes[random].quote;
      document.querySelector(".author2").textContent = quotes[random].author;
    });
  })();

  (function() {
    const quotes = [
  ];

    const btn = document.getElementById("generate-btn3");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote3").textContent = quotes[random].quote;
      document.querySelector(".author3").textContent = quotes[random].author;
    });
  })();