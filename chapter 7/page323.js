var input = "qhdkcufys cat |bat |mouse vdn|dbs.%.com";
for (var i = 0; i < input.length; i++) {
  if (input.charAt(i) === "%") {
    //метод charAt получает конкретный символ в строке
    console.log("% в строке под номером " + i);
  }
}
//page 324
var phrase = input.indexOf("cat", 2);
// второй аргумент - индекс начального поиска (можно и без него)
console.log("cat в строке под номером " + phrase);
//page 325
var data = input.substring(10, 13);
// начало и конец поиска
console.log("слово в строке " + data);
//метод split разбирает строку на части по позиции ограничителя
var data2 = input.split("|");
console.log("Split там где запятые " + data2);
