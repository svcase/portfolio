let firstCard = document.querySelector('.liza');
let secondCard = document.querySelector('.tic-tac');
let thirdCard = document.querySelector('.widji');
let fourthCard = document.querySelector('.rps');

firstCard.addEventListener('mouseover', lizaText);
secondCard.addEventListener('mouseover', ticText);
thirdCard.addEventListener('mouseover', widjiText);
fourthCard.addEventListener('mouseover', rpsText);

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

function rpsText() {
    let originalText = fourthCard.firstElementChild.innerText;
    let text = 'Vanilla Javascript';
    fourthCard.firstElementChild.innerText = text;
    fourthCard.addEventListener('mouseout', ()=>{fourthCard.firstElementChild.innerText = originalText});
}