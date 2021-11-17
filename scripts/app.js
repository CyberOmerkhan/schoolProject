const btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');
btn.onclick = () => {
    sidebar.classList.toggle('active');
}