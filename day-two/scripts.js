const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
        currentActive++;
        update();
});

prevBtn.addEventListener('click', () => {
        currentActive--;
        update();
});

function update() {

    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%';
}