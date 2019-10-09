var chery = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021
};
var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};
function prequal(car) {
  if (car.year > 1960) {
    return false;
  } else if (car.mileage > 100000) {
    return false;
  }
  return true;
}
var worthTaxi = prequal(taxi);

if (worthTaxi) {
  console.log("You gonna check out this" + car.make + " " + car.model);
} else {
  console.log("You shoud really pass on the " + car.make + " " + car.model);
}
