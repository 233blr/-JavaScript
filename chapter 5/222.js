var dog = {
  name: "Fido",
  weight: 40,
  bless: "mixed",
  loves: "walks"
};

function fidoWeight(dog, among) {
  dog.weight = dog.weight - among;
}
var fido = fidoWeight(fido, 10);
alert(fido.name + " now weight " + fido.weight);
