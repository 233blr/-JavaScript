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
var fiat = {
  make: "Fiat",
  model: 500,
  year: 1957,
  color: "Medium Blue",
  passenger: 2,
  convertible: false,
  mileage: 88000
};
function car(item) {
  for (var prop in item) {
    var show = prop + " : " + item[prop];
  }
  return console.log(show);
}
showMe = car(taxi);
