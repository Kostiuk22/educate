window.addEventListener('DOMContentLoaded', function () {

        let diceSide1 = document.getElementById('dice-side-1');
        let diceSide2 = document.getElementById('dice-side-2');
        let status = document.getElementById('status');

        let side1 = Math.floor( Math.random() * 6 ) + 1;
        let side2 = Math.floor( Math.random() * 6 ) + 1;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

        if (side1 > side2){
            status.innerHTML = 'Гравець 1 виграв!';
        }
        if (side1 < side2){
            status.innerHTML = 'Гравець 2 виграв!';
        }
        if ( side1 === side2 ) {
            status.innerHTML += 'Нічия!!';
        }

}, false);
