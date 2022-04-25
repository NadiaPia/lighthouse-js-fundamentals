/*function sayHello() {
  var message = "Hello!"
  return message;

}

console.log(sayHello());*/

/*function laugh() {
  let sound = "hahahahahahahahahaha!";
  return sound;
}

console.log(laugh());*/

/*function laugh(num) {
  let sound = "hahahahahahahahahaha!";

}*/

/*function laugh(word) {
  let counter = 0;   
  for(let i = 0; i <= word.length - 1; i++) {
    if (word[i] === "h") {
      counter++;
    }
  }
  return counter;
}

console.log(laugh("hahahahahahahahahaha!"));..*/

/*function laugh(num) {
  let notebook = "";
  for(let i = 1; i <= num; i++) {
    notebook = notebook + 'ha';
  }
  notebook = notebook + "!";
  return notebook;
  }
  console.log(laugh(3));*/

  /*function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
  isThisWorking(3);*/

 /* var bookTitle = "Le Petit Prince";
  console.log(bookTitle);


  function displayBookEnglish() {
    var bookTitle = "The Little Prince";
    console.log(bookTitle);
  }

  displayBookEnglish();
  console.log(bookTitle);*/

  
  function makeLine(length) {
    var line = "";
    for (let j = 1; j <= length; j++ ) {
      line += "* "
    }
    return line + "\n"
  }
   
//console.log(makeLine(10));

/*function buildTriangle(n) {
  let triangle = "";
  for (let i = 1; i <= n; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}
console.log(buildTriangle(10));*/



/*var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

function movies(messageFunction, name) {
  messageFunction(name)
};

movies(favoriteMovie, "Finding Nemo");*/

/*function movies(messageFunction, name) {
  messageFunction(name);
}*/


var laugh = function(n) {
  var word = "";
  for (let i = 1; i <= n; i++) {
    word += "ha";
  }
  return word + "!";
}
console.log(laugh(3));

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(n) {
  var word = "";
  for (let i = 1; i <= n; i++) {
    word += "ha";
  }
  return word + "!";
})






/*var cry = function loud() {
  return "boohoo!";
}

console.log(cry());
*/


