var user_enabled = false;
var addlistener = true;
var totallength = 0;
var range_temp = 0;
setInterval(function() {
    // console.log("user_enabled: "+user_enabled);
    // console.log("addlistener"+addlistener);
    // console.log(document.querySelectorAll("form>div>div>div>div>div>div")[1]);
    if(!reply_ui_check() && document.querySelectorAll("form>div>div>div>div>div>div")[1].getAttribute("aria-checked") == "true" && user_enabled == false) {
        document.querySelectorAll("form>div>div>div>div>div>div")[1].dataset.auto = true;
        document.querySelectorAll("form>div>div>div>div>div>div")[1].click();
    }
    else if(reply_ui_check()) {
        user_enabled = false;
    }

    if(!reply_ui_check() && addlistener) {
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
    else if(reply_ui_check()){
        addlistener = true;
    }
  if(document.querySelector("#app-mount>div>div>div>div>div>div>div>button>div>span") != null) {
    document.querySelector("#app-mount>div>div>div>div>div>div>div>button>div>span").click()
  }
    if(document.querySelector("nav>div>header>h1").innerHTML == "코마공화국") {
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

function reply_ui_check() {
    return document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("buttons-") == 0 || document.querySelectorAll("form>div>div>div>div>div>div")[1].className.indexOf("attachWrapper-") == 0
}
