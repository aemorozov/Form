/* var number = 15;
var isHasHouse = true;

if(number == 15 && !isHasHouse) {
  console.log("Ok");
} else if (number < 10) {
  console.log("<10");
} else if (number == 7) {
  console.log("7!")
} else if (number > 15) {
  console.log("> 15!");
} else {
  console.log("Else");
}
*/

var stroka = "23";
var text = "Переменная со значением: "

switch(stroka){
  case "4":
    console.log(text + "4");
    break;
  case "45":
    console.log(text + "45");
    break;
  case "word":
    console.log(text + "word");
    break;
  default:
    console.log("Default");
    break;
}
