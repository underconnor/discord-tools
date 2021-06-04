var dont_remove = false;
var remove_contents_only = false;

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
    var msg = document.querySelectorAll("main>form>div>div>div>div>div>div>div>div>span>span>span")[0].innerHTML;
    msg = msg.replace("<br>", "");
    try {
        if(msg.indexOf(",dontremove ") == 0) {
            msg = msg.replace(",dontremove ", "");
            if(msg == "true") {
                dont_remove = true;
            }
            if(msg == "false") {
                dont_remove = false;
            }
        }
    }
    catch {}
    try {
        if(msg.indexOf(",removecontentsonly ") == 0) {
            msg = msg.replace(",removecontentsonly ", "");
            if(msg == "true") {
                remove_contents_only = true;
            }
            if(msg == "false") {
                remove_contents_only = false;
            }
        }
    }
    catch {}
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
    if(dont_remove) {
        return false;
    }
    for(divs = document.querySelectorAll("div."+message_div.className+">div").length - 11; divs < document.querySelectorAll("div."+message_div.className+">div").length; divs++) {
        gotdiv = document.querySelectorAll("div."+message_div.className+">div")[divs];
        if(gotdiv === undefined) {
            console.log("gotdiv is undefined. continue");
            continue;
        }
        try {
            if(gotdiv.className.indexOf("groupStart-") != -1){
                _message = gotdiv.childNodes;
                try {
                    _isblocked = _message[0].childNodes[0].childNodes[0].className.indexOf("blockedSystemMessage") != -1;
                }
                catch {
                    continue;
                }
                if(_isblocked) {
                    var outerhtml = "";
                    if(remove_contents_only) {
                        outerhtml = "<div style='color: red; font-size: large; text-align: center; font-weight: bold'>차단된 메세지</div>";
                    }
                    document.querySelectorAll("div."+message_div.className+">div")[divs].outerHTML = outerhtml;
                }
            }
        }
        catch (error){
            console.log(error);
        }
    }
}, 200);
