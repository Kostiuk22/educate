function indexMassa(massa, height) {
  var index = massa / (height * height);
  console.log("Індекс маси: " + index.toFixed(3));
  if(index < 18.5){
      console.log("Недостатня вага!");
  }
  if(index > 18.5 && index < 24.9){
      console.log("Нормальна вага!");
  }
  if(index > 25 && index < 29.9){
      console.log("Зайва вага!");
  }
  if(index > 30){
      console.log("Ожиріння!");
  }
}

indexMassa(69, 1.74);
