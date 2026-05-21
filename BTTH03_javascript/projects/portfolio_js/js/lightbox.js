const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxCategory = document.getElementById('lightbox-category');
const btnClose = document.querySelector('.lightbox-close');
const btnPrev = document.querySelector('.lightbox-prev');
const btnNext = document.querySelector('.lightbox-next');
const currentSpan = document.getElementById('lightbox-current');
const totalSpan = document.getElementById('lightbox-total');
const triggers = document.querySelectorAll('.lightbox-trigger');

let currentIndex = 0;
const itemsData = Array.from(triggers).map(t => {
    const card = t.closest('.card');
    return {
        imgSrc: card.querySelector('img').src,
        title: card.querySelector('.card-title').textContent,
        desc: card.querySelector('.card-text').textContent,
        category: card.querySelector('.badge').textContent
    };
});
totalSpan.textContent = itemsData.length;

function openLightbox(index) {
    currentIndex = index;
    const data = itemsData[index];
    lightboxImg.src = data.imgSrc;
    lightboxTitle.textContent = data.title;
    lightboxDesc.textContent = data.desc;
    lightboxCategory.textContent = data.category;
    currentSpan.textContent = index + 1;
    lightbox.classList.add('active');
}

triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => openLightbox(index));
});

btnClose.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
});
