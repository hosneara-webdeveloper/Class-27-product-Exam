// login page e jabe buy now te click korle

let loginPage = document.getElementsByClassName('login');
console.log(loginPage);  // login class k call kora holo

for (let i = 0; i < loginPage.length; i++) { // class jehetu multiple tai loop diye call korte hoy
    loginPage[i].addEventListener('click', function () {
        window.location.href = 'login.html'; //button e click korle login page e chole jabe
    });
};

// login action 

let pageChange = document.getElementById('login'); // login button click korle cart page e chole jabe
pageChange.addEventListener('click', function () {
    window.location.href = 'cart.html';
});

let loginButton = document.getElementById('login'); // login button selected
let inputEmail = document.getElementById('inputEmail'); // email selected
let password = document.getElementById('inputPassword'); // password selected 
let cPassword = document.getElementById('inputPasswordConfirm'); // confirm password selected
let notMatch = document.getElementById('notMatch'); //error selected
notMatch.style.display = 'none'; // normally display none

password.addEventListener('click', function () { //password box click korle email na thakle error 
    if (inputEmail.value != 'admin@admin.com') {
        inputEmail.style.border = '2px solid rgb(250, 54, 54)';
        alert('Write your Email');
    } else {
        inputEmail.style.border = '1px solid #dee2e6';
    }
});
cPassword.addEventListener('click', function () { // confirm pass box e click korle pass na thakle error
    if (password.value != 123456 || password.value != '123456') {
        password.style.border = '2px solid rgb(250, 54, 54)';
        alert('Put On your Correct Password');
    } else {
        password.style.border = '1px solid #dee2e6';
    }
})

cPassword.addEventListener('keyup', function () { // confrm pass match na korle error

    if (inputEmail.value == 'admin@admin.com' && (password.value == '123456' || password.value == 123456) && (password.value == cPassword.value)) {
        loginButton.removeAttribute('disabled');
        loginButton.classList.remove('disabled');
    } else {
        loginButton.setAttribute('disabled', true);
        loginButton.classList.add('disabled');
    }
    if ((cPassword.value == 123456 || cPassword.value == '123456') !== (password.value == 123456 || password.value == '123456')) {
        notMatch.style.display = 'block';
        cPassword.style.border = '2px solid rgb(250, 54, 54)';
    } else {
        cPassword.style.border = '1px solid #dee2e6';
        notMatch.style.display = 'none';
    }
});

// cart

function calculate(plus, minus, count, cart) { // function banalam plus minus count ar cart k dhorbe and action korbe
    plus.addEventListener('click', function () {
        let value1 = count.value;
        value1 = parseInt(value1);
        let result = Number(value1) + 1;
        count.value = result;
    });
    minus.addEventListener('click', function () {
        let value1 = count.value;
        value1 = parseInt(value1);
        let result = Number(value1) - 1;
        count.value = result;
        if (count.value < 1) {
            cart.style.display = 'none';
        }
    });

}

// cart 1

let plus1 = document.getElementById('plus1'); // plus button k call kora hoche
let minus1 = document.getElementById('minus1'); // minus button k call kora hoiche
let count1 = document.getElementById('count1'); // number type er jei value to ache jeta count kore 
let cart1 = document.getElementById('cart1'); // puro cart tak bujhalno hoiche

let plus2 = document.getElementById('plus2');
let minus2 = document.getElementById('minus2');
let count2 = document.getElementById('count2');
let cart2 = document.getElementById('cart2');

let plus3 = document.getElementById('plus3');
let minus3 = document.getElementById('minus3');
let count3 = document.getElementById('count3');
let cart3 = document.getElementById('cart3');

let plus4 = document.getElementById('plus4');
let minus4 = document.getElementById('minus4');
let count4 = document.getElementById('count4');
let cart4 = document.getElementById('cart4');

calculate(plus1, minus1, count1, cart1); // function k call kora hoiceei 4 ta 4 tar jonno
calculate(plus2, minus2, count2, cart2);
calculate(plus3, minus3, count3, cart3);
calculate(plus4, minus4, count4, cart4);

// total

let price1 = document.getElementById('price1').innerText;
let price2 = document.getElementById('price2').innerText;
let price3 = document.getElementById('price3').innerText;
let price4 = document.getElementById('price4').innerText; // 4 ta cart er price k call kora hoiche

let cal = document.getElementById('sum');
cal.innerText = Number(price1) + Number(price2) + Number(price3) + Number(price4); // sum total call and all price k jog kora hoiche

let taxTex = document.getElementById('grand'); // grand total k call kora hoiche
let taxText = taxTex.innerText; // inner text k dhore number e convert kora hoice
taxText = Number(taxText);
console.log(taxText);

let tax = 15; // 15% tax eta

taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100)); // tax er calculate kora hoiche

let warning = document.getElementById('error'); // kono product na thakle eta show korbe error
let warning2 = document.getElementById('errorp');
warning.style.display = 'none';
warning2.style.display = 'none';
// minus

minus1.addEventListener('click', function () { // eta minus button er calculate
    cal.innerText = Number(cal.innerText) - 1400;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }

}); // ekhane shesh 1 number
minus2.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1500;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 2 number
minus3.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1200;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorP').style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }

}); // 3 number
minus4.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1300;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 4number

// plus

plus1.addEventListener('click', function () { // eta plus er calculate
    cal.innerText = Number(cal.innerText) + 1400;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 1
plus2.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1500;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 2
plus3.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1200;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 3
plus4.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1300;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
}); // 4