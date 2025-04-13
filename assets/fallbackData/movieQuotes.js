const MOVIE_QUOTES = [
	{
		"quote": "Frankly, my dear, I don't give a damn.",
		"actor": "Clark Gable",
		"character": "Rhett Butler",
		"quoteFrom": "Gone with the Wind",
		"year": 1939
	},
	{
		"quote": "I'm gonna make him an offer he can't refuse.",
		"actor": "Marlon Brando",
		"character": "Vito Corleone",
		"quoteFrom": "The Godfather",
		"year": 1972
	},
	{
		"quote": "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
		"actor": "Marlon Brando",
		"character": "Terry Malloy",
		"quoteFrom": "On the Waterfront",
		"year": 1954
	},
	{
		"quote": "Toto, I've a feeling we're not in Kansas anymore.",
		"actor": "Judy Garland",
		"character": "Dorothy Gale",
		"quoteFrom": "The Wizard of Oz",
		"year": 1939
	},
	{
		"quote": "Here's looking at you, kid.",
		"actor": "Humphrey Bogart",
		"character": "Rick Blaine",
		"quoteFrom": "Casablanca",
		"year": 1942
	},
	{
		"quote": "Go ahead, make my day.",
		"actor": "Clint Eastwood",
		"character": "Harry Callahan",
		"quoteFrom": "Sudden Impact",
		"year": 1983
	},
	{
		"quote": "All right, Mr. DeMille, I'm ready for my close-up.",
		"actor": "Gloria Swanson",
		"character": "Norma Desmond",
		"quoteFrom": "Sunset Boulevard",
		"year": 1950
	},
	{
		"quote": "May the Force be with you.",
		"actor": "Harrison Ford",
		"character": "Han Solo",
		"quoteFrom": "Star Wars",
		"year": 1977
	},
	{
		"quote": "Fasten your seatbelts. It's going to be a bumpy night.",
		"actor": "Bette Davis",
		"character": "Margo Channing",
		"quoteFrom": "All About Eve",
		"year": 1950
	},
	{
		"quote": "You talking to me?",
		"actor": "Robert De Niro",
		"character": "Travis Bickle",
		"quoteFrom": "Taxi Driver",
		"year": 1976
	},
	{
		"quote": "What we've got here is failure to communicate.",
		"actor": "Strother Martin",
		"character": "Captain",
		"quoteFrom": "Cool Hand Luke",
		"year": 1967
	},
	{
		"quote": "I love the smell of napalm in the morning.",
		"actor": "Robert Duvall",
		"character": "Lieutenant Colonel Bill Kilgore",
		"quoteFrom": "Apocalypse Now",
		"year": 1979
	},
	{
		"quote": "Love means never having to say you're sorry.",
		"actor": "Ali MacGraw",
		"character": "Jennifer Cavalleri",
		"quoteFrom": "Love Story",
		"year": 1970
	},
	{
		"quote": "The stuff that dreams are made of.",
		"actor": "Humphrey Bogart",
		"character": "Sam Spade",
		"quoteFrom": "The Maltese Falcon",
		"year": 1941
	},
	{
		"quote": "E.T. phone home.",
		"actor": "Pat Welsh",
		"character": "E.T.",
		"quoteFrom": "E.T. the Extra-Terrestrial",
		"year": 1982
	},
	{
		"quote": "They call me Mister Tibbs!",
		"actor": "Sidney Poitier",
		"character": "Virgil Tibbs",
		"quoteFrom": "In the Heat of the Night",
		"year": 1967
	},
	{
		"quote": "Rosebud.",
		"actor": "Orson Welles",
		"character": "Charles Foster Kane",
		"quoteFrom": "Citizen Kane",
		"year": 1941
	},
	{
		"quote": "Made it, Ma! Top of the world!",
		"actor": "James Cagney",
		"character": "Arthur 'Cody' Jarrett",
		"quoteFrom": "White Heat",
		"year": 1949
	},
	{
		"quote": "I'm as mad as hell, and I'm not going to take this anymore!",
		"actor": "Peter Finch",
		"character": "Howard Beale",
		"quoteFrom": "Network",
		"year": 1976
	},
	{
		"quote": "Louis, I think this is the beginning of a beautiful friendship.",
		"actor": "Humphrey Bogart",
		"character": "Rick Blaine",
		"quoteFrom": "Casablanca",
		"year": 1942
	},
	{
		"quote": "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
		"actor": "Anthony Hopkins",
		"character": "Dr. Hannibal Lecter",
		"quoteFrom": "The Silence of the Lambs",
		"year": 1991
	},
	{
		"quote": "Bond. James Bond.",
		"actor": "Sean Connery",
		"character": "James Bond",
		"quoteFrom": "Dr. No",
		"year": 1962
	},
	{
		"quote": "There's no place like home.",
		"actor": "Judy Garland",
		"character": "Dorothy Gale",
		"quoteFrom": "The Wizard of Oz",
		"year": 1939
	},
	{
		"quote": "I am big! It's the pictures that got small.",
		"actor": "Gloria Swanson",
		"character": "Norma Desmond",
		"quoteFrom": "Sunset Boulevard",
		"year": 1950
	},
	{
		"quote": "Show me the money!",
		"actor": "Cuba Gooding Jr.",
		"character": "Rod Tidwell",
		"quoteFrom": "Jerry Maguire",
		"year": 1996
	},
	{
		"quote": "You can't handle the truth!",
		"actor": "Jack Nicholson",
		"character": "Col. Nathan R. Jessep",
		"quoteFrom": "A Few Good Men",
		"year": 1992
	}, {
		"quote": "Here's Johnny!",
		"actor": "Jack Nicholson",
		"character": "Jack Torrance",
		"quoteFrom": "The Shining",
		"year": 1980
	},
	{
		"quote": "I'm the king of the world!",
		"actor": "Leonardo DiCaprio",
		"character": "Jack Dawson",
		"quoteFrom": "Titanic",
		"year": 1997
	},
	{
		"quote": "You had me at 'hello.'",
		"actor": "Renee Zellweger",
		"character": "Dorothy Boyd",
		"quoteFrom": "Jerry Maguire",
		"year": 1996
	},
	{
		"quote": "To infinity and beyond!",
		"actor": "Tim Allen",
		"character": "Buzz Lightyear",
		"quoteFrom": "Toy Story",
		"year": 1995
	},
	{
		"quote": "I feel the need—the need for speed.",
		"actor": "Tom Cruise",
		"character": "Maverick",
		"quoteFrom": "Top Gun",
		"year": 1986
	},
	{
		"quote": "Nobody puts Baby in a corner.",
		"actor": "Patrick Swayze",
		"character": "Johnny Castle",
		"quoteFrom": "Dirty Dancing",
		"year": 1987
	},
	{
		"quote": "I'll be back.",
		"actor": "Arnold Schwarzenegger",
		"character": "The Terminator",
		"quoteFrom": "The Terminator",
		"year": 1984
	},
	{
		"quote": "You can't sit with us.",
		"actor": "Rachel McAdams",
		"character": "Regina George",
		"quoteFrom": "Mean Girls",
		"year": 2004
	},
	{
		"quote": "I am Iron Man.",
		"actor": "Robert Downey Jr.",
		"character": "Tony Stark",
		"quoteFrom": "Iron Man",
		"year": 2008
	},
	{
		"quote": "Why so serious?",
		"actor": "Heath Ledger",
		"character": "The Joker",
		"quoteFrom": "The Dark Knight",
		"year": 2008
	},
	{
		"quote": "Life is like a box of chocolates. You never know what you're gonna get.",
		"actor": "Tom Hanks",
		"character": "Forrest Gump",
		"quoteFrom": "Forrest Gump",
		"year": 1994
	},
	{
		"quote": "This is the start of a beautiful friendship.",
		"actor": "Humphrey Bogart",
		"character": "Rick Blaine",
		"quoteFrom": "Casablanca",
		"year": 1942
	},
	{
		"quote": "Nobody's perfect.",
		"actor": "Jack Lemmon",
		"character": "Joe/Josephine",
		"quoteFrom": "Some Like It Hot",
		"year": 1959
	},
	{
		"quote": "I see dead people.",
		"actor": "Haley Joel Osment",
		"character": "Cole Sear",
		"quoteFrom": "The Sixth Sense",
		"year": 1999
	},
	{
		"quote": "The name's Bond. James Bond.",
		"actor": "Sean Connery",
		"character": "James Bond",
		"quoteFrom": "Goldfinger",
		"year": 1964
	},
	{
		"quote": "I am Groot.",
		"actor": "Vin Diesel",
		"character": "Groot",
		"quoteFrom": "Guardians of the Galaxy",
		"year": 2014
	},
	{
		"quote": "You either die a hero or you live long enough to see yourself become the villain.",
		"actor": "Aaron Eckhart",
		"character": "Harvey Dent",
		"quoteFrom": "The Dark Knight",
		"year": 2008
	},
	{
		"quote": "I wish I knew how to quit you.",
		"actor": "Jake Gyllenhaal",
		"character": "Jack Twist",
		"quoteFrom": "Brokeback Mountain",
		"year": 2005
	},
	{
		"quote": "Just keep swimming.",
		"actor": "Ellen DeGeneres",
		"character": "Dory",
		"quoteFrom": "Finding Nemo",
		"year": 2003
	},
	{
		"quote": "There's no place like home.",
		"actor": "Judy Garland",
		"character": "Dorothy Gale",
		"quoteFrom": "The Wizard of Oz",
		"year": 1939
	},
	{
		"quote": "I am vengeance. I am the night. I am Batman.",
		"actor": "Kevin Conroy",
		"character": "Batman",
		"quoteFrom": "Batman: The Animated Series",
		"year": 1990
	},
	{
		"quote": "I love you 3000.",
		"actor": "Robert Downey Jr.",
		"character": "Tony Stark",
		"quoteFrom": "Avengers: Endgame",
		"year": 2019
	},
	{
		"quote": "I'm the king of the world!",
		"actor": "Leonardo DiCaprio",
		"character": "Jack Dawson",
		"quoteFrom": "Titanic",
		"year": 1997
	},
	{
		"quote": "You had me at 'hello'.",
		"actor": "Renée Zellweger",
		"character": "Dorothy Boyd",
		"quoteFrom": "Jerry Maguire",
		"year": 1996
	},
	{
		"quote": "If you build it, he will come.",
		"actor": "Kevin Costner",
		"character": "Ray Kinsella",
		"quoteFrom": "Field of Dreams",
		"year": 1989
	},
	{
		"quote": "To infinity and beyond!",
		"actor": "Tim Allen",
		"character": "Buzz Lightyear",
		"quoteFrom": "Toy Story",
		"year": 1995
	},
	{
		"quote": "You can't handle the truth!",
		"actor": "Jack Nicholson",
		"character": "Col. Nathan R. Jessep",
		"quoteFrom": "A Few Good Men",
		"year": 1992
	},
	{
		"quote": "Keep the change, ya filthy animal!",
		"actor": "Daniel Stern",
		"character": "Marv Murchins",
		"quoteFrom": "Home Alone",
		"year": 1990
	},
	{
		"quote": "Oh, behave!",
		"actor": "Mike Myers",
		"character": "Austin Powers",
		"quoteFrom": "Austin Powers: International Man of Mystery",
		"year": 1997
	},
	{
		"quote": "I'll be back.",
		"actor": "Arnold Schwarzenegger",
		"character": "The Terminator",
		"quoteFrom": "The Terminator",
		"year": 1984
	},
	{
		"quote": "You had me at 'hello'.",
		"actor": "Renée Zellweger",
		"character": "Dorothy Boyd",
		"quoteFrom": "Jerry Maguire",
		"year": 1996
	},
	{
		"quote": "I see dead people.",
		"actor": "Haley Joel Osment",
		"character": "Cole Sear",
		"quoteFrom": "The Sixth Sense",
		"year": 1999
	},
	{
		"quote": "The name's Bond. James Bond.",
		"actor": "Sean Connery",
		"character": "James Bond",
		"quoteFrom": "Goldfinger",
		"year": 1964
	},
	{
		"quote": "I am Groot.",
		"actor": "Vin Diesel",
		"character": "Groot",
		"quoteFrom": "Guardians of the Galaxy",
		"year": 2014
	},
	{
		"quote": "You either die a hero or you live long enough to see yourself become the villain.",
		"actor": "Aaron Eckhart",
		"character": "Harvey Dent",
		"quoteFrom": "The Dark Knight",
		"year": 2008
	},
	{
		"quote": "I wish I knew how to quit you.",
		"actor": "Jake Gyllenhaal",
		"character": "Jack Twist",
		"quoteFrom": "Brokeback Mountain",
		"year": 2005
	},
	{
		"quote": "Just keep swimming.",
		"actor": "Ellen DeGeneres",
		"character": "Dory",
		"quoteFrom": "Finding Nemo",
		"year": 2003
	},
	{
		"quote": "There's no place like home.",
		"actor": "Judy Garland",
		"character": "Dorothy Gale",
		"quoteFrom": "The Wizard of Oz",
		"year": 1939
	},
	{
		"quote": "I am vengeance. I am the night. I am Batman.",
		"actor": "Kevin Conroy",
		"character": "Batman",
		"quoteFrom": "Batman: The Animated Series",
		"year": 1990
	},
	{
		"quote": "I love you 3000.",
		"actor": "Robert Downey Jr.",
		"character": "Tony Stark",
		"quoteFrom": "Avengers: Endgame",
		"year": 2019
	},
	{
		"quote": "I'm the king of the world!",
		"actor": "Leonardo DiCaprio",
		"character": "Jack Dawson",
		"quoteFrom": "Titanic",
		"year": 1997
	},
	{
		"quote": "You had me at 'hello'.",
		"actor": "Renée Zellweger",
		"character": "Dorothy Boyd",
		"quoteFrom": "Jerry Maguire",
		"year": 1996
	},
	{
		"quote": "If you build it, he will come.",
		"actor": "Kevin Costner",
		"character": "Ray Kinsella",
		"quoteFrom": "Field of Dreams",
		"year": 1989
	},
	{
		"quote": "To infinity and beyond!",
		"actor": "Tim Allen",
		"character": "Buzz Lightyear",
		"quoteFrom": "Toy Story",
		"year": 1995
	},
	{
		"quote": "You can't handle the truth!",
		"actor": "Jack Nicholson",
		"character": "Col. Nathan R. Jessep",
		"quoteFrom": "A Few Good Men",
		"year": 1992
	},
	{
		"quote": "Keep the change, ya filthy animal!",
		"actor": "Daniel Stern",
		"character": "Marv Murchins",
		"quoteFrom": "Home Alone",
		"year": 1990
	},
	{
		"quote": "Oh, behave!",
		"actor": "Mike Myers",
		"character": "Austin Powers",
		"quoteFrom": "Austin Powers: International Man of Mystery",
		"year": 1997
	},
	{
		"quote": "Say hello to my little friend!",
		"actor": "Al Pacino",
		"character": "Tony Montana",
		"quoteFrom": "Scarface",
		"year": 1983
	},
	{
		"quote": "I am your father.",
		"actor": "James Earl Jones",
		"character": "Darth Vader",
		"quoteFrom": "Star Wars: The Empire Strikes Back",
		"year": 1980
	},
	{
		"quote": "I'm gonna make him an offer he can't refuse.",
		"actor": "Marlon Brando",
		"character": "Don Vito Corleone",
		"quoteFrom": "The Godfather",
		"year": 1972
	},
	{
		"quote": "There's no place like home.",
		"actor": "Judy Garland",
		"character": "Dorothy Gale",
		"quoteFrom": "The Wizard of Oz",
		"year": 1939
	},
	{
		"quote": "I feel the need—the need for speed.",
		"actor": "Tom Cruise",
		"character": "Maverick",
		"quoteFrom": "Top Gun",
		"year": 1986
	},
	{
		"quote": "I'm the king of the world!",
		"actor": "Leonardo DiCaprio",
		"character": "Jack Dawson",
		"quoteFrom": "Titanic",
		"year": 1997
	},
	{
		"quote": "You can't sit with us.",
		"actor": "Rachel McAdams",
		"character": "Regina George",
		"quoteFrom": "Mean Girls",
		"year": 2004
	},
	{
		"quote": "I'll be back.",
		"actor": "Arnold Schwarzenegger",
		"character": "The Terminator",
		"quoteFrom": "The Terminator",
		"year": 1984
	},
	{
		"quote": "I see dead people.",
		"actor": "Haley Joel Osment",
		"character": "Cole Sear",
		"quoteFrom": "The Sixth Sense",
		"year": 1999
	},
	{
		"quote": "Why so serious?",
		"actor": "Heath Ledger",
		"character": "The Joker",
		"quoteFrom": "The Dark Knight",
		"year": 2008
	},
	{
		"quote": "I'm going to make him an offer he can't refuse.",
		"actor": "Marlon Brando",
		"character": "Don Vito Corleone",
		"quoteFrom": "The Godfather",
		"year": 1972
	},
	{
		"quote": "May the Force be with you.",
		"actor": "Harrison Ford",
		"character": "Han Solo",
		"quoteFrom": "Star Wars",
		"year": 1977
	},
	{
		"quote": "Life is like a box of chocolates.",
		"actor": "Tom Hanks",
		"character": "Forrest Gump",
		"quoteFrom": "Forrest Gump",
		"year": 1994
	},
	{
		"quote": "Nobody puts Baby in a corner.",
		"actor": "Patrick Swayze",
		"character": "Johnny Castle",
		"quoteFrom": "Dirty Dancing",
		"year": 1987
	},
	{
		"quote": "You can't handle the truth!",
		"actor": "Jack Nicholson",
		"character": "Colonel Jessup",
		"quoteFrom": "A Few Good Men",
		"year": 1992
	},
	{
		"quote": "There's no place like home.",
		"actor": "Judy Garland",
		"character": "Dorothy Gale",
		"quoteFrom": "The Wizard of Oz",
		"year": 1939
	},
	{
		"quote": "Keep the change, ya filthy animal!",
		"actor": "Daniel Stern",
		"character": "Marv Murchins",
		"quoteFrom": "Home Alone",
		"year": 1990
	},
	{
		"quote": "It's alive! It's alive!",
		"actor": "Colin Clive",
		"character": "Dr. Henry Frankenstein",
		"quoteFrom": "Frankenstein",
		"year": 1931
	},
	{
		"quote": "Here's looking at you, kid.",
		"actor": "Humphrey Bogart",
		"character": "Rick Blaine",
		"quoteFrom": "Casablanca",
		"year": 1942
	},
	{
		"quote": "I'm the king of the world!",
		"actor": "Leonardo DiCaprio",
		"character": "Jack Dawson",
		"quoteFrom": "Titanic",
		"year": 1997
	},
	{
		"quote": "I feel the need—the need for speed.",
		"actor": "Tom Cruise",
		"character": "Maverick",
		"quoteFrom": "Top Gun",
		"year": 1986
	},
	{
		"quote": "I'm Batman.",
		"actor": "Michael Keaton",
		"character": "Bruce Wayne",
		"quoteFrom": "Batman",
		"year": 1989
	},
	{
		"quote": "I wish I knew how to quit you.",
		"actor": "Jake Gyllenhaal",
		"character": "Jack Twist",
		"quoteFrom": "Brokeback Mountain",
		"year": 2005
	},
	{
		"quote": "This is the start of a beautiful friendship.",
		"actor": "Humphrey Bogart",
		"character": "Rick Blaine",
		"quoteFrom": "Casablanca",
		"year": 1942
	},
	{
		"quote": "I am Groot.",
		"actor": "Vin Diesel",
		"character": "Groot",
		"quoteFrom": "Guardians of the Galaxy",
		"year": 2014
	},
	{
		"quote": "I'll be back.",
		"actor": "Arnold Schwarzenegger",
		"character": "The Terminator",
		"quoteFrom": "The Terminator",
		"year": 1984
	},
	{
		"quote": "You had me at 'hello'.",
		"actor": "Renée Zellweger",
		"character": "Dorothy Boyd",
		"quoteFrom": "Jerry Maguire",
		"year": 1996
	},
	{
		"quote": "I coulda been a contender.",
		"actor": "Marlon Brando",
		"character": "Terry Malloy",
		"quoteFrom": "On the Waterfront",
		"year": 1954
	}
]