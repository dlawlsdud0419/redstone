function init() {
  todo_percent();
  setTimeout(function () {
    document.getElementById("loading").classList.add("isFinish")
  }, 5000);
  setTimeout(function () {
    document.getElementById("loading").remove()
  }, 6000);
  setTimeout(function () {
    document.getElementById("overlay").classList.add("is-open")
  }, 6000);
  setTimeout(function () {
    document.getElementById("navbar").style.display = 'flex';
    document.getElementById("unique").style.display = 'flex';
  }, 7000);



  //document.getElementById("overlay").classList.add("is-open");
}


function todo_percent() {
  const per = document.getElementById('loading-percent');
  let percent = 0;
  const id = setInterval(frame, 50);

  function frame() {
    if (percent >= 100) {
      clearInterval(id);
    } else {
      percent++;
      per.innerHTML = percent + "%";
    }
  }
}


init();