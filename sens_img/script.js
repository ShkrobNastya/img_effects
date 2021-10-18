const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', stopRotate);
});

function rotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight/2;

    cardItem.style.transform = 'rotateX('+ -(event.offsetY -halfHeight)/5 + 'deg) rotateY(' + (event.offsetX - halfHeight)/5 + 'deg)';
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform='rotate(0)';
}










