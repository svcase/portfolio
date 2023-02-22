let firstCard = document.querySelector('.liza');
let secondCard = document.querySelector('.tic-tac');
let thirdCard = document.querySelector('.widji');

firstCard.addEventListener('mouseover', lizaText);
secondCard.addEventListener('mouseover', ticText);
thirdCard.addEventListener('mouseover', widjiText);

function lizaText() {
    let originalText = firstCard.firstElementChild.innerText;
    let text = 'HTML, CSS, JavaScript, basic React';
    firstCard.firstElementChild.innerText = text;
    firstCard.addEventListener('mouseout', ()=>{firstCard.firstElementChild.innerText = originalText});
}

function ticText() {
    let originalText = secondCard.firstElementChild.innerText;
    let text = 'Vanilla JavaScript';
    secondCard.firstElementChild.innerText = text;
    secondCard.addEventListener('mouseout', ()=>{secondCard.firstElementChild.innerText = originalText});
}

function widjiText() {
    let originalText = thirdCard.firstElementChild.innerText;
    let text = 'HTML, CSS, JavaScript, basic React';
    thirdCard.firstElementChild.innerText = text;
    thirdCard.addEventListener('mouseout', ()=>{thirdCard.firstElementChild.innerText = originalText});
}