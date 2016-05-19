$(function () {
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $("#h-tab1").css("color","#fff");

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css("color", "#333");
        $(this).addClass("active").css("color", "#fff");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
});


$("#tab1 .action-area #number_tab1, #tab1 .action-area #percent_tab1").change(function(){
   doCalc_tab1();
});

$("#tab2 .action-area #number_tab2, #tab2 .action-area #percent_tab2").change(function(){
    doCalc_tab2();
});

$("#tab3 .action-area #number_tab3, #tab3 .action-area #percent_tab3").change(function(){
    doCalc_tab3();
});

$("#tab4 .action-area #number_tab4, #tab4 .action-area #percent_tab4").change(function(){
    doCalc_tab4();
});

function doCalc_tab1(){
    $("#result-tab1").text('');

    var number = $("#number_tab1").val();
    var percent = $("#percent_tab1").val();

    if(number != "" && percent != "" || number != 0 && percent != 0)
    {
        var result = number*percent/100;

        $("#result-tab1").append(result).css({'color':'#000','font-weight':'600','font-size':'20px'});
        $("#number_tab1, #percent_tab1").val("");
    }
    else
    {
        $("#result-tab1").append("값을 제대로 입력해주세요").css({'color':'#FF0000','font-size':'13px'});
    }
}

function doCalc_tab2(){
    $("#result-tab2").text('');

    var number = $("#number_tab2").val();
    var percent = $("#percent_tab2").val();

    if(number != "" && percent != "" || number != 0 && percent != 0)
    {
        var result = percent/number*100;

        $("#result-tab2").append(result+"%").css({'color':'#000','font-weight':'600','font-size':'20px'});
        $("#number_tab2, #percent_tab2").val("");
    }
    else
    {
        $("#result-tab2").append("값을 제대로 입력해주세요").css({'color':'#FF0000','font-size':'13px'});
    }
}

function doCalc_tab3(){
    $("#result-tab3").text('');

    var number = $("#number_tab3").val();
    var percent = $("#percent_tab3").val();

    if(number != "" && percent != "" || number != 0 && percent != 0)
    {
        var result = number*(1+percent/100);

        $("#result-tab3").append(result+"%").css({'color':'#000','font-weight':'600','font-size':'20px'});
        $("#number_tab3, #percent_tab3").val("");
    }
    else
    {
        $("#result-tab3").append("값을 제대로 입력해주세요").css({'color':'#FF0000','font-size':'13px'});
    }
}

function doCalc_tab4(){
    $("#result-tab4").text('');

    var number = $("#number_tab4").val();
    var percent = $("#percent_tab4").val();

    if(number != "" && percent != "" || number != 0 && percent != 0)
    {
        var result = number * (1-percent/100);

        $("#result-tab4").append(result+"%").css({'color':'#000','font-weight':'600','font-size':'20px'});
        $("#number_tab4, #percent_tab4").val("");
    }
    else
    {
        $("#result-tab4").append("값을 제대로 입력해주세요").css({'color':'#FF0000','font-size':'13px'});
    }
}