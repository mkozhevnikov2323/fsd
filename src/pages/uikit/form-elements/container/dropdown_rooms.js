setTimeout(selectRooms(), 0);

function selectRooms() {

    let btnDropdownRooms = document.querySelector('#showDropdownRooms');
    let hiddenContent = document.querySelector('#dropdownRooms');
    let bedRooms = document.querySelector('#bedRooms');
    let beds = document.querySelector('#beds');
    let bathRooms = document.querySelector('#bathRooms');
    let cutBathRooms;
    let fullRooms = document.querySelector('#fullRooms');
    
    function cut(text, limit) {
        text = text.slice( 0, limit);
        return text + "...";
    };

    // Show hidden menu on click input
    btnDropdownRooms.onclick = function() {
        hiddenContent.classList.toggle('show');
    };

    // Close menu on click outside !!! OFF AT THIS MOMENT. FOR WORK - UNCOMMENT !!!
    // window.addEventListener('click', function (e) {
    //     if (!hiddenContent.contains(e.target) && !btnDropdownRooms.contains(e.target)) {
    //         hiddenContent.classList.remove('show');
    //     }
    // });

    // Plus and minus 1 
    let resultBefore1 = document.querySelector('#result1');
    let btnPlus1 = document.querySelector('#plus1');
    let btnMinus1 = document.querySelector('#minus1');
    let resultBefore_num1 = parseInt(resultBefore1.innerHTML);

    // Decrementation 1
    btnMinus1.onclick = function() {
        resultBefore_num1--;
        if (resultBefore_num1 < 1) {
            return;
        }
        else {
            resultBefore1.innerHTML = resultBefore_num1;
            bedRooms.innerHTML = resultBefore1.innerHTML + ' ' + getNoun(resultBefore_num1, 'спальня', 'спальни', 'спален');
                        
        }
    };
    // Incrementation 1
    btnPlus1.onclick = function() {
        if (resultBefore_num1 < 1) {
            resultBefore_num1 = 1;
            resultBefore_num1++;
            resultBefore1.innerHTML = resultBefore_num1;
            bedRooms.innerHTML = resultBefore1.innerHTML + ' ' + getNoun(resultBefore_num1, 'спальня', 'спальни', 'спален');
            
        }
        else if (resultBefore_num1 >= 4) {
            return;
        }
        else {
            resultBefore_num1++;
            resultBefore1.innerHTML = resultBefore_num1;
            bedRooms.innerHTML = resultBefore1.innerHTML + ' ' + getNoun(resultBefore_num1, 'спальня', 'спальни', 'спален');
            
        }
    };

    // Plus and minus 2 
    let resultBefore2 = document.querySelector('#result2');
    let btnPlus2 = document.querySelector('#plus2');
    let btnMinus2 = document.querySelector('#minus2');
    let resultBefore_num2 = parseInt(resultBefore2.innerHTML);

    // Decrementation 2
    btnMinus2.onclick = function() {
        resultBefore_num2--;
        if (resultBefore_num2 < 1) {
            return;
        }
        else {
            resultBefore2.innerHTML = resultBefore_num2;
            beds.innerHTML = ', ' + resultBefore2.innerHTML + ' ' + getNoun(resultBefore_num2, 'кровать', 'кровати', 'кроватей');

        }
    };
    // Incrementation 2
    btnPlus2.onclick = function() {
        if (resultBefore_num2 < 1) {
            resultBefore_num2 = 1;
            resultBefore_num2++;
            resultBefore2.innerHTML = resultBefore_num2;
            beds.innerHTML = ', ' + resultBefore2.innerHTML + ' ' + getNoun(resultBefore_num2, 'кровать', 'кровати', 'кроватей');

        }
        else if (resultBefore_num2 >= 8) {
            return;
        }
        else {
            resultBefore_num2++;
            resultBefore2.innerHTML = resultBefore_num2;
            beds.innerHTML = ', ' + resultBefore2.innerHTML + ' ' + getNoun(resultBefore_num2, 'кровать', 'кровати', 'кроватей');

        }
    };

    // Plus and minus 3 
    let resultBefore3 = document.querySelector('#result3');
    let btnPlus3 = document.querySelector('#plus3');
    let btnMinus3 = document.querySelector('#minus3');
    let resultBefore_num3 = parseInt(resultBefore3.innerHTML);

    // Decrementation 3
    btnMinus3.onclick = function() {
        resultBefore_num3--;
        if (resultBefore_num3 < 1) {
            return;
        }
        else {
            resultBefore3.innerHTML = resultBefore_num3;
            bathRooms.innerHTML = ', ' + resultBefore3.innerHTML + ' ' + getNoun(resultBefore_num3, 'ванная комната', 'ванные комнаты', 'ванных комнат');

            cutBathRooms = cut(bathRooms.innerHTML, 7);
            bathRooms.innerHTML = cutBathRooms;
        }
    };
    // Incrementation 3
    btnPlus3.onclick = function() {
        if (resultBefore_num3 < 0) {
            resultBefore_num3 = 0;
            resultBefore_num3++;
            resultBefore3.innerHTML = resultBefore_num3;
            bathRooms.innerHTML = ', ' + resultBefore3.innerHTML + ' ' + getNoun(resultBefore_num3, 'ванная комната', 'ванные комнаты', 'ванных комнат');

            cutBathRooms = cut(bathRooms.innerHTML, 7);
            bathRooms.innerHTML = cutBathRooms;
        }
        else if (resultBefore_num3 >= 4) {
            return;
        }
        else {
            resultBefore_num3++;
            resultBefore3.innerHTML = resultBefore_num3;
            bathRooms.innerHTML = ', ' + resultBefore3.innerHTML + ' ' + getNoun(resultBefore_num3, 'ванная комната', 'ванные комнаты', 'ванных комнат');

            cutBathRooms = cut(bathRooms.innerHTML, 7);
            bathRooms.innerHTML = cutBathRooms;
        }
    };

    // Generation end of words
    
    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
          return five;
        }
        n %= 10;
        if (n === 1) {
          return one;
        }
        if (n >= 2 && n <= 4) {
          return two;
        }
        return five;
    }
}


