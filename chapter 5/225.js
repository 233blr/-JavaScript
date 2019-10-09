function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "BMW", "Opel", "Ford"];
  var models = ["Taxi", "Sport", "Sedan", "Megan", "Hachback", "Strit"];
  var years = [1956, 2001, 2010, 1980, 1970, 1960, 2014];
  var colors = ["red", "blue", "tan", "yellow", "green", "black"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passangers: [rand5],
    convertible: convertible[rand6],
    mileage: 0
  };

  return car;
}

function displayCar(car) {
  alert(
    "You new car is a " +
      car.year +
      " " +
      car.make +
      " " +
      car.model +
      " passenger = " +
      car.passangers +
      " convertible " +
      car.convertible
  );
  console.log(
    "You new car is a " +
      car.year +
      " " +
      car.make +
      " " +
      car.model +
      " passenger = " +
      car.passangers +
      " convertible " +
      car.convertible
  );
}

var carToSell = makeCar();
displayCar(carToSell);
