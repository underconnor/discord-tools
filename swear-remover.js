var divs = 0;
var message_div = null;
var gotdiv = null;
var _message = null;
var interval_is_running = false;
var blacklisted_swears = ["이것은 욕설입니다."]

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
    for(divs = document.querySelectorAll("div."+message_div.className+">div").length - 11; divs < document.querySelectorAll("div."+message_div.className+">div").length; divs++) {
        // console.log("div."+message_div.className+">div");
        // console.log(document.querySelectorAll("div."+message_div.className+">div"));
        // console.log(document.querySelectorAll("div."+message_div.className+">div").length);
        gotdiv = document.querySelectorAll("div."+message_div.className+">div")[divs];
        if(gotdiv === undefined) {
            console.log("gotdiv is undefined. continue");
            continue;
        }
        if(gotdiv.className.indexOf("message-") != -1 && gotdiv.id.indexOf("chat-messages-") != -1) {
            _message = gotdiv.childNodes;
            for(temp_1 = 0; temp_1 < _message.length; temp_1++) {
                if(_message[temp_1] === undefined) {
                    console.log("undefined. continue");
                    continue;
                }
                if(_message[temp_1].outerHTML.indexOf("<div ") == -1) {
                    console.log("it's not div. continue");
                    continue;
                }
                
                if(_message[temp_1].className.indexOf("contents-") != -1 && _message[temp_1].getAttribute("role") == "document") {
                    _childnodes = _message[temp_1].childNodes;
                    for(temp_2 = 0; temp_2 < _childnodes.length; temp_2++) {
                        if(_childnodes[temp_2].className.indexOf("markup-") != -1 && _childnodes[temp_2].className.indexOf("messageContent-")) {
                            _message_content = _childnodes[temp_2];
                            for(temp_3 = 0; temp_3 < blacklisted_swears.length; temp_3++) {
                                if(_message_content === null) {
                                    continue;
                                }
                                
                                _message_content.innerHTML = _message_content.innerHTML.replace(blacklisted_swears[0], "<span style=\"color: red;\">삐-</span>");
                            }
                            // console.log(_message_content.innerHTML);
                            
                            // console.log(_message_content);
                            break;
                        }
                    }
                }
            }
        }
    }
}, 200);
