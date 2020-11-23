var value, name, item, i, row;
let start = 1;
let wi
const coswid = document.getElementById('cosbody-job');
function over_width(){
    wi = window.innerWidth;
    item = document.getElementsByClassName("tg-row");
    if(wi > 768){
        start = 1;
        for(i=0; i<item.length;i++){  
            item[i].style.display = "table-row";
        }
    } else {
        start = 0;
    }
}

function init(){
    over_width()
    setInterval(over_width, 100); 
    
}

function filter(val){
    value = document.getElementById("value").options[val.selectedIndex].text;
    item = document.getElementsByClassName("tg-row");
    for(i=0; i<item.length;i++){  
        if(value === item[i].childNodes[1].innerHTML){
            item[i].style.display = "table-row";
        }
        else if(value === '모두'){
          for(var j=0; j<item.length;j++){
            item[i].style.display = "table-row";
          }
        }
        else{
          item[i].style.display = "none";
        }
    }
  }

init()