const btn = document.getElementById('button');
const toaster = document.getElementById('toasts');

const messages = [
    "User successfully registered!",
    "Order complete!",
    "User logged out.",
    "Game over!",
    "One more time."
];

const types = [
    "primary",
    "error",
    "success",
    "warning"
];
    
btn.addEventListener('click', () => showNotification(getRandomType()));

function showNotification(type = null) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = getRandomToast();

    toast.classList.add(type ? type : 'primary');

    toaster.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function getRandomToast() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
