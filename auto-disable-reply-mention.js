var user_enabled = false;
var addlistener = true;
setInterval(function() {
    var button = "form>div>div>div>div>div>div>div>div>div>div";
    var b_div = "form>div>div>div>div>div>div>div>div>div";

    if(!reply_ui_check() && document.querySelectorAll(button)[1].getAttribute("aria-checked") == "true" && user_enabled == false) {
        document.querySelectorAll(b_div)[1].dataset.auto = true;
        document.querySelectorAll(button)[1].click();
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
