/*const raining = false;
const cold = false;

if(raining) {
  console.log("Don't forget your umbrella!")
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");*/

/*const temperature = -12;

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Sort sleeves are fine.");
}

console.log("Now you're ready to go outside!");


const isCitizen = true;
co
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}*/

let num = 99;

while (num >= 1) {
  const bottleString = (n) => n === 1 ? "bottle" : "bottles";
  console.log(`${num} ${bottleString(num)} of juice on the wall! ${num} ${bottleString(num)} of juice! Take one down, pass it around... ${num - 1} ${bottleString(num - 1)} of juice on the wall!`)
  num = num - 1;
}

