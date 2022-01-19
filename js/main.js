var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

date.setHours(23);
console.log("Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

var arr = [8, 90, 5, 7, 0, 8, 9];
var stroka = arr.reverse().join(", ");
console.log(stroka.split(", "));
console.log(arr.join(", "));
console.log(arr.sort());
console.log(arr.reverse());

class Person {
  constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }
  info(){
    console.log("Имя " + this.name + ". Возраст: " + this.age + ". Счастье: " + this.happiness);
  }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 25, false);
alex.name = 'Alex22';
console.log(alex.name + " " + alex.age);
console.log(bob.name + " " + bob.age);

alex.info();
bob.info();
