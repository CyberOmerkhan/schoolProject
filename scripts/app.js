$(document).ready(() => {
    const sidebar = $('.sidebar');
    $('#btn').bind('click', () => {
        sidebar.toggle('hidden');
        $('#btn').remove('hidden');
    })
})