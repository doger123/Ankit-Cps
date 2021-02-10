var active = true
var first = false
var clicks = 0
const cps = document.querySelector('.clicks')
var avargecps = 0


function clicked() {
    if (first === false) {
        clicks++;
        cps.innerHTML = clicks;
    }
    if (active === true) {
        setTimeout(() => {
            avargecps = clicks/5
            first = true
            cps.innerHTML = avargecps + " CPS"
    
            document.getElementById("SendButton").disabled = false;

    
    }, 5000);
    }
    active = false;


};

function SendDiscord() {
    document.getElementById("SendButton").disabled = true;

    var params = {
        content: "random-person-cps: " + avargecps,
        avatar_url:"https://doger123.github.io/Ankit-Cps/"
    }

var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/809127464025718814/sX3uIo-9dVQ70jbMIkJwSJSILc-kr85aY6-PdBoU6647KwLLwbkfP1IThmf2Or8ZyOhz");

request.setRequestHeader('Content-type', 'application/json');

request.send(JSON.stringify(params));

}






