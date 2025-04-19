import { getRandomQuote } from './scripts/quote-widget.js';
import { getToDoItems } from './scripts/todo-widget.js';
import { bmiCalculator } from './scripts/bmi-calculator-widget.js';
import { getRandomPetImage } from './scripts/pet-image-widget.js';
import { getRandomJoke } from './scripts/joke-widget.js';
import { getNasaImage } from './scripts/nasa-widget.js';
import { getRandomFact } from './scripts/fact-widget.js';
import { getMovieQuote } from './scripts/movie-quote-widget.js';
import { updateAnalogClock } from './scripts/clock-widget.js';
import { setCalculator } from './scripts/calculator-widget.js';


setInterval(updateAnalogClock, 1000);
updateAnalogClock();
getRandomPetImage();
getMovieQuote();
getRandomFact();
getRandomJoke();
getRandomQuote();
getNasaImage();
getToDoItems();
bmiCalculator();
setCalculator();