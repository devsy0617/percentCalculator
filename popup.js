//버튼을 눌렀을 때
$("#calc-btn").click(function(e){
    doCalc();
});

//엔터키 눌렀을 때
$(document).keypress(function (e) {
    if (e.which == 13) {
        doCalc();
    }
});


//퍼센트 계산 함수
function doCalc(){
    $(".result-area").text('');

    var number = $("#number").val();
    var percent = $("#percent").val();

    if(number != "" && percent != "" || number != 0 && percent != 0)
    {
        var result = number*percent/100;

        $(".result-area").append(result);
        $("#number, #percent").val("");
    }
    else
    {
        $(".result-area").append("값을 제대로 입력해주세요");
    }
}

