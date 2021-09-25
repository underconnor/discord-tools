// 한번에 작동시키는 코드로, 업데이트가 늦을 수 있으며, 버그 또한 존재할 수 있습니다.
var dont_remove = false;
var msg_scan_amount = 30;
var remove_contents_only = false;
var user_enabled = false;
var addlistener = true;
var button = "form>div>div>div>div>div>div>div>div>div>div";
var b_div = "form>div>div>div>div>div>div>div>div>div";
var totallength = 0;
var range_temp = 0;
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

setInterval(function() {
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

setInterval(function() {


    if(!reply_ui_check() && document.querySelectorAll(button)[1].getAttribute("aria-checked") == "true" && user_enabled == false) {
        document.querySelectorAll(b_div)[1].dataset.auto = true;
        document.querySelectorAll(button)[1].click();
        console.log("Auto-Disabled Reply Mention!");
    }
    else if(reply_ui_check()) {
        user_enabled = false;
    }

    if(!reply_ui_check() && addlistener) {
        document.querySelectorAll(b_div)[1].addEventListener("click", function() {
            if(document.querySelectorAll(b_div)[1].dataset.auto !== undefined && document.querySelectorAll(b_div)[1].dataset.auto == true) {
                document.querySelectorAll(b_div)[1].dataset.auto == false;
                user_enabled = false;
            }
            else {
                user_enabled = true;
            }
        });
        addlistener = false;
    }
    else if(reply_ui_check()){
        addlistener = true;
    }
}, 200);

function reply_ui_check() {
    try {
        return document.querySelectorAll(b_div)[1].className.indexOf("actions-") != 0;
        //  || document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("attachWrapper-") == 0;
    }
    catch {
        return true;
    }
    
}
setInterval(function() {
    if(document.querySelector("nav>div>header>h1") != null && document.querySelector("nav>div>header>h1").innerHTML == "코마공화국") {
        totallength = 0;
        for(range_temp = 0; range_temp < document.querySelectorAll("main>form>div>div>div>div>div>div>div>div>span>span>span").length; range_temp++) {
            totallength += document.querySelectorAll("main>form>div>div>div>div>div>div>div>div>span>span>span")[range_temp].innerHTML.length;
        }
        if(totallength > 199) {
            for(range_temp = 0; range_temp < document.querySelectorAll("main>form>div>div>div>div>div>div>div>div>span>span>span").length; range_temp++) {
                document.querySelectorAll("main>form>div>div>div>div>div>div>div>div>span>span>span")[range_temp].style = "color: red;";
            }
        }
        else {
            if(document.querySelector("main>form>div>div>div>div>div>div>div>div>span>span>span").style == "color: red;") {
                document.querySelector("main>form>div>div>div>div>div>div>div>div>span>span>span").style = "color: white;";
            }
        }
    }
}, 200);
setInterval(function() {
    if(document.querySelector("#app-mount>div>div>div>div>div>div>div>button>div>span") != null) {
      document.querySelector("#app-mount>div>div>div>div>div>div>div>button>div>span").click()
      console.log("Attachment Sent!");
    }
  }, 200);
  