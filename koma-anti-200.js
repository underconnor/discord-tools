var totallength = 0;
var range_temp = 0;
setInterval(function() {
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
