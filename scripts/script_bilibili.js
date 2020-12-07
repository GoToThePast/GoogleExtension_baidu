document.onkeydown =wang_MykeyDown;
var wang_playbackIncreaseRate=1;
console.log("王大哥无敌");
function wang_MykeyDown(e) {
	var wang_Video=document.querySelector('video');
    var realkey = String.fromCharCode(e.which);
    if(realkey=="Z")
    {
        var wang_all=document.querySelectorAll(".bui-switch-input");
        wang_all.forEach(function(obj)
        {
            if(obj.type=="checkbox"&&obj.ariaLabel=="")
            {
                obj.click();
            }
        });
    }
    else if(realkey=="X")
    {
        document.querySelector(".bilibili-player-video").click();
    }
    else if(realkey=="C")
    {
        if (document.querySelector('video').playbackRate<16)
            document.querySelector('video').playbackRate +=wang_playbackIncreaseRate;
        console.log("currentPlaybackRate:"+wang_Video.playbackRate);

    }
    else if(realkey=="V")
    {
        document.querySelector('video').playbackRate -= wang_playbackIncreaseRate;
        if(document.querySelector('video').playbackRate<1)
            document.querySelector('video').playbackRate=1;
        console.log("currentPlaybackRate:"+wang_Video.playbackRate);
    }
    else if(realkey=="B")
    {
        document.querySelector('video').playbackRate=1;
        console.log("currentPlaybackRate:"+wang_Video.playbackRate);
    }
    else if(realkey=="N")
    {
        wang_playbackIncreaseRate=0.5;
        console.log("playbackIncreaseRate:"+wang_playbackIncreaseRate);
    }
    else if(realkey=="M")
    {
        wang_playbackIncreaseRate=1;
        console.log("playbackIncreaseRate:"+wang_playbackIncreaseRate);
    }
}