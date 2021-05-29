var user_enabled = false;
var addlistener = true;
setInterval(function() {
    // console.log("user_enabled: "+user_enabled);
    // console.log("addlistener"+addlistener);
    // console.log(document.querySelectorAll("form>div>div>div>div>div>div")[1]);
    if(!reply_ui_check() && document.querySelectorAll("form>div>div>div>div>div>div>div")[1].getAttribute("aria-checked") == "true" && user_enabled == false) {
        document.querySelectorAll("form>div>div>div>div>div>div>div")[1].dataset.auto = true;
        document.querySelectorAll("form>div>div>div>div>div>div>div")[1].click();
    }
    else if(reply_ui_check()) {
        user_enabled = false;
    }

    if(!reply_ui_check() && addlistener) {
        document.querySelectorAll("form>div>div>div>div>div>div>div")[1].addEventListener("click", function() {
            var it = document.querySelectorAll("form>div>div>div>div>div>div>div")[1];
            if(it.dataset.auto !== undefined && it.dataset.auto == true) {
                it.dataset.auto == false;
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
        return document.querySelectorAll("form>div>div>div>div>div>div>div")[1].className.indexOf("buttons-") == 0 || document.querySelectorAll("form>div>div>div>div>div>div>div")[1].className.indexOf("attachWrapper-") == 0;
    }
    catch {
        return true;
    }
    
}
