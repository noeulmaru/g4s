function check_captcha(input_key)
{
    if (typeof(input_key) != "undefined") {
        var captcha_result = false;
        $.ajax({
            type: "POST",
            url: g4_path+"/plugin/captcha/get.php",
            data: { "captcha_key": input_key.value },
            cache: false,
            async: false,
            success: function(result) {
                captcha_result = result;
            }
        });
        if (!captcha_result) {
            alert("숫자가 틀렸거나 입력 횟수가 넘었습니다.\n\n이미지를 클릭하여 다시 입력해 주십시오.");
            input_key.select();
            return false;
        }
    }
    return true;
}

$(function() {
    $("#captcha").click(function(e) {
        this.setAttribute("src", g4_path+"/plugin/captcha/run.php?t="+(new Date).getTime());
        var keycode = (e.keyCode ? e.keyCode : e.which);
        // 첫 실행에서는 포커스를 주지 않음
        if (typeof(keycode) != "undefined") {
            $("#captcha_key").focus();//이미지 새로고침 후 입력박스에 포커스 : 지운아빠 2012-07-13
        }
    })
    .css("cursor", "pointer")
    .trigger("click");

    $("#captcha_wav").click(function(){
        $("body").css("cursor", "wait");

        var wav_url = this.href+"?t="+new Date().getTime();

        var html5use = false;
        var html5audio = document.createElement("audio");
        if (html5audio.canPlayType && html5audio.canPlayType("audio/wav")) {
            var wav = new Audio(wav_url);
            wav.id = "wav_audio";
            wav.autoplay = true;
            wav.controls = false;
            wav.autobuffer = false;
            wav.loop = false;
            
            if ($("#wav_audio").length) $("#wav_audio").remove();
            $("#captcha_wav").after(wav);

            html5use = true;
        } 
        
        if (!html5use) {
            var object = '<object id="wav_object" classid="clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95" height="0" width="0" style="width:0; height:0;">';
            object += '<param name="AutoStart" value="1" />';
            object += '<param name="Volume" value="0" />';
            object += '<param name="PlayCount" value="1" />';
            object += '<param name="FileName" value="' + wav_url + '" />';
            object += '<embed id="wav_embed" src="' + wav_url + '" autoplay="true" hidden="true" volume="100" type="audio/x-wav" style="display:inline;" />';
            object += '</object>';
            if ($("#wav_object").length) $("#wav_object").remove();
            $("#captcha_wav").after(object);
        }
        
        $("body").css("cursor", "default");
        return false;
    });
});