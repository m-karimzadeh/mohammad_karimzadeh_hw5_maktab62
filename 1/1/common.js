//Made a map
function mapCreate(mapLength){
    let map = [];
    for (let i = 0; i < mapLength; i++) {
        map[i] = "-";
    }
    // map.fill(300, '-')
    return map;
}

let showMap = mapCreate(300);
console.log("This game map is :", showMap.join(""));

//cars get
const numberOfcars = prompt("enter the number of cars : ");
let cars = []
    ,carLocation = [];

for (let i = 0; i < numberOfcars; i++) {
    cars[i] = prompt(`enter car ${parseInt(i) + 1} name: `)
    carLocation[i] = -1;
}
console.log(cars);

//cars shuffle
// algorithm name: Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

cars = shuffle(cars);
console.log("cars random list :", cars);

//move algorithm
let flag = true
    ,newCarLocation
    ,win = [];

while (flag) {
    for (let i = 0; i < numberOfcars; i++) {
        if(carLocation[i] <= 300){
            newCarLocation = parseInt(carLocation[i]) + (Math.floor(Math.random() * 10));

            if (carLocation.indexOf(newCarLocation) > -1) {
                carLocation[carLocation.indexOf(newCarLocation)] = -1;
            }

            carLocation[i] = newCarLocation;

            if (carLocation[i] > 300) {
                win.push(cars[i]);
            }

        }
    }

    showMap = mapCreate(300);
    for (let i in carLocation) {
        if(carLocation[i] < 300){
            showMap[carLocation[i]] = cars[i];
        }
    }
    
    console.log("This game map is :", showMap.join(""));

    if(win.length === cars.length){
        flag = false;
        break;
    }
}


console.log(`win result: `)
for (let i in win) {
    console.log(`car ${parseInt(i)+1} ===> ${win[i]}`);
}