


//event_handlers

let btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    window.open('assets/Resume.pdf','_blank')
})


const btn2 = document.getElementById('btn2');
const modal = document.getElementById('contactModal');

btn2.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

function closeModal() {
  modal.classList.add('hidden');
}



//typing-text animation

const text = "Hi,  I'm Muhammad Fasih";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("p2").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80); // Speed of typing (ms)
    }
}
window.addEventListener("DOMContentLoaded", type); // Start typing when page loads