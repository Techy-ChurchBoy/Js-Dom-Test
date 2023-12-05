/* variables */

let button= document.querySelector('.quoteBtn');

let quote= document.querySelector('.quotes');

let picture= document.querySelector('.image');

let person= document.querySelector('.person');


const QUOTES=[
    { quote: '\"The thing about plateaus is that it can be hard to realize that you’re on one.\"', 
    person: 'MARGARET HOELZER',
    picture:"img/Margaret-Hoelzer-Profile-Picture.png"
   
          
    },
    
    {
    quote: '\"Rejection makes success all the sweeter.\"', 
    person: 'TARA SCHUSTER',
    picture:"img/Tara-Schuster-Headshot.webp"
    },
    
    {
    quote: '\"Excellence is not an accident.\"', 
    person: 'Leslie Maxi',
    picture:"img/leslie-maxie-new-headshot.webp"
    },
    
    {
    quote: '\"My wrong moves are what led me to my best right moves.\"', 
    person: 'SARAH ROB O’HAGAN',
    picture:"img/Sarah-Robb-OHagan-Profile-Picture.webp"
    },
    
    {
    quote: '\"You need people who see you and want your success as much as you want theirs..\"', 
    person: 'Marcus Allen',
    picture:"img/Marcus-Allen-Profile-Picture.webp"
    },
    
     {
    quote: '\"Pressure makes diamonds.\"', 
    person: 'Keren Elazari',
    picture:"img/Keren-Elazari-Profile-Picture.webp"
    },
    
    
    
]



button.addEventListener('click', function (){
    let random= Math.floor(Math.random()*QUOTES.length)
    
    quote.innerText= QUOTES[random].quote
    person.innerText = QUOTES[random].person
    picture.src = QUOTES[random].picture
    
})


