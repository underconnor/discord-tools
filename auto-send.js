setInterval(function() {
  if(document.querySelector("#app-mount>div>div>div>div>div>div>div>button>div>span") != null) {
    document.querySelector("#app-mount>div>div>div>div>div>div>div>button>div>span").click()
    console.log("Attachment Sent!");
  }
}, 200);
