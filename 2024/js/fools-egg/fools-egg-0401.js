!function () {
    var isLightMode = !window.matchMedia("(prefers-color-scheme: dark)").matches

    var date = new Date()
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var isFoolsDay = ((month == 4) && (day == 1));

    console.log(isLightMode, isFoolsDay)

    if (!isLightMode) return 0;
    if (!isFoolsDay) return 0;

    var script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.src = "https://gcore.jsdelivr.net/gh/seiki-yui/x-cdn/2024/js/fools-egg/fools-egg.js";
    document.getElementsByTagName("head")[0].appendChild(script); 
}()