

var quotes = [
    "What you're doing right now is the best use of your time, according to you.", 
    "Whether you think you can or you can't, you're right.",
    "Dream big, work hard, stay humble.",
    "If you want something done, ask a busy person.",
    "Today I will do what others won't, so tomorrow I can accomplish what others can't.",
    "It always seems impossible until it's done.",
    "Stay hungry, stay foolish.",
    "Only a life lived for others is a life worthwhile.",
    "I wish there was a way to know you were in the good old days before you actually left them.",
    "If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.",
    "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "We realize the importance of our voices only when we are silenced.",
    "Believe you can and you're halfway there.",
    "Be the change you want to see in the world.",
    "Some people want it to happen, some wish it would happen, others make it happen.",
    "You're off to great places! Today is your day! Your mountain is waiting, so... get on your way!",
    "You miss 100% of the shots that you don't take.",
    "I would rather die of passion than of boredom."

];


var quoteAuthors = [
    "Sahil Lavingia",
    "Henry Ford",
    "Brad Meltzer",
    "Elbert Hubbard",
    "Jerry Rice",
    "Nelson Mandela",
    "Steve Jobs",
    "Albert Einstein",
    "Andy Bernard",
    "Grace Hopper",
    "Anne Frank",
    "Malala Yousafzai",
    "Theodore Roosevelt",
    "Mahatma Gandhi",
    "Michael Jordan",
    "Dr. Seuss",
    "Wayne Gretzky",
    "Vincent Van Gogh"
];

var colors = [
    "rgb(255, 179, 179)",
    "rgb(255, 199, 179)",
    "rgb(255, 219, 179)",
    "rgb(255, 239, 179)",
    "rgb(252, 255, 179)",
    "rgb(232, 255, 179)",
    "rgb(212, 255, 179)",
    "rgb(192, 255, 179)",
    "rgb(179, 255, 186)",
    "rgb(179, 255, 206)",
    "rgb(179, 255, 226)",
    "rgb(179, 255, 246)",
    "rgb(179, 244, 255)",
    "rgb(179, 224, 255)",
    "rgb(179, 204, 255)",
    "rgb(179, 184, 255)",
    "rgb(194, 179, 255)",
    "rgb(214, 179, 255)",
    "rgb(234, 179, 255)",
    "rgb(254, 179, 255)",
    "rgb(255, 179, 236)",
    "rgb(255, 179, 216)",
    "rgb(255, 179, 196)"
];



function displayQuote() {
    let randIndex = Math.floor(Math.random()*quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randIndex];
    document.getElementById('authorDisplay').innerHTML = quoteAuthors[randIndex];
    let anotherRandIndex = Math.floor(Math.random()*colors.length);
    document.body.style.background = colors[anotherRandIndex];
}

displayQuote();