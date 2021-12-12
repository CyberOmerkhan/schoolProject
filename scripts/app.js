const btn = document.querySelector('#btn');
let sidebar = document.getElementsByClassName('sidebar')[0];
btn.onclick = () => {
    sidebar.classList.toggle('active');
}