var user_enabled = false;
var addlistener = true;
setInterval(function() {
    if(document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("buttons-") == -1 && document.querySelectorAll("form>div>div>div>div>div>div")[1].getAttribute("aria-checked") == "true" && user_enabled == false) {
        document.querySelectorAll("form>div>div>div>div>div>div")[1].dataset.auto = true;
        document.querySelectorAll("form>div>div>div>div>div>div")[1].click();
    }
    else if(document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("buttons-") == 0) {
        user_enabled = false;
    }

    if(document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("buttons-") == -1 && addlistener) {
        document.querySelectorAll("form>div>div>div>div>div>div")[1].addEventListener("click", function() {
            var it = document.querySelectorAll("form>div>div>div>div>div>div")[1];
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
    else if(document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("buttons-") == 0){
        addlistener = true;
    }
}, 200);

