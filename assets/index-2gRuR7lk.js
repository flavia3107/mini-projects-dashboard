(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const MOVIE_QUOTES=[{quote:"Frankly, my dear, I don't give a damn.",actor:"Clark Gable",character:"Rhett Butler",quoteFrom:"Gone with the Wind",year:1939},{quote:"I'm gonna make him an offer he can't refuse.",actor:"Marlon Brando",character:"Vito Corleone",quoteFrom:"The Godfather",year:1972},{quote:"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",actor:"Marlon Brando",character:"Terry Malloy",quoteFrom:"On the Waterfront",year:1954},{quote:"Toto, I've a feeling we're not in Kansas anymore.",actor:"Judy Garland",character:"Dorothy Gale",quoteFrom:"The Wizard of Oz",year:1939},{quote:"Here's looking at you, kid.",actor:"Humphrey Bogart",character:"Rick Blaine",quoteFrom:"Casablanca",year:1942},{quote:"Go ahead, make my day.",actor:"Clint Eastwood",character:"Harry Callahan",quoteFrom:"Sudden Impact",year:1983},{quote:"All right, Mr. DeMille, I'm ready for my close-up.",actor:"Gloria Swanson",character:"Norma Desmond",quoteFrom:"Sunset Boulevard",year:1950},{quote:"May the Force be with you.",actor:"Harrison Ford",character:"Han Solo",quoteFrom:"Star Wars",year:1977},{quote:"Fasten your seatbelts. It's going to be a bumpy night.",actor:"Bette Davis",character:"Margo Channing",quoteFrom:"All About Eve",year:1950},{quote:"You talking to me?",actor:"Robert De Niro",character:"Travis Bickle",quoteFrom:"Taxi Driver",year:1976},{quote:"What we've got here is failure to communicate.",actor:"Strother Martin",character:"Captain",quoteFrom:"Cool Hand Luke",year:1967},{quote:"I love the smell of napalm in the morning.",actor:"Robert Duvall",character:"Lieutenant Colonel Bill Kilgore",quoteFrom:"Apocalypse Now",year:1979},{quote:"Love means never having to say you're sorry.",actor:"Ali MacGraw",character:"Jennifer Cavalleri",quoteFrom:"Love Story",year:1970},{quote:"The stuff that dreams are made of.",actor:"Humphrey Bogart",character:"Sam Spade",quoteFrom:"The Maltese Falcon",year:1941},{quote:"E.T. phone home.",actor:"Pat Welsh",character:"E.T.",quoteFrom:"E.T. the Extra-Terrestrial",year:1982},{quote:"They call me Mister Tibbs!",actor:"Sidney Poitier",character:"Virgil Tibbs",quoteFrom:"In the Heat of the Night",year:1967},{quote:"Rosebud.",actor:"Orson Welles",character:"Charles Foster Kane",quoteFrom:"Citizen Kane",year:1941},{quote:"Made it, Ma! Top of the world!",actor:"James Cagney",character:"Arthur 'Cody' Jarrett",quoteFrom:"White Heat",year:1949},{quote:"I'm as mad as hell, and I'm not going to take this anymore!",actor:"Peter Finch",character:"Howard Beale",quoteFrom:"Network",year:1976},{quote:"Louis, I think this is the beginning of a beautiful friendship.",actor:"Humphrey Bogart",character:"Rick Blaine",quoteFrom:"Casablanca",year:1942},{quote:"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",actor:"Anthony Hopkins",character:"Dr. Hannibal Lecter",quoteFrom:"The Silence of the Lambs",year:1991},{quote:"Bond. James Bond.",actor:"Sean Connery",character:"James Bond",quoteFrom:"Dr. No",year:1962},{quote:"There's no place like home.",actor:"Judy Garland",character:"Dorothy Gale",quoteFrom:"The Wizard of Oz",year:1939},{quote:"I am big! It's the pictures that got small.",actor:"Gloria Swanson",character:"Norma Desmond",quoteFrom:"Sunset Boulevard",year:1950},{quote:"Show me the money!",actor:"Cuba Gooding Jr.",character:"Rod Tidwell",quoteFrom:"Jerry Maguire",year:1996},{quote:"You can't handle the truth!",actor:"Jack Nicholson",character:"Col. Nathan R. Jessep",quoteFrom:"A Few Good Men",year:1992},{quote:"Here's Johnny!",actor:"Jack Nicholson",character:"Jack Torrance",quoteFrom:"The Shining",year:1980},{quote:"I'm the king of the world!",actor:"Leonardo DiCaprio",character:"Jack Dawson",quoteFrom:"Titanic",year:1997},{quote:"You had me at 'hello.'",actor:"Renee Zellweger",character:"Dorothy Boyd",quoteFrom:"Jerry Maguire",year:1996},{quote:"To infinity and beyond!",actor:"Tim Allen",character:"Buzz Lightyear",quoteFrom:"Toy Story",year:1995},{quote:"I feel the need—the need for speed.",actor:"Tom Cruise",character:"Maverick",quoteFrom:"Top Gun",year:1986},{quote:"Nobody puts Baby in a corner.",actor:"Patrick Swayze",character:"Johnny Castle",quoteFrom:"Dirty Dancing",year:1987},{quote:"I'll be back.",actor:"Arnold Schwarzenegger",character:"The Terminator",quoteFrom:"The Terminator",year:1984},{quote:"You can't sit with us.",actor:"Rachel McAdams",character:"Regina George",quoteFrom:"Mean Girls",year:2004},{quote:"I am Iron Man.",actor:"Robert Downey Jr.",character:"Tony Stark",quoteFrom:"Iron Man",year:2008},{quote:"Why so serious?",actor:"Heath Ledger",character:"The Joker",quoteFrom:"The Dark Knight",year:2008},{quote:"Life is like a box of chocolates. You never know what you're gonna get.",actor:"Tom Hanks",character:"Forrest Gump",quoteFrom:"Forrest Gump",year:1994},{quote:"This is the start of a beautiful friendship.",actor:"Humphrey Bogart",character:"Rick Blaine",quoteFrom:"Casablanca",year:1942},{quote:"Nobody's perfect.",actor:"Jack Lemmon",character:"Joe/Josephine",quoteFrom:"Some Like It Hot",year:1959},{quote:"I see dead people.",actor:"Haley Joel Osment",character:"Cole Sear",quoteFrom:"The Sixth Sense",year:1999},{quote:"The name's Bond. James Bond.",actor:"Sean Connery",character:"James Bond",quoteFrom:"Goldfinger",year:1964},{quote:"I am Groot.",actor:"Vin Diesel",character:"Groot",quoteFrom:"Guardians of the Galaxy",year:2014},{quote:"You either die a hero or you live long enough to see yourself become the villain.",actor:"Aaron Eckhart",character:"Harvey Dent",quoteFrom:"The Dark Knight",year:2008},{quote:"I wish I knew how to quit you.",actor:"Jake Gyllenhaal",character:"Jack Twist",quoteFrom:"Brokeback Mountain",year:2005},{quote:"Just keep swimming.",actor:"Ellen DeGeneres",character:"Dory",quoteFrom:"Finding Nemo",year:2003},{quote:"There's no place like home.",actor:"Judy Garland",character:"Dorothy Gale",quoteFrom:"The Wizard of Oz",year:1939},{quote:"I am vengeance. I am the night. I am Batman.",actor:"Kevin Conroy",character:"Batman",quoteFrom:"Batman: The Animated Series",year:1990},{quote:"I love you 3000.",actor:"Robert Downey Jr.",character:"Tony Stark",quoteFrom:"Avengers: Endgame",year:2019},{quote:"I'm the king of the world!",actor:"Leonardo DiCaprio",character:"Jack Dawson",quoteFrom:"Titanic",year:1997},{quote:"You had me at 'hello'.",actor:"Renée Zellweger",character:"Dorothy Boyd",quoteFrom:"Jerry Maguire",year:1996},{quote:"If you build it, he will come.",actor:"Kevin Costner",character:"Ray Kinsella",quoteFrom:"Field of Dreams",year:1989},{quote:"To infinity and beyond!",actor:"Tim Allen",character:"Buzz Lightyear",quoteFrom:"Toy Story",year:1995},{quote:"You can't handle the truth!",actor:"Jack Nicholson",character:"Col. Nathan R. Jessep",quoteFrom:"A Few Good Men",year:1992},{quote:"Keep the change, ya filthy animal!",actor:"Daniel Stern",character:"Marv Murchins",quoteFrom:"Home Alone",year:1990},{quote:"Oh, behave!",actor:"Mike Myers",character:"Austin Powers",quoteFrom:"Austin Powers: International Man of Mystery",year:1997},{quote:"I'll be back.",actor:"Arnold Schwarzenegger",character:"The Terminator",quoteFrom:"The Terminator",year:1984},{quote:"You had me at 'hello'.",actor:"Renée Zellweger",character:"Dorothy Boyd",quoteFrom:"Jerry Maguire",year:1996},{quote:"I see dead people.",actor:"Haley Joel Osment",character:"Cole Sear",quoteFrom:"The Sixth Sense",year:1999},{quote:"The name's Bond. James Bond.",actor:"Sean Connery",character:"James Bond",quoteFrom:"Goldfinger",year:1964},{quote:"I am Groot.",actor:"Vin Diesel",character:"Groot",quoteFrom:"Guardians of the Galaxy",year:2014},{quote:"You either die a hero or you live long enough to see yourself become the villain.",actor:"Aaron Eckhart",character:"Harvey Dent",quoteFrom:"The Dark Knight",year:2008},{quote:"I wish I knew how to quit you.",actor:"Jake Gyllenhaal",character:"Jack Twist",quoteFrom:"Brokeback Mountain",year:2005},{quote:"Just keep swimming.",actor:"Ellen DeGeneres",character:"Dory",quoteFrom:"Finding Nemo",year:2003},{quote:"There's no place like home.",actor:"Judy Garland",character:"Dorothy Gale",quoteFrom:"The Wizard of Oz",year:1939},{quote:"I am vengeance. I am the night. I am Batman.",actor:"Kevin Conroy",character:"Batman",quoteFrom:"Batman: The Animated Series",year:1990},{quote:"I love you 3000.",actor:"Robert Downey Jr.",character:"Tony Stark",quoteFrom:"Avengers: Endgame",year:2019},{quote:"I'm the king of the world!",actor:"Leonardo DiCaprio",character:"Jack Dawson",quoteFrom:"Titanic",year:1997},{quote:"You had me at 'hello'.",actor:"Renée Zellweger",character:"Dorothy Boyd",quoteFrom:"Jerry Maguire",year:1996},{quote:"If you build it, he will come.",actor:"Kevin Costner",character:"Ray Kinsella",quoteFrom:"Field of Dreams",year:1989},{quote:"To infinity and beyond!",actor:"Tim Allen",character:"Buzz Lightyear",quoteFrom:"Toy Story",year:1995},{quote:"You can't handle the truth!",actor:"Jack Nicholson",character:"Col. Nathan R. Jessep",quoteFrom:"A Few Good Men",year:1992},{quote:"Keep the change, ya filthy animal!",actor:"Daniel Stern",character:"Marv Murchins",quoteFrom:"Home Alone",year:1990},{quote:"Oh, behave!",actor:"Mike Myers",character:"Austin Powers",quoteFrom:"Austin Powers: International Man of Mystery",year:1997},{quote:"Say hello to my little friend!",actor:"Al Pacino",character:"Tony Montana",quoteFrom:"Scarface",year:1983},{quote:"I am your father.",actor:"James Earl Jones",character:"Darth Vader",quoteFrom:"Star Wars: The Empire Strikes Back",year:1980},{quote:"I'm gonna make him an offer he can't refuse.",actor:"Marlon Brando",character:"Don Vito Corleone",quoteFrom:"The Godfather",year:1972},{quote:"There's no place like home.",actor:"Judy Garland",character:"Dorothy Gale",quoteFrom:"The Wizard of Oz",year:1939},{quote:"I feel the need—the need for speed.",actor:"Tom Cruise",character:"Maverick",quoteFrom:"Top Gun",year:1986},{quote:"I'm the king of the world!",actor:"Leonardo DiCaprio",character:"Jack Dawson",quoteFrom:"Titanic",year:1997},{quote:"You can't sit with us.",actor:"Rachel McAdams",character:"Regina George",quoteFrom:"Mean Girls",year:2004},{quote:"I'll be back.",actor:"Arnold Schwarzenegger",character:"The Terminator",quoteFrom:"The Terminator",year:1984},{quote:"I see dead people.",actor:"Haley Joel Osment",character:"Cole Sear",quoteFrom:"The Sixth Sense",year:1999},{quote:"Why so serious?",actor:"Heath Ledger",character:"The Joker",quoteFrom:"The Dark Knight",year:2008},{quote:"I'm going to make him an offer he can't refuse.",actor:"Marlon Brando",character:"Don Vito Corleone",quoteFrom:"The Godfather",year:1972},{quote:"May the Force be with you.",actor:"Harrison Ford",character:"Han Solo",quoteFrom:"Star Wars",year:1977},{quote:"Life is like a box of chocolates.",actor:"Tom Hanks",character:"Forrest Gump",quoteFrom:"Forrest Gump",year:1994},{quote:"Nobody puts Baby in a corner.",actor:"Patrick Swayze",character:"Johnny Castle",quoteFrom:"Dirty Dancing",year:1987},{quote:"You can't handle the truth!",actor:"Jack Nicholson",character:"Colonel Jessup",quoteFrom:"A Few Good Men",year:1992},{quote:"There's no place like home.",actor:"Judy Garland",character:"Dorothy Gale",quoteFrom:"The Wizard of Oz",year:1939},{quote:"Keep the change, ya filthy animal!",actor:"Daniel Stern",character:"Marv Murchins",quoteFrom:"Home Alone",year:1990},{quote:"It's alive! It's alive!",actor:"Colin Clive",character:"Dr. Henry Frankenstein",quoteFrom:"Frankenstein",year:1931},{quote:"Here's looking at you, kid.",actor:"Humphrey Bogart",character:"Rick Blaine",quoteFrom:"Casablanca",year:1942},{quote:"I'm the king of the world!",actor:"Leonardo DiCaprio",character:"Jack Dawson",quoteFrom:"Titanic",year:1997},{quote:"I feel the need—the need for speed.",actor:"Tom Cruise",character:"Maverick",quoteFrom:"Top Gun",year:1986},{quote:"I'm Batman.",actor:"Michael Keaton",character:"Bruce Wayne",quoteFrom:"Batman",year:1989},{quote:"I wish I knew how to quit you.",actor:"Jake Gyllenhaal",character:"Jack Twist",quoteFrom:"Brokeback Mountain",year:2005},{quote:"This is the start of a beautiful friendship.",actor:"Humphrey Bogart",character:"Rick Blaine",quoteFrom:"Casablanca",year:1942},{quote:"I am Groot.",actor:"Vin Diesel",character:"Groot",quoteFrom:"Guardians of the Galaxy",year:2014},{quote:"I'll be back.",actor:"Arnold Schwarzenegger",character:"The Terminator",quoteFrom:"The Terminator",year:1984},{quote:"You had me at 'hello'.",actor:"Renée Zellweger",character:"Dorothy Boyd",quoteFrom:"Jerry Maguire",year:1996},{quote:"I coulda been a contender.",actor:"Marlon Brando",character:"Terry Malloy",quoteFrom:"On the Waterfront",year:1954}],FUN_fACTS=["Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!","Bananas are berries, but strawberries aren’t.","Octopuses have three hearts and blue blood.","A single strand of spaghetti is called a 'spaghetto'.","There’s enough DNA in the human body to stretch from the sun to Pluto and back — 17 times.","Cows have best friends and get stressed when separated.","Scotland’s national animal is the unicorn.","Sloths can hold their breath longer than dolphins.","Wombat poop is cube-shaped.","An apple, potato, and onion taste the same when you eat them with your nose plugged.","A day on Venus is longer than a year on Venus.","Sharks existed before trees.","Butterflies can taste with their feet.","The Eiffel Tower can grow more than 6 inches in summer due to heat.","There's a species of jellyfish that is biologically immortal.","Your nose can remember 50,000 different scents.","Avocados are poisonous to birds.","Octopuses taste with their arms.","Humans share 60% of their DNA with bananas.","A group of flamingos is called a 'flamboyance'.","Snails can sleep for up to 3 years.","The dot over the letters ‘i’ and ‘j’ is called a 'tittle'.","A bolt of lightning is five times hotter than the sun’s surface.","Koalas have fingerprints that are nearly indistinguishable from humans.","The shortest war in history lasted 38 minutes.","Water can boil and freeze at the same time (triple point).","The smell of freshly-cut grass is actually a plant distress call.","Pineapples take two years to grow.","Banging your head against a wall for one hour burns 150 calories.","Octopuses have nine brains.","There's a basketball court on the top floor of the U.S. Supreme Court building.","Cows can walk up stairs, but not down.","A group of porcupines is called a 'prickle'.","The inventor of the microwave only received $2 for his discovery.","You can't hum while holding your nose closed.","The average person walks the equivalent of five times around the world in their lifetime.","A jiffy is an actual unit of time (about 1/100th of a second).","Goats have rectangular pupils.","The word ‘bookkeeper’ has three consecutive double letters.","A shrimp's heart is in its head.","The moon has moonquakes.","A baby puffin is called a ‘puffling’.","A group of crows is called a 'murder'.","Oxford University is older than the Aztec Empire.","Sea otters hold hands while sleeping to keep from drifting apart.","The longest hiccuping spree lasted 68 years.","Some turtles can breathe through their butts.","Elephants can’t jump.","The inventor of Pringles is buried in a Pringles can.","You can hear rhubarb growing.","The world’s largest snowflake was 15 inches wide.","The heart of a blue whale is the size of a small car.","Bubble wrap was originally invented to be wallpaper.","Bananas glow blue under black lights.","Humans are bioluminescent — we glow, but it’s invisible to the naked eye.","A crocodile can't stick its tongue out.","Tigers have striped skin, not just striped fur.","The total weight of all ants on Earth once equaled the weight of all humans.","Tomato ketchup was once sold as medicine.","The voice of Mickey Mouse and the voice of Minnie Mouse got married in real life.","Peanuts aren’t technically nuts — they’re legumes.","The inventor of the frisbee was turned into a frisbee after he died.","Cats can’t taste sweetness.","Starfish don’t have brains.","Bamboo can grow up to 35 inches in a single day.","Your brain uses the same amount of power as a 10-watt lightbulb.","Giraffes only sleep about 30 minutes a day.","You can’t lick your own elbow — it’s physically very difficult.","A snail can have over 14,000 teeth.","The average person has about 100,000 hairs on their head.","Coca-Cola would be green without coloring.","There are more fake flamingos in the world than real ones.","Birds don’t urinate.","The inventor of the Rubik’s Cube took a month to solve his own puzzle.","Lobsters taste with their legs.","The fingerprints of koalas are so close to humans, they can taint crime scenes.","Venus is the only planet that spins clockwise.","Owls can’t move their eyeballs.","There are more stars in the universe than grains of sand on all the Earth’s beaches.","Pigeons can do math at the same level as monkeys.","A small child could swim through the veins of a blue whale.","The 'M’s' in M&Ms stand for ‘Mars’ and ‘Murrie’.","Walt Disney was afraid of mice.","The Eiffel Tower leans away from the sun.","It rains diamonds on Jupiter and Saturn.","Slugs have four noses.","A cloud can weigh over a million pounds.","The inventor of Velcro got the idea from burrs stuck to his dog.","Sharks are immune to all known diseases.","Banging your head against a wall is illegal in some countries — just kidding, but don’t try it.","In Switzerland, it's illegal to own just one guinea pig — they get lonely.","There’s a species of spider that looks like the Sorting Hat from Harry Potter.","Cows moo with regional accents.","You can’t hum while plugging your nose and ears — go on, try it!","The Eiffel Tower was originally intended for Barcelona.","A sneeze travels about 100 miles per hour.","Most wasabi in restaurants isn’t real wasabi — it’s dyed horseradish.","Before erasers, bread was used to remove pencil marks.","Wearing headphones for an hour could increase the bacteria in your ear by 700 times.","Rabbits can’t vomit.","The human stomach gets a new lining every 3–4 days to prevent self-digestion."],QUOTES=["Be yourself; everyone else is already taken. - Oscar Wilde","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein","So many books, so little time. - Frank Zappa","A room without books is like a body without a soul. - Marcus Tullius Cicero","You only live once, but if you do it right, once is enough. - Mae West","Be the change that you wish to see in the world. - Mahatma Gandhi","In three words I can sum up everything I've learned about life: it goes on. - Robert Frost","If you tell the truth, you don't have to remember anything. - Mark Twain","To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde","Without music, life would be a mistake. - Friedrich Nietzsche","We accept the love we think we deserve. - Stephen Chbosky","The only way to do great work is to love what you do. - Steve Jobs","Life is what happens to us while we are making other plans. - Allen Saunders","I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison","Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill","It does not matter how slowly you go as long as you do not stop. - Confucius","Everything you can imagine is real. - Pablo Picasso","Do one thing every day that scares you. - Eleanor Roosevelt","Happiness is not something ready made. It comes from your own actions. - Dalai Lama","Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson","The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt","In the middle of every difficulty lies opportunity. - Albert Einstein","It always seems impossible until it’s done. - Nelson Mandela","The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt","Don't watch the clock; do what it does. Keep going. - Sam Levenson","Believe you can and you're halfway there. - Theodore Roosevelt","You miss 100% of the shots you don't take. - Wayne Gretzky","The best way to predict the future is to invent it. - Alan Kay","Act as if what you do makes a difference. It does. - William James","What we think, we become. - Buddha","Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau","Don’t count the days, make the days count. - Muhammad Ali","Life isn’t about getting and having, it’s about giving and being. - Kevin Kruse","You must be the change you wish to see in the world. - Mahatma Gandhi","What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson","Go confidently in the direction of your dreams! Live the life you’ve imagined. - Henry David Thoreau","I think, therefore I am. - René Descartes","Turn your wounds into wisdom. - Oprah Winfrey","The purpose of our lives is to be happy. - Dalai Lama","Imagination is more important than knowledge. - Albert Einstein","The journey of a thousand miles begins with one step. - Lao Tzu","The mind is everything. What you think you become. - Buddha","An unexamined life is not worth living. - Socrates","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson","Not all those who wander are lost. - J.R.R. Tolkien","Dream big and dare to fail. - Norman Vaughan","A person who never made a mistake never tried anything new. - Albert Einstein","He who opens a school door, closes a prison. - Victor Hugo","The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela","It is during our darkest moments that we must focus to see the light. - Aristotle","Do what you can, with what you have, where you are. - Theodore Roosevelt","To handle yourself, use your head; to handle others, use your heart. - Eleanor Roosevelt","Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman","Try to be a rainbow in someone’s cloud. - Maya Angelou","Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn","You define your own life. Don’t let other people write your script. - Oprah Winfrey","When you have a dream, you’ve got to grab it and never let go. - Carol Burnett","You do not find the happy life. You make it. - Camilla Eyring Kimball","Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seuss","It isn’t where you came from. It’s where you’re going that counts. - Ella Fitzgerald","Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis","All our dreams can come true, if we have the courage to pursue them. - Walt Disney","Doubt kills more dreams than failure ever will. - Suzy Kassem","In a gentle way, you can shake the world. - Mahatma Gandhi","Work hard in silence, let success make the noise. - Frank Ocean","Don’t be afraid to give up the good to go for the great. - John D. Rockefeller","The only impossible journey is the one you never begin. - Tony Robbins","I never dream of success. I work for it. - Estee Lauder","What you do today can improve all your tomorrows. - Ralph Marston","Stay hungry, stay foolish. - Steve Jobs","Be so good they can’t ignore you. - Steve Martin","Life is short, and it’s up to you to make it sweet. - Sarah Louise Delany","You can’t go back and change the beginning, but you can start where you are and change the ending. - C.S. Lewis","The best revenge is massive success. - Frank Sinatra","Fall seven times, stand up eight. - Japanese Proverb","A journey is best measured in friends, not in miles. - Tim Cahill","Make each day your masterpiece. - John Wooden","What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar","Don’t wait. The time will never be just right. - Napoleon Hill","Don’t cry because it’s over, smile because it happened. - Dr. Seuss","Life is either a daring adventure or nothing at all. - Helen Keller","The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.","There is no substitute for hard work. - Thomas Edison","Success is how high you bounce when you hit bottom. - George S. Patton","Don’t limit your challenges. Challenge your limits. - Unknown","Everything you’ve ever wanted is on the other side of fear. - George Addair","If opportunity doesn’t knock, build a door. - Milton Berle","When one door closes, another opens. - Alexander Graham Bell","The secret of getting ahead is getting started. - Mark Twain","Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs","Start where you are. Use what you have. Do what you can. - Arthur Ashe","Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett","Opportunities don't happen. You create them. - Chris Grosser","Only I can change my life. No one can do it for me. - Carol Burnett","Do not wait for leaders; do it alone, person to person. - Mother Teresa","The only thing standing between you and your goal is the story you keep telling yourself. - Jordan Belfort","Limit your 'always' and your 'nevers'. - Amy Poehler","What we fear of doing most is usually what we most need to do. - Ralph Waldo Emerson","Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’ - Mary Anne Radmacher","Your passion is waiting for your courage to catch up. - Isabelle Lafleche"],quoteButton=document.getElementById("quote-button"),quoteText=document.getElementById("quote-text"),quoteAuthor=document.getElementById("quote-author");quoteButton.addEventListener("click",randomQuoteCallback);const todoList=document.getElementById("todo-list");fetch("https://jsonplaceholder.typicode.com/todos").then(t=>t.json()).then(t=>{todoList.innerHTML=t.sort(()=>Math.random()-.5).slice(0,5).map(e=>`<li class="flex-row"><span>${e.completed?"🟩":"⬜"}</span> <span>${e.title}</span></li>`).join("")}).catch(t=>{todoList.innerHTML="<li>Failed to load todo list.</li>"});const bmiForm=document.getElementById("bmi-form"),bmiResult=document.getElementById("bmi-result");bmiForm.addEventListener("submit",t=>{t.preventDefault();const e=parseFloat(document.getElementById("bmi-weight").value),o=parseFloat(document.getElementById("bmi-height").value);if(e&&o){const r=e/(o*o);bmiResult.textContent=`Your BMI is ${r.toFixed(2)}`,updateChart(r)}else bmiResult.textContent="Please enter valid values!"});const catButton=document.getElementById("cat-button"),petImage=document.getElementById("pet-image");catButton.addEventListener("click",()=>{fetch("https://api.thecatapi.com/v1/images/search").then(t=>t.json()).then(t=>{petImage.src=t[0].url}).catch(t=>{petImage.src="",alert("Failed to load cat image!")})});const dogButton=document.getElementById("dog-button");dogButton.addEventListener("click",dogCallback);const jokeButton=document.getElementById("joke-button"),jokeText=document.getElementById("joke-text");jokeButton.addEventListener("click",randomJokeCallback);const nasaImage=document.getElementById("nasa-image"),nasaTitle=document.getElementById("nasa-title"),nasaDescription=document.getElementById("nasa-description");function getNasaImage(){const t=e=>{nasaImage.src=e&&e.media_type==="image"?e.url:"/assets/images/earth.webp",nasaTitle.textContent=e.title||"Failed to load",nasaDescription.textContent=e.explanation};fetch("https://api.nasa.gov/planetary/apod?api_key=roHlPe9YRlvmfLMQgOpMAiikvZGiWHNT1QVrtNvm").then(e=>e.ok?e.json():null).then(e=>t(e)).catch(()=>{nasaTitle.textContent="Failed to load NASA image."})}const factButton=document.getElementById("fact-button"),factText=document.getElementById("fact-text");factButton.addEventListener("click",randomFactCallback);const movieQuoteButton=document.getElementById("movie-quote-button"),movieQuoteText=document.getElementById("movie-quote-text"),movieActor=document.getElementById("actor"),movieCharacter=document.getElementById("character"),movieMovieTitle=document.getElementById("movie-title"),movieReleaseYear=document.getElementById("release-year");movieQuoteButton.addEventListener("click",movieQuoteCallback);function updateAnalogClock(){const t=new Date,e=t.getSeconds(),o=t.getMinutes(),r=t.getHours(),a=e*6,n=o*6+e*.1,i=r%12/12*360+o*.5;document.getElementById("second-hand").style.transform=`translateX(-50%) rotate(${a}deg)`,document.getElementById("minute-hand").style.transform=`translateX(-50%) rotate(${n}deg)`,document.getElementById("hour-hand").style.transform=`translateX(-50%) rotate(${i}deg)`}setInterval(updateAnalogClock,1e3);updateAnalogClock();let display=document.getElementById("calc-display"),buttons=document.querySelectorAll(".calculator .btn");buttons.forEach(button=>{button.addEventListener("click",()=>{const value=button.dataset.value;if(value&&(display.value+=value),button.id==="clear"&&(display.value=""),button.id==="equals")try{display.value=eval(display.value)}catch{display.value="Error"}})});function dogCallback(){fetch("https://dog.ceo/api/breeds/image/random").then(t=>t.json()).then(t=>{petImage.src=t.message}).catch(t=>{petImage.src="",alert("Failed to load dog image!")})}function movieQuoteCallback(){const t=e=>{const o=e||MOVIE_QUOTES[Math.floor(Math.random()*MOVIE_QUOTES.length)];movieQuoteText.textContent=`"${o.quote}"`,movieActor.textContent=`(${o.actor})`,movieCharacter.textContent=o.character,movieMovieTitle.textContent=o.quoteFrom,movieReleaseYear.textContent=`(${o.year})`};fetch("https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote",{headers:{"X-RapidAPI-Key":"0791cc942dmshab668fb40ddf498p136ba1jsn7146e86109ac","X-RapidAPI-Host":"movie-and-tv-shows-quotes.p.rapidapi.com"}}).then(e=>e.ok?e.json():null).then(e=>t(e)).catch(()=>t())}function randomFactCallback(){const t=e=>{const o=e.text||FUN_fACTS[Math.floor(Math.random()*FUN_fACTS.length)];factText.textContent=`${o.split(" - ")[0]}`};fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en").then(e=>e.json()).then(e=>t(e)).catch(()=>t())}function randomJokeCallback(){fetch("https://v2.jokeapi.dev/joke/Any").then(t=>t.json()).then(t=>{jokeText.textContent=t.type==="single"?t.joke:`${t.setup} ... ${t.delivery}`}).catch(()=>{jokeText.textContent="Failed to load a joke!"})}function randomQuoteCallback(){const t=e=>{const o=e||QUOTES[Math.floor(Math.random()*QUOTES.length)];quoteText.textContent=`${o.split(" - ")[0]}`,quoteAuthor.textContent=`~${o.split(" - ")[1]}`};fetch("https://quotes85.p.rapidapi.com/getrandomquote",{headers:{"X-RapidAPI-Key":"0791cc942dmshab668fb40ddf498p136ba1jsn7146e86109ac","X-RapidAPI-Host":"quotes85.p.rapidapi.com"}}).then(e=>e.ok?e.text():null).then(e=>t(e)).catch(e=>t(null))}function updateChart(t){let e;t<18.5?e="Underweight":t>=18.5&&t<24.9?e="Normal weight":t>=25&&t<29.9?e="Overweight":e="Obesity",Highcharts.chart("container",{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:""},exporting:{enabled:!1},tooltip:{useHTML:!0,formatter:function(){return`<b>${this.point.name}</b><br>BMI Range: <b>${this.point.range}</b>`}},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{dataLabels:{enabled:!1},startAngle:-90,endAngle:90,center:["50%","75%"],size:"110%"}},series:[{type:"pie",name:"BMI Results",innerSize:"50%",data:[{name:"Underweight",y:25,range:"< 18.5",color:"#ADD8E6"},{name:"Normal weight",y:25,range:"18.5 – 24.9",color:"#32CD32"},{name:"Overweight",y:25,range:"25.0 – 29.9",color:"#FFD700"},{name:"Obesity",y:25,range:"30.0 and above",color:"#FF6347"}],colors:["#ADD8E6","#32CD32","#FFD700","#FF6347"]}]},function(o){let r;switch(e){case"Underweight":r=0;break;case"Normal weight":r=1;break;case"Overweight":r=2;break;case"Obesity":r=3;break}o.series[0].data[r].select(!0)})}dogCallback();movieQuoteCallback();randomFactCallback();randomJokeCallback();randomQuoteCallback();getNasaImage();
