var fiat = {
  make: "Fiat",
  model: 500,
  year: 1957,
  color: "Medium Blue",
  passenger: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      alert("Zoom zoom !");
    } else {
      alert("You need to start engine first !");
    }
  }
};