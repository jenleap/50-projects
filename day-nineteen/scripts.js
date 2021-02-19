const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
const timeDisplay = document.querySelector('.time');
const dateDisplay = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle');

const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleBtn.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const displayHrs = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(displayHrs, 0, 11, 0, 360)}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeDisplay.innerHTML = `${displayHrs}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateDisplay.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
