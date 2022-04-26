// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

/*function chooseStations(stations) {
  const goodStation = [];
  for (const arg of stations) {
    if (arg[1] >= 20 && (arg[2] === "school" || arg[2] === "community centre") )
      goodStation.push(arg[0])
  }
  return goodStation  
}

//console.log(chooseStations(stations));*/

/*function finalPosition(moves) {
  let coordinates = [0, 0]
  for (let move of moves) {
    if (move === "west") {
      coordinates[0]--;
    } else if (move === "east") {
      coordinates[0]++;    
    } else if (move === "north") {
      coordinates[1]++;
    } else if (move === "south") {
      coordinates[1]--;
    }
  } return coordinates;
}
console.log(finalPosition(['east', 'east']));*/

/*function ageCalculator(name, yearOfBirth, currentYear) {
  let age = (currentYear - yearOfBirth);
  console.log(`${name} is ${age} years old.`)
}
ageCalculator("Nadia", 1987, 2022)*/

/*function howManyHundreds(num) {
  return Math.trunc(num / 100);
}
console.log(howManyHundreds(7789));*/

function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  return length * width;  
}
 //console.log(calculateRectangleArea(3, -5));

 function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  }
  return (base * height) / 2;
 }
 //console.log(calculateTriangleArea(8, 3));

 function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  }
  return Math.PI * radius * radius;
 }
 //console.log(calculateCircleArea(-8));
