let firstCard = document.querySelector('.liza');
let secondCard = document.querySelector('.tic-tac');
let thirdCard = document.querySelector('.widji');
let fourthCard = document.querySelector('.rps');

firstCard.addEventListener('mouseover', lizaText);
secondCard.addEventListener('mouseover', ticText);
thirdCard.addEventListener('mouseover', widjiText);
fourthCard.addEventListener('mouseover', rpsText);

firstCard.addEventListener('touchstart', lizaText);
secondCard.addEventListener('touchstart', ticText);
thirdCard.addEventListener('touchstart', widjiText);
fourthCard.addEventListener('touchstart', rpsText);

function lizaText() {
    let originalText = firstCard.firstElementChild.innerText;
    let text = 'HTML, CSS, JavaScript, basic React';
    firstCard.firstElementChild.innerText = text;
    firstCard.addEventListener('touchend', ()=>{firstCard.firstElementChild.innerText = originalText});
    firstCard.addEventListener('mouseout', ()=>{firstCard.firstElementChild.innerText = originalText});
}

function ticText() {
    let originalText = secondCard.firstElementChild.innerText;
    let text = 'Vanilla JavaScript';
    secondCard.firstElementChild.innerText = text;
    secondCard.addEventListener('touchend', ()=>{secondCard.firstElementChild.innerText = originalText});
    secondCard.addEventListener('mouseout', ()=>{secondCard.firstElementChild.innerText = originalText});
}

function widjiText() {
    let originalText = thirdCard.firstElementChild.innerText;
    let text = 'HTML, CSS, JavaScript, basic React';
    thirdCard.firstElementChild.innerText = text;
    thirdCard.addEventListener('touchend', ()=>{thirdCard.firstElementChild.innerText = originalText});
    thirdCard.addEventListener('mouseout', ()=>{thirdCard.firstElementChild.innerText = originalText});
}

function rpsText() {
    let originalText = fourthCard.firstElementChild.innerText;
    let text = 'Vanilla Javascript';
    fourthCard.firstElementChild.innerText = text;
    fourthCard.addEventListener('touchend', ()=>{fourthCard.firstElementChild.innerText = originalText});
    fourthCard.addEventListener('mouseout', ()=>{fourthCard.firstElementChild.innerText = originalText});
}