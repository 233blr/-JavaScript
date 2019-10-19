var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("massegeArea");
    messageArea.innerHTML = msg;
  }, //методы предстовления
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
var model = {
  boardSize: 7,
  numShips: 3,
  shipLenght: 3,
  shipsSunk: 0,
  ships: [
    { location: ["06", "16", "26"], hits: ["", "", ""] },
    { location: ["24", "34", "44"], hits: ["", "", ""] },
    { location: ["10", "11", "12"], hits: ["", "", ""] }
  ]
};
