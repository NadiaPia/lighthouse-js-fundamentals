/*let udaciFamily = ["Julia", "James", "Nadia"];
console.log(udaciFamily);*/

/*var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);*/

/*var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 5;
prices[2] = 7;
prices[6] = 9;

console.log(prices);*/


/*var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];
donuts.pop(); 

console.log(donuts);*/

/*var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); 
// removes "chocolate frosted" at index 1 and 
//adds "chocolate cruller" and "creme de leche" starting at index 1
*/

/*var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, "Yellow", "Green");
//console.log(rainbow);
rainbow.splice(5, 0, "Purple")
//console.log(rainbow);*/

/*var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(arr) {
  if (arr.length >= 7) {
    return true;
  } else {
    return false;
  }
}
console.log(hasEnoughPlayers(team));*/

/*var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
crew.push(doctor, sister, shepherd);
console.log(crew);*/

/*var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts);*/

/*var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donuts);
});*/

/*var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(item, index) {
  if (item % 3 === 0) {
    test[index] += 100;
  }
  console.log(test);
});*/

/*var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

/*donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  //console.log(donut);
});
console.log(donuts);*/

//console.log(donuts.pop());
/*console.log(donuts);*/

/*var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(elem) {
  elem = Number((elem * 1.15).toFixed(2));
  return elem;
});
console.log(totals);*/

/*var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
  ["cer", "df", "sdfdfdf"],
  ["cer", "df", "weertr"],
  ["cer", "df", "hffdf"]
];

console.log(donutBox.length);
console.log(donutBox);
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}*/

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row++) {
  for (let column = 0; column < numbers[row].length; column++) {
    if (numbers[row][column] % 2 === 0) {
      numbers[row][column] = "even";
    } else {
      numbers[row][column] = "odd";
    }
    console.log(numbers[row][column])
  }
}
console.log(numbers)

/*var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}*/

/*var donutBox = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for(let row = 0; row < donutBox.length; row++) {
  //console.log(donutBox[row]);
  for (column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}*/





