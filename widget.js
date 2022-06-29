var ch_head = document.getElementsByTagName("head")[0];
var ch_body = document.getElementsByTagName("body")[0];

function startUp() {

    let attri = document.currentScript.getAttribute('CLIENT_ID');

    var app = document.createElement("div");
    app.setAttribute("id", "chatbot");

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "http://192.168.1.22:8079/css/main.e6c13ad2.css";

    var s = document.createElement("script");
    s.defer = true;
    s.setAttribute('CLIENT_ID',attri);
    s.src = "http://192.168.1.22:8079/js/main.ab7589f5.js";

        ch_body.appendChild(app);
        ch_head.appendChild(link);
        ch_body.appendChild(s);
} 
startUp();









