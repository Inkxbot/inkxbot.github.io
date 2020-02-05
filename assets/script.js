
window.onload=function() {
    var webformat = null;
    var footer = document.createElement("footer");
    var footText = document.createTextNode("© 2017-2020 please contact @InkxtheSquid#0069 on discord for bugs and kinks");
    footer.appendChild(footText);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('uaf_client_css-css').href = "assets/mobile.css";
        document.getElementById("helpAndAdd2").size='400%';
        document.getElementById("helpAndAdd1").size='400%';
        document.getElementById("img1").style.setProperty("width","200%");
        document.getElementById("img2").style.setProperty("width","200%");
    }
    return document.getElementById("copyright").appendChild(footer)&&webformat;
}

