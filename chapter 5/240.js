var fiat = {
  make: "Fiat",
  model: 500,
  year: 1957,
  color: "Medium Blue",
  passenger: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function() {
    this.started = false;
  },
  stop: function() {
    this.started = true;
  },
  drive: function() {
    if (this.started) {
      alert(this.make + "zoom zoom !");
    } else {
      alert("You need to start engine !");
    }
  },
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }
};
