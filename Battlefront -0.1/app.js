var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSink = false;
while (isSink == false) {
    guess = prompt("Введите число от 0 до 6 :");
        if (guess < 0 || guess > 6) {
            alert("Ведите верное число !");
        } else {
            guesses = guesses + 1;
            if (guess == location1 || guess == location2 || guess == location3) { 
                hits = hits + 1;
                alert("Ты попал !");
            }
                else {
                    alert("Попробуйте ещё !");
                }
                if (hits == 3) {
                    isSink = true;
                    alert("Ты победил !");
                }
            }
        }
            
var stars = "You took " + guesses + " guesses to sink the baleship, " + "which means your shooting accuracy was " + (3 / guesses);
alert(stars);