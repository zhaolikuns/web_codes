/**
 * Created by User on 2017/4/5.
 */

$(function(){

    //获取短信验证码
    var $validMessage = $(".valid-message");
    var codes = "";
    var validCode=true;
    $("button.valid-message").bind("click",function(){
        var phone=$(".phone").val();//手机号码
        var time=60;
        var code=$(this);
        if (phone != "") {
            validCode=false;
            code.addClass("msgs1");
            var times=setInterval(function(){
                time--;
                code.html(time+"秒");
                if (time==0) {
                    clearInterval(times);
                    code.html("重新获取");
                    validCode=true;
                    code.removeClass("msgs1");
                }
            },1000);
            $.ajax({
                type: "POST", //用POST方式传输
                dataType: "text", //数据格式:JSON
                url: '', //目标地址
                data: "phone=" + phone + "&codes=" + codes,
                error: function (XMLHttpRequest, textStatus, errorThrown) { },
                success: function (msg){ }
            });
        }else {
            alert("手机号码不能为空");
        }
    })




});