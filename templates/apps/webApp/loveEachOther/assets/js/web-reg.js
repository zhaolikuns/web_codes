/**
 * Created by User on 2017/4/5.
 */
$(function(){

    var user = false;
    var ph = false;
    var pwd = false;
    $("#userName").blur(function(){
        var $uName = $(this).val();
        var $regName = /^[a-zA-Z]{1,20}$/;
         if(!$regName.exec($uName) ){
            alert("请输入正确的用户名");
            return false;
        }else{
             user = true;
             return true;
         }
    });
    $("#phone").blur(function(){
        var $phone = $(this).val();
        var $regName = /^1[3,4,5,7,8,9]\d{9}$/;
         if(!$regName.exec($phone) ){
            alert("请输入正确的手机号");
            return false;
        }else{
             ph = true;
             return true;
         }
    });
    $("#passWord").blur(function(){
        var $passWord = $(this).val();
        var $regName = /^[A-Za-z0-9]{6,20}$/;
         if(!$regName.exec($passWord) ){
            alert("请输入正确的密码");
            return false;
        }else{
             pwd = true;
             return true;
         }
    });

    $(".submits").click(function(){
        if( user && ph  && pwd  ){
            $("#formSubmit").submit();
        }else{
            alert("请填写信息");
            return false;
        }
    });

})