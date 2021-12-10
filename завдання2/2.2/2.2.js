function foo() {
    let i = 100;
    while(i>1){
      if (i%3 === 0 && i%5 === 0) {
        console.log('MishaKostiuk');
      } else if (i%3 === 0) {
        console.log('Misha');
      } else if (i%5 === 0) {
        console.log('Kostiuk');
      } else {
        console.log(i);
      }
      i--;
    }
}

foo()
