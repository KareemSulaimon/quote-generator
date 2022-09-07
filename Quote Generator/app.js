
const btn  = document.querySelector('#new-quote')
const quotess  = document.querySelector('.quote')
const person = document.querySelector('.person')

const quotes = [
    {quote: `"The best way to find yourself is to
     lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
    }, {
        quote: `"If you want to live a happy life,
         tie to a goal, not to people or things"`,
        person: `Albert Einstein`
    }, {
        quote:`"At his best, man is the noblest of all animals, separated 
        from law and justice he is the worst"`,
        person: `Aristotle`
    },
    {
        quote: `"You only live once, but if you do it right, once is enough" `,
        person: `Mae West`
    },
     {
         quote: `"Many of life's failures are people who did not realize
         how close they were to success when they gave up." `,
        person: `Thomas A. Edison`
    },
      {
        quote: `"Life is what happens when you're busy making other plans." `,
        person: ` John Lennon`
    },
     {
        quote: `"Never let the fear of striking out keep you from playing the game" `,
        person: `Babe Ruth`
    },
     {
        quote: `"Money and success don't change people; they merely amplify what is already there" `,
        person: ` Will Smith`
    },
     {
         quote: `"Your time is limited, so don't waste it living someone else's life. 
        Don't be trapped by dogma-which is living with the results of other people's thinking" `,
        person: `Steve Jobs`
    },
     {
        quote: `"Not how long, but how well you have lived is the main thing." `,
        person: `Seneca`
    },
     {
        quote: `"If life were predictable it would cease to be life, and be without flavor" `,
        person: `Eleanor Rooseveltt`
    },
     {
        quote: `"The whole secret of a successful life is to find out what is one's destiny to do, and then do it" `,
        person: `Henry Ford`
    },
     {
        quote: `"In order to write about life first you must live it." `,
        person: `Ernest Hemingway`
    },
     {
        quote: `"The big lesson in life, baby, is never be scared of anyone or anything." `,
        person: `Frank Sinatra`
    },
     {
         quote: `"Sing like no one's listening, love like you've never been hurt, dance like nobody's watching,
         and live like it's heaven on earth" `,
        person: `Attributed to various sources`
    },
     {
         quote: `"Curiosity about life in all of its aspects,
         I think, is still the secret of great creative people" `,
        person: ` Leo Burnett`
    },
     {
        quote: `"Life is not a problem to be solved, but a reality to be experienced." `,
        person: `Soren Kierkegaard`
    },
     {
        quote: `"The unexamined life is not worth living" `,
        person: `Socrates`
    },
     {
        quote: `"Turn your wounds into wisdom" `,
        person: `Oprah Winfrey`
    },
     {
        quote: `"The way I see it, if you want the rainbow, you gotta put up with the rain." `,
        person: `Dolly Parton`
    },
     {
         quote: `"Do all the good you can, for all the people you can,
         in all the ways you can, as long as you can" `,
        person: `Hillary Clinton`
    },
     {
        quote: `"Don't settle for what life gives you; make life better and build something" `,
        person: `Ashton Kutcher`
    },
     {
        quote: `"Everything negative-pressure, challenges-is all an opportunity for me to rise" `,
        person: `Kobe Bryant`
    },
     {
        quote: `"I like criticism. It makes you strong" `,
        person: ` LeBron James`
    },
     {
        quote: `"You never really learn much from hearing yourself speak" `,
        person: `George Clooney`
    },
     {
         quote: `"Life imposes things on you that you can't control, 
        but you still have the choice of how you're going to live through this" `,
        person: `Celine Dion`
    },
     {
         quote: `"Life is never easy. There is work to be done and obligations to be met-obligations to truth,
         to justice, and to liberty" `,
        person: ` John F. Kennedy`
    },
     {
        quote: `"Live for each second without hesitation" `,
        person: `Elton John`
    },
     {
         quote: `"Your work is going to fill a large part of your life, 
         and the only way to be truly satisfied is to do what you believe is great work. 
        And the only way to do great work is to love what you do. If you haven't found it yet, keep looking.
        Don't settle. As with all matters of the heart, you'll know when you find it" `,
        person: `Steve Jobs`
    },
     {
         quote: `"My mama always said, life is like a box of chocolates. 
        You never know what you're gonna get." `,
        person: `Forrest Gump`
    },
     {
         quote: `"Watch your thoughts; they become words. Watch your words;
          they become actions. Watch your actions; they become habits.
         Watch your habits; they become character. Watch your character; it becomes your destiny" `,
        person: `Lao-Tze`
    },
     {
         quote: `"When we do the best we can, we never know what miracle
         is wrought in our life or the life of another." `,
        person: `Helen Keller`
    },
     {
        quote: `"The healthiest response to life is joy." `,
        person: `Deepak Chopra`
    },
     {
        quote: `"Life is like a coin. You can spend it any way you wish, but you only spend it once." `,
        person: `Lillian Dickson`
    },
     {
         quote: `"The best portion of a good man's life is his little nameless, 
        unencumbered acts of kindness and of love" `,
        person: `Wordsworth`
    },
     {
         quote: `"In three words I can sum up everything I've learned about life:
         It goes on" `,
        person: ` Robert Frost`
    },
     {
        quote: `"Life is ten percent what happens to you and ninety percent how you respond to it" `,
        person: `Charles Swindoll`
    },
     {
        quote: `"keep calm and carry on." `,
        person: ` Winston Churchill`
    },
     {
        quote: `"Maybe that's what life is… a wink of the eye and winking stars" `,
        person: `Jack Kerouac`
    },
     {
        quote: `"Life is a flower of which love is the honey" `,
        person: `Victor Hugo`
    },
     {
        quote: `"Life would be tragic if it weren't funny." `,
        person: `Stephen Hawking`
    },
     {
        quote: `"Live in the sunshine, swim the sea, drink the wild air" `,
        person: `Ralph Waldo Emerson`
    },
     {
         quote: `"I've missed more than 9000 shots in my career. I've lost almost 300 games.
          26 times I've been trusted to take the game winning shot and missed.
         I've failed over and over and over again in my life. And that is why I succeed" `,
        person: `Michael Jordan`
    },
     {
        quote: `"Every strike brings me closer to the next home run" `,
        person: `Babe Ruth`
    },
     {
         quote: `"When I was 5 years old, my mother always told me that happiness 
        was the key to life.When I went to school, they asked me what I
    wanted to be when I grew up.I wrote down "happy". They told me I didn't understand the assignment, and I told them they didn't understand life" `,
        person: `John Lennon`
    },
     {
        quote: `"Too many of us are not living our dreams because we are living our fears" `,
        person: `Les Brown`
    },
     {
        quote: `"The longer I live, the more beautiful life becomes" `,
        person: `Frank Lloyd Wrightt`
    },
     {
         quote: `"Don't limit yourself. Many people limit themselves to what they think they can do. 
         You can go as far as your mind lets you. What you believe, remember, you can achieve." `,
        person: `Mary Kay Ash `
    },
     {
         quote: `"If you can do what you do best and be happy,
         you're further along in life than most people" `,
        person: `Leonardo DiCaprio`
    }

]



btn.addEventListener("click", function changeQuote() {
    let quoteNum = Math.floor(Math.random() * quotes.length) 
 quotess.textContent = quotes[quoteNum].quote
 person.textContent = quotes[quoteNum].person
    }
)  
 