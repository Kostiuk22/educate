function year(year){
  if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    console.log("Рік високосний");
  }
  else{
    console.log("Рік не є високосним");
  }
}

year(2020)
