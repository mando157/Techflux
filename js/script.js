// ^ Typing text animation
const text = "Design";
const typingText = document.getElementById('typing-text');

let i = 0;
let isDeleting = false;

function typing() {
    if (!isDeleting) {
        typingText.innerText = text.substring(0, i + 1);
        i++;

        if (i === text.length) {
            isDeleting = true;
            setTimeout(typing, 800);
            return;
        }
    } else {
        typingText.innerText = text.substring(0, Math.max(0, i - 1));
        i--;

        if (i === 0) {
            isDeleting = false;
            i = 0;
            setTimeout(typing, 400);
            return;
        }
    }
    setTimeout(typing, isDeleting ? 80 : 120);
}
typing();