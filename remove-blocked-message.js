// 

for(divs = 0; divs < document.querySelectorAll("div").length; divs++) {
    if(document.querySelectorAll("div")[divs].getAttribute("aria-label") == null) {
        continue;
    }
    if(document.querySelectorAll("div")[divs].getAttribute("aria-label").indexOf("의 메시지") != -1) {
        message_div = document.querySelectorAll("div")[divs];
        break;
    }
}

setInterval(function() {
    try {
        message_div.getAttribute("aria-label").indexOf("의 메세지")   
    }
    catch {
        for(divs = 0; divs < document.querySelectorAll("div").length; divs++) {
            if(document.querySelectorAll("div")[divs].getAttribute("aria-label") == null) {
                continue;
            }
            if(document.querySelectorAll("div")[divs].getAttribute("aria-label").indexOf("의 메시지") != -1) {
                message_div = document.querySelectorAll("div")[divs];
                break;
            }
        }
    }
    for(divs = document.querySelectorAll("div."+message_div.className+">div").length - 11; divs < document.querySelectorAll("div."+message_div.className+">div").length; divs++) {
        // console.log("div."+message_div.className+">div");
        // console.log(document.querySelectorAll("div."+message_div.className+">div"));
        // console.log(document.querySelectorAll("div."+message_div.className+">div").length);
        gotdiv = document.querySelectorAll("div."+message_div.className+">div")[divs];
        if(gotdiv === undefined) {
            console.log("gotdiv is undefined. continue");
            continue;
        }
        try {
            if(gotdiv.className.indexOf("groupStart-") != -1){
                _message = gotdiv.childNodes;
                _isblocked = _message[0].childNodes[0].childNodes[0].className.indexOf("blockedSystemMessage") != -1;
                if(_isblocked) {
                    document.querySelectorAll("div."+message_div.className+">div")[divs].outerHTML = "";
                }
            }
        }
        catch {
            console.log("error but ignored");
        }
    }
}, 200);
