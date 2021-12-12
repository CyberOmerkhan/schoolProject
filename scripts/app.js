const btn = document.querySelector('#btn');
let logedin = false;
let sidebar = document.getElementsByClassName('sidebar')[0];
btn.onclick = () => {
    sidebar.classList.toggle('active');
}
let logoutButton = $('#log_out');
let loginButton = $('#log_in');
if(logedin == false){
    logoutButton.hide(1);
    loginButton.show(1);
}else{
    loginButton.hide(1);
    logoutButton.show(1);
}