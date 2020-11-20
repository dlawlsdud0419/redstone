
const btn = document.getElementById('btn_gotop');

function gototop() {
    if(document.documentElement.scrollTop > 300){
        btn.style.display ="block";
    } else {
        btn.style.display ="none";
    }
}
function gotop(){
    window.scrollTo(0,0);
}

function init(){
    setInterval(gototop, 100); 
}
init();
