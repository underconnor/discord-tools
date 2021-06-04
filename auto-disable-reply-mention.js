var user_enabled = false;
var addlistener = true;
setInterval(function() {
    var mention_button = document.querySelectorAll("form>div>div>div>div>div>div>div")[1];
    var mention_button_div = document.querySelectorAll("form>div>div>div>div>div>div")[1];
    if(!reply_ui_check() && mention_button.getAttribute("aria-checked") == "true" && user_enabled == false) {
        mention_button_div.dataset.auto = true;
        mention_button.click();
    }
    else if(reply_ui_check()) {
        user_enabled = false;
    }

    if(!reply_ui_check() && addlistener) {
        mention_button_div.addEventListener("click", function() {
            if(mention_button_div.dataset.auto !== undefined && mention_button_div.dataset.auto == true) {
                mention_button_div.dataset.auto == false;
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
        return document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("buttons-") == 0 || document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("attachWrapper-") == 0;
    }
    catch {
        return true;
    }
    
}
