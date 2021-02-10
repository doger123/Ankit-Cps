var first = false
var clicks = 0
var cps = document.querySelector('.clicks')
var avargecps = 0

function clicked() {
    if (first === false) {
        clicks++;
        cps.innerHTML = clicks;
    }

    setTimeout(() => {
        avargecps = clicks/5
        first = true
        cps.innerHTML = avargecps + " CPS"

        var params = {
            content: "random-person-cps: " + avargecps
          }

          request.send(JSON.stringify(params));

}, 5000);

};


var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/809086710511566889/Pp_leAjGU5ecsWodZMu82NgX-araHPbm-FVtPOMjGKbAjnsUFK5-wz1Pofu9aFKrQCix");

request.setRequestHeader('Content-type', 'application/json');



