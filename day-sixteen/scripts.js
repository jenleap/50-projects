const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percent = document.getElementById('percent');
const remaining = document.getElementById('remaining');

updateBigCup();

smallCups.forEach((cup, i) => {
    cup.addEventListener('click', () => {
        fillCups(i);
    });
})

function fillCups(cupIndex) {
    // This toggles the fill when clicking on the last cup
    if (smallCups[cupIndex].classList.contains('full') &&
    !smallCups[cupIndex].nextElementSibling.classList.contains('full')) {
        cupIndex--;
    }

    smallCups.forEach((cup, i) => {
        if (i <= cupIndex) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percent.style.visibility = 'hidden';
        percent.style.height = 0;
    } else {
        percent.style.visibility = 'visible';
        percent.style.height = `${fullCups / totalCups * 330}px`;
        percent.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remaining.style.visibility = 'hidden';
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}