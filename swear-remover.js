var divs = 0;
var message_div = null;
var gotdiv = null;
var _message = null;
var interval_is_running = false;
var blacklisted_swears = ["씨발", "개새끼", "병신", "ㅄ", "좆", "ㅆㅂ", "ㅅㅂ", "애미", "ㅂㅅ"]

var message_ol = document.querySelectorAll("ol")[0];

setInterval(function() {
    try {
        message_ol.getAttribute("aria-label").indexOf("의 메세지")
    }
    catch {
        message_ol = document.querySelectorAll("ol")[0]
    }

    for(lis = document.querySelectorAll("ol."+message_ol.className+">li").length - 11; lis < document.querySelectorAll("ol."+message_ol.className+">li").length; lis++) {
        gotli = document.querySelectorAll("ol."+message_div.className+">li")[lis];
        if(gotli === undefined || gotli == null) {
            console.log("gotli is undefined. continue");
            continue;
        }
        if(gotli.id.indexOf("chat-messages-") != -1) {
            _message = gotli.childNodes;
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
                            if(_message_content === null) {
                                continue;
                            }
                            for(temp_3 = 0; temp_3 < blacklisted_swears.length; temp_3++) {
                                if(_message_content.dataset.modified !== undefined && _message_content.dataset.modified) {
                                    continue;
                                }
                                nowcont = _message_content.innerHTML;
                                content = "<span style='color: red;'>삐-</span>"
                                // content = "<span style='color: red;' onmouseover='this.innerHTML = \""+blacklisted_swears[temp_3]+"\";' onmouseout='this.innerHTML = \"삐-\"'>삐-</span>";
                                if(_message_content.innerHTML.indexOf(blacklisted_swears[temp_3]) != -1) {
                                    _message_content.innerHTML = _message_content.innerHTML.replace(new RegExp(blacklisted_swears[temp_3], "g"), content);
                                }
                                
                                if(_message_content.innerHTML != nowcont) {
                                    _message_content.dataset.modified = true;
                                }
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
