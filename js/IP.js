
  function getIP(json) {
    console.log("My public IP address is: ", json.ip);
  }
<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
  (function () {
    function resp() {
    var arrUserIP = [''];  // 차단할 아이피 입력
    var json = JSON.parse(this.responseText);
    for (var i = 0; i < arrUserIP.length; i++) {
      if (arrUserIP[i] == json.ip) {
        // 차단할 아이피 접속 시 보여줄 메시지(특정 주소로만 보내려면 아래 줄 삭제)
        alert("당신은 접속이 차단되었습니다.")
        // 다른 곳으로 보낼 URL주소 입력
        window.location.replace("http://error.com");
      }
    }
  }

  var request = new XMLHttpRequest();
  request.addEventListener("load", resp);
  request.open("GET", 'https://api.ipify.org?format=json');
  request.send();
  }());