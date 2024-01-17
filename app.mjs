import chalk from "chalk";


let colorsArray = [chalk.blue, chalk.magenta, chalk.yellow, chalk.red, chalk.green, chalk.cyan];

let joke = "Why did the strawberry cry? \n It found itself in a jam."

let words = joke.split(" ");

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let randomColor = getRandomColor(colorsArray);
    let coloredJoke = randomColor(word);
    console.log(coloredJoke);

}


function getRandomColor(colorsArray) {
    let randomNumber = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomNumber];
  }



