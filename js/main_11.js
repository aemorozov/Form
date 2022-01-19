var counter = 0;
function onClickButton(el) {
  counter++;
  console.log(counter);
  el.innerHTML = "Вы нажали на кнопку " + counter + " раз";
  // el.style.background = "red";
  // el.style.color = "blue";
  el.style.cssText = "border-radius: 15px; border: 0; font-size: 20px";
}

function onInput(el){
  if(el.value == "Hello"){
    alert("И тебе привет");
  }
  console.log(el.value);
}
