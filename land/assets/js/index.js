$(document).ready(function () {
    startTimer();
});

function startTimer() {
    var h = $(".hour").html();
    var m = $(".min").html();
    var s = $(".sec").html();
    if (s == 0) {
        if (m == 0) {
            if (h == 0) {
                return;
            }
            h--;
            m = 59;
            if (h < 10)
                h = "0" + h;
        }
        m--;
        if (m < 10)
            m = "0" + m;
        s = 59;
    }
    else
        s--;
    if (s < 10)
        s = "0" + s;
    $(".hour").html(h);
    $(".min").html(m);
    $(".sec").html(s);
    setTimeout(startTimer, 1000);
}

$(document).ready(function(){
    /*Попап*/

    $(".top_btn").click(function () {
        $('#modal-wrap').fadeIn(300);
    });

    $(".kmacb__manager-img").click(function () {
        $('#modal-wrap').fadeIn(300);
    });

    $(".close").click(function () {
        $('#modal-wrap').fadeOut(300);
    });

    $(document).mouseup(function (e){
        var div = $(".modal-form");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('#modal-wrap').fadeOut(300);
        }
    });

    var flag = true;
    $(window).mouseout(function(e){
        if(e.pageY - $(window).scrollTop() < 1 && flag == true){
            $('#modal-wrap').fadeIn(300);
            flag = false;
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            $('#modal-wrap').fadeOut(300);
        }
    });
});
