const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function toggleNav() {
 btn.classList.toggle('open')
 menu.classList.toggle('flex')
 menu.classList.toggle('hidden')
}

btn.addEventListener('click', toggleNav)
