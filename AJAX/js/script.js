$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        const key = "49d25bfc9b7042e6b1a1d0130ef68df4";
        $.ajax({
            url: 'http://data.fixer.io/api/latest?access_key=' + key,
            datatype: "jsonp",
            success: function(json){
                var money=$("#money").val();
                var from=$("#from").find(":selected").val();
                var to=$("#to").find(":selected").val();
                var gbpRate=json.rates.GBP;
                var usdRate=json.rates.USD;
                if(from=="EUR" && to=="GBP"){
                    var converted=gbpRate*money;
                    converted=converted.toFixed(2);
                    $("#answer").text(converted+" "+to);
                }
                else if(from=="EUR" && to=="USD"){
                    var converted=usdRate*money;
                    converted=converted.toFixed(2);
                    $("#answer").text(converted+" "+to);
                }
                else if(from=="USD" && to=="EUR"){
                    var converted=money/usdRate;
                    converted=converted.toFixed(2);
                    $("#answer").text(converted+" "+to);
                }
                else if(from=="GBP" && to=="EUR"){
                    var converted=money/gbpRate;
                    converted=converted.toFixed(2);
                    $("#answer").text(converted+" "+to);
                }                
            },
            fail: function(xhr, statusText, body){
                console.log(body);
            }
        });
    });
});