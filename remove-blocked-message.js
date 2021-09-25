var dont_remove = false;
var msg_scan_amount = 30;
var remove_contents_only = false;

try {
    try {
        if(document.querySelectorAll("#app-mount>div>div>div>div>div>div>div>div>section")[0].childNodes[2].childNodes[1].childNodes[0].innerText == "FSanchir") {
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

message_ol = document.querySelectorAll("ol")[0];

Interval_MsgRemover = setInterval(function() {
    try {
        var msg = document.querySelectorAll("main>form>div>div>div>div>div>div>div>div>span>span>span")[0].innerHTML;
    }
    catch {
        return;
    }
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
        message_ol.getAttribute("aria-label").indexOf("의 메세지")
    }
    catch {
        message_ol = document.querySelectorAll("ol")[0]
    }
     // for(divs = document.querySelectorAll("ol."+message_ol.className+">div").length - msg_scan_amount+1; divs < document.querySelectorAll("ol."+message_ol.className+">div").length; divs++) {
    for(divs = 0; divs < document.querySelectorAll("ol."+message_ol.className+">div").length; divs++) {
        gotdiv = document.querySelectorAll("ol."+message_ol.className+">div")[divs];
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
                    console.log("Removed Chat!");
                    document.querySelectorAll("ol."+message_ol.className+">div")[divs].outerHTML = outerhtml;
                }
            }
        }
        catch (error){
            console.log(error);
        }
    }
}, 200);
