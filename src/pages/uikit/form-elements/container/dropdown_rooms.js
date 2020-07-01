let btnDropdownRooms = document.querySelector('#showDropdownRooms');
let hiddenContent = document.querySelector('#dropdownRooms');

// Show hidden menu on click input
btnDropdownRooms.onclick = function() {
    hiddenContent.classList.toggle('show');
};

// Close menu on click outside
window.addEventListener('click', function (e) {
    if (!hiddenContent.contains(e.target) && !btnDropdownRooms.contains(e.target)) {
        hiddenContent.classList.remove('show');
    }
});

// Plus and minus 1 
let resultBefore1 = document.querySelector('#result1');
let btnPlus1 = document.querySelector('#plus1');
let btnMinus1 = document.querySelector('#minus1');
let resultBefore_num1 = parseInt(resultBefore1.innerHTML);

// Decrementation 1
btnMinus1.onclick = function() {
    resultBefore_num1--;
    if (resultBefore_num1 < 0) {
        return;
    }
    else {
        resultBefore1.innerHTML = resultBefore_num1;
    }
};
// Incrementation 1
btnPlus1.onclick = function() {
    if (resultBefore_num1 < 0) {
        resultBefore_num1 = 0;
        resultBefore_num1++;
        resultBefore1.innerHTML = resultBefore_num1;
    }
    else {
        resultBefore_num1++;
        resultBefore1.innerHTML = resultBefore_num1;
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
    if (resultBefore_num2 < 0) {
        return;
    }
    else {
        resultBefore2.innerHTML = resultBefore_num2;
    }
};
// Incrementation 2
btnPlus2.onclick = function() {
    if (resultBefore_num2 < 0) {
        resultBefore_num2 = 0;
        resultBefore_num2++;
        resultBefore2.innerHTML = resultBefore_num2;
    }
    else {
        resultBefore_num2++;
        resultBefore2.innerHTML = resultBefore_num2;
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
    if (resultBefore_num3 < 0) {
        return;
    }
    else {
        resultBefore3.innerHTML = resultBefore_num3;
    }
};
// Incrementation 3
btnPlus3.onclick = function() {
    if (resultBefore_num3 < 0) {
        resultBefore_num3 = 0;
        resultBefore_num3++;
        resultBefore3.innerHTML = resultBefore_num3;
    }
    else {
        resultBefore_num3++;
        resultBefore3.innerHTML = resultBefore_num3;
    }
};

