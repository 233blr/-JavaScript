var eightBall = {
  index: 0,
  advise: ["yes", "no", "maybe", "not chenge"],
  shake: function() {
    this.index = this.index + 1;
    if (this.index >= this.advise.lenght) {
      this.index = 0;
    }
  },
  look: function() {
    return this.advise[this.index];
  }
};
eightBall.shake();
console.log(eightBall.look());
