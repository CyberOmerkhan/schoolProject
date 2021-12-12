const btn = document.querySelector('#btn');
let logedin = false;
let sidebar = document.getElementsByClassName('sidebar')[0];
btn.onclick = () => {
    sidebar.classList.toggle('active');
}
let logoutButton = document.querySelector('.log_out');
console.log(logoutButton);