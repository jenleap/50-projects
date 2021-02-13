const tagsDiv = document.getElementById('tags');
const textArea = document.getElementById('text-area');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        selectRandom();
    }
});

function createTags(input) {
    const tags = input.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());
    
    tagsDiv.innerHTML = '';
    
    tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('tag');
        tagSpan.innerText = tag;
        tagsDiv.appendChild(tagSpan);
    });
}

function selectRandom() {
    const interval = setInterval(() => {
        const randomTag = chooseRandomTag();

        randomTag.classList.add('highlight');

        setTimeout(() => {
            randomTag.classList.remove('highlight');
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        const randomTag = chooseRandomTag();
        randomTag.classList.add('highlight');
    }, 3000);
}

function chooseRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}