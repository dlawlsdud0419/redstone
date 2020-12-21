const progress = document.getElementById('progressBar');

window.onscroll = function () {ProgressBar()};

function ProgressBar(){
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = (winscroll / height) * 100;
    progress.style.width = scroll + "%";
}