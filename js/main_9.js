 // alert("Сегодня отличная погода!");

// var data = confirm("Вы сейчас дома?");
// console.log(data);
// if(data){
//   alert("Вы молодец!");
// }

// var data = prompt("Скажите сколько вам лет", 20);
// console.log(data);
//
// var var1 = null;

var person = null;
if(confirm("Вы точно уверены?")){
  person = prompt("Введите ваше имя");
  alert("Привет, " + person);
} else {
  alert("Вы нажали Отмена");
}
