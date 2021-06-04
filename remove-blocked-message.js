var dont_remove = false;
var msg_scan_amount = 30;
var remove_contents_only = false;

try {
    try {
        if(document.querySelector("#app-mount>div>div>div>div>div>div>div>div>section>div>div>div>div").innerHTML == "FSanchir") {
            remove_contents_only = true;
        }
    }
    catch {}
    try {
        if(document.querySelectorAll("#app-mount>div>div>div>div>div>div>div>div>section>div")[1].childNodes[1].childNodes[0].childNodes[0].innerHTML == "FSanchir") {
            remove_contents_only = true;
        }
    }
    catch {}
    
}
catch {} // 쓸 데 없지만 뭔가 추가 예정이에요


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
    for(divs = document.querySelectorAll("div."+message_div.className+">div").length - msg_scan_amount+1; divs < document.querySelectorAll("div."+message_div.className+">div").length; divs++) {
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
                if(_isblocked && !dont_remove) {
                    var outerhtml = "";
                    if(remove_contents_only) {
                        outerhtml = "<div style='text-align: center;'><br><br><span style='color: red; font-size: large; text-align: center; font-weight: bold; margin: 1em; border: 7px solid black;'>차단된 메세지</span></div><br><br>";
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
