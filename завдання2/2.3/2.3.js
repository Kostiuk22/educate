function foo(){
  for(var i = 100; i > 1; i--){
    if (i%3 === 0) {
      console.log('Misha');
    } else if (i%5 === 0) {
      console.log('Kostiuk');
    } else if (i%3 === 0 && i%5 === 0) {
      console.log('MishaKostiuk');
    } else {
      console.log(i);
    }
  }
}

foo()
