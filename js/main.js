document.addEventListener('DOMContentLoaded', () => {

    const btnNext = document.querySelector('.next-img');
    const btnPrev = document.querySelector('.previous-img');
    const heroImg = document.getElementById('hero-img');

    const imgSrc = [
        'assets/promax17.png',
        'assets/promax17_2.png',
        'assets/promax17_3.png',
        'assets/promax17_4.png',
        'assets/promax17_5.png'
    ];

    let currentImg = 0;

    btnNext.addEventListener('click', nextHero);
    btnPrev.addEventListener('click', prevHero);

    function nextHero() {
        currentImg++;
        if (currentImg >= imgSrc.length) currentImg = 0;
        changeImage(currentImg);
    }

    function prevHero() {
        currentImg--;
        if (currentImg < 0) currentImg = imgSrc.length - 1;
        changeImage(currentImg);
    }

    function changeImage(index) {
        heroImg.style.opacity = 0;
        setTimeout(() => {
            heroImg.src = imgSrc[index];
            heroImg.onload = () => heroImg.style.opacity = 1;
        }, 250);
    }


});
