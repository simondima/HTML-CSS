let userName = document.querySelector('.userName');
let userSurname = document.querySelector('.userSurname');
let userBirth = document.querySelector('.userBirth');
let userProfession = document.querySelector('.userProfession');
let userCity = document.querySelector('.userCity');


let user = prompt('Введите Ваше имя...');
userName.innerHTML  = ' ' + user;

let Surname = prompt('Введите Вашу фамилию...');
userSurname.innerHTML = ' ' + Surname;

let birth = prompt('Введите Ваш год рождения');
userBirth.innerHTML = ' ' + birth;

let profession = prompt('Кем Вы работаете?');
userProfession.innerHTML = ' ' + profession;

let city = prompt('В каком городе Вы живете?');
userCity.innerHTML = ' ' + city;