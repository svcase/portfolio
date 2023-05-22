let firstCard = document.querySelector('.liza');
let secondCard = document.querySelector('.guess');
let thirdCard = document.querySelector('.widji');
let fourthCard = document.querySelector('.rps');

firstCard.addEventListener('mouseover', lizaText);
secondCard.addEventListener('mouseover', guessText);
thirdCard.addEventListener('mouseover', widjiText);
fourthCard.addEventListener('mouseover', rpsText);

firstCard.addEventListener('touchstart', lizaText);
secondCard.addEventListener('touchstart', guessText);
thirdCard.addEventListener('touchstart', widjiText);
fourthCard.addEventListener('touchstart', rpsText);

function lizaText() {
    const para = document.querySelector('.liza-text');
    let originalText = para.innerText;
    let text = 'HTML, CSS, JavaScript, basic React';
    para.innerText = text;
    firstCard.addEventListener('touchend', ()=>{para.innerText = originalText});
    firstCard.addEventListener('mouseout', ()=>{para.innerText = originalText});
}

function guessText() {
    const para = document.querySelector('.guess-text');
    let originalText = para.innerText;
    let text = 'Javascript, Node, Express, APIs';
    para.innerText = text;
    secondCard.addEventListener('touchend', ()=>{para.innerText = originalText});
    secondCard.addEventListener('mouseout', ()=>{para.innerText = originalText});
}

function widjiText() {
    const para = document.querySelector('.widji-text');
    let originalText = para.innerText;
    let text = 'HTML, CSS, JavaScript, basic React';
    para.innerText = text;
    thirdCard.addEventListener('touchend', ()=>{para.innerText = originalText});
    thirdCard.addEventListener('mouseout', ()=>{para.innerText = originalText});
}

function rpsText() {
    const para = document.querySelector('.rps-text');
    let originalText = para.innerText;
    let text = 'Vanilla Javascript';
    para.innerText = text;
    fourthCard.addEventListener('touchend', ()=>{para.innerText = originalText});
    fourthCard.addEventListener('mouseout', ()=>{para.innerText = originalText});
}