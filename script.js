const main = document.querySelector('main')
const article = document.querySelector('article');
// const section = document.querySelector('section');
//const div = document.querySelector('.containerText');
const contBtn = document.querySelector('.containerButton');
const titleTwo = document.querySelector('h2');
const paragraph = document.querySelector('p');
const btn = document.querySelector('button');

main.classList.add('mainSet');
article.classList.add('articleSet');
titleTwo.textContent = 'Welcome to my House';
paragraph.textContent = 'This very fancy house belonged to Mr. Jhon the Wise, a programmer who was terrible at JavaScript. He became obsessed with the programming language, and as soon as he bought this house, he stayed inside to study it all the time. P.S: he never came out sane.';
contBtn.style.margin = '1rem';
contBtn.style.textAlign = 'end';
btn.textContent = 'Visit it!';
btn.classList.add('btnSettings')
