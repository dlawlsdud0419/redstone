const btn = document.getElementById('btn_gotop');
const btnclick = document.querySelector('.btn_gotop');

function gototop() {
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollIt() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 20));
        }
    })();
}
btnclick.addEventListener('click', scrollIt)

/*function scrollIt(destination, duration = 200, easing = 'linear', callback) {
  // object with some some timing functions
  // function body here
}*/

function init() {
    setInterval(gototop, 100);
}
init();