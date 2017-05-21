/**
 * Created by User on 2017/4/6.
 */
$(function(){

    $(".webApp-04-fixed-radio label").each(function(i){

        $(this).click(function(){
            $(".tabs-hidden-show").eq(i).show().siblings(".tabs-hidden-show").hide();
        });

    });

})