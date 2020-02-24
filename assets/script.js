
$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('#uaf_client_css-css').attr("href","assets/mobile.css");
        $("#helpAndAdd2").prop("size", "400%");
        $("#helpAndAdd1").prop("size", "400%");
        $("#img1").css("width","100%");
        $("#img2").css("width","100%");
    }else{
        if ($(window).height()>=screen.height-1) {
            if ($(".fullPage").height()>screen.height-2){ $("#copyright").css("position","inherit");}
            else {$("#copyright").css("position","absolute");}
        } else{
            if ($(".fullPage").height()>$(window).height()){ $("#copyright").css("position","inherit");}
            else {$("#copyright").css("position","absolute");}
        }
    }
    $("#copyright").append("<footer>© 2017-2020 please contact @InkxtheSquid#0069 on discord for bugs and kinks</footer>");
    try{
        $("#guidebox").toggle();
    }catch(err){
        console.log("this is not the guide page, this try statement will be ignored")
    }
    $("#popup_scoring").click(function() {
        $("#guidebox").toggle();
        $("#guidebox").delay("fast").animate({
                opacity: '1'
            }, "fast");
    });

    $(".close_box").click(function() {
        $("#guidebox").animate({
                opacity: '0'
            }, "fast");
        $("#guidebox").delay(250).toggle(1);
    });
    $("#homePage").click(function() {
        $("#load").toggle();
        $("#load").delay("slow").animate({
                opacity: '0'
            }, "slow").delay(500);
        window.location.href="index.html";
    });
    $("#setupPage").click(function() {
        $("#load").toggle();
        $("#load").delay("slow").animate({
                opacity: '0'
            }, "slow").delay(500);
        window.location.href="guides.html";
    });
    $("#load").delay("slow").animate({
            opacity: '0'
        }, "slow");
    $("#load").toggle(1);
});

$(window).on('resize', function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('#uaf_client_css-css').attr("href","assets/mobile.css");
        $("#helpAndAdd2").prop("size", "400%");
        $("#helpAndAdd1").prop("size", "400%");
        $("#img1").css("width","100%");
        $("#img2").css("width","100%");
    }else{
        $('#uaf_client_css-css').attr("href","assets/style.css");
        $("#helpAndAdd2").prop("size", "5%");
        $("#helpAndAdd1").prop("size", "5%");
        $("#img1").css("width","100%");
        $("#img2").css("width","100%");
        console.log($(this).height());
        if ($(this).height()>=screen.height-1) {
            if ($(".fullPage").height()>screen.height-2){ $("#copyright").css("position","inherit");}
            else {$("#copyright").css("position","absolute");}
        } else{
            if ($(".fullPage").height()>$(this).height()){ $("#copyright").css("position","inherit");}
            else {$("#copyright").css("position","absolute");}
        }
    }
});
