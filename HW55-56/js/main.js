let qst1 = ['Столица Украины? - Вводить с большой буквы', 'Киев'];
let qst2 = ['Столица России?', 'Москва'];
let qst3 = ['Столица Белоруссии?', 'Минск'];
let qst4 = ['Столица Польши?', 'Варшава'];


let ukraine = document.querySelector('.ukr');
let russia = document.querySelector('.ru');
let belarus = document.querySelector('.bel');
let poland = document.querySelector('.pol');
let stat = document.querySelector('.stat')



let testCount = 4;
let res = 0;

question1(qst1);
question2(qst2);
question3(qst3);
question4(qst4);

let addd = ('' + res + ' из ' + testCount);
stat.innerHTML = addd;




function question1(qst1) {
    let userAns1 = prompt(qst1[0]);
    ukraine.innerHTML = userAns1;
    if (userAns1 === qst1[1]) {
        res ++;
        alert('Правильно');
    } else {
        alert('Не правильно');
    }
}

function question2(qst2) {
    let userAns2 = prompt(qst2[0]);
    russia.innerHTML = userAns2;
    if (userAns2 === qst2[1]) {
        res++;
        alert('Правильно');
    } else {
        alert('Не правильно');
    }
}

function question3(qst3) {
    let userAns3 = prompt(qst3[0]);
    belarus.innerHTML = userAns3;
    if (userAns3 === qst3[1]) {
        res++;
        alert('Правильно');
    } else {
        alert('Не правильно');
    }
}

function question4(qst4) {
    let userAns4 = prompt(qst4[0]);
    poland.innerHTML = userAns4;
    if (userAns4 === qst4[1]) {
        res++;
        alert('Правильно');
    } else {
        alert('Не правильно');
    }
}