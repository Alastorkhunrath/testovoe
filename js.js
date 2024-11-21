const cardsContainer = document.querySelector('.exemples_cards');
const cards = document.querySelectorAll('.exempple_work_card');
const buttonLeft = document.querySelector('.arrow_left');
const buttonRight = document.querySelector('.arrow_right');


let currentIndex = 0;
const cardsPerView = 3; // Number of cards to show at once
const totalCards = cards.length;



buttonLeft.addEventListener('click', () => scrollCards('left'));
buttonRight.addEventListener('click', () => scrollCards('right'));



function scrollCards(direction) {
    
    if (direction === 'left') {
        currentIndex = (currentIndex > 1) ? currentIndex - 3 : totalCards - cardsPerView;
    } else if (direction === 'right') {
        currentIndex = (currentIndex < totalCards - cardsPerView) ? currentIndex + 3  : 0;
    }
    const offset = -currentIndex * (50 / cardsPerView); // Move by width of 3 cards
    cardsContainer.style.transform = `translateX(${offset}%)`;
}



const cardsSwiper = document.querySelector('.reviews_swiper');
const cardSwiper = document.querySelectorAll('.reviews_swiper_card');
const reviewsLeft = document.querySelector('.reviews_left');
const reviewsRight = document.querySelector('.reviews_right');



let reviewsIndex = 0;
const cardsReviews = 3; // Number of cards to show at once
const reviewsCards = cardSwiper.length;

reviewsLeft.addEventListener('click', () => scrollCard('left'));
reviewsRight.addEventListener('click', () => scrollCard('right'));

function scrollCard(direction) {
    
    if (direction === 'left') {
        reviewsIndex = (reviewsIndex > 1) ? reviewsIndex - 3 : reviewsCards - cardsReviews;
    } else if (direction === 'right') {
        reviewsIndex = (reviewsIndex < reviewsCards - cardsReviews) ? reviewsIndex + 3  : 0;
    }
    const offset = -reviewsIndex * (50 / cardsReviews); // Move by width of 3 cards
    cardsSwiper.style.transform = `translateX(${offset}%)`;
}


