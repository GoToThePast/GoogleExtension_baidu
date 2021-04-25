document.onkeydown =wang_MykeyDown;
var wang_playbackIncreaseRate=0.5;
console.log("王大哥无敌");
function wang_MykeyDown(e) {
	let wang_Video=document.querySelector('video');
    let realkey = String.fromCharCode(e.which);
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
    
    else if(realkey=="C")
    {
        if (wang_Video.playbackRate<16){
            wang_Video.playbackRate =Math.round((wang_Video.playbackRate+wang_playbackIncreaseRate)*100)/100;
			}
    }
    else if(realkey=="V")
    {
        wang_Video.playbackRate = Math.round((wang_Video.playbackRate-wang_playbackIncreaseRate)*100)/100;
        if(wang_Video.playbackRate<1)
            wang_Video.playbackRate=1;
    }
    else if(realkey=="B")
    {
        wang_Video.playbackRate=1;
    }
    else if(realkey=="N")
    {
        wang_playbackIncreaseRate=0.5;
    }
    else if(realkey=="M")
    {
        wang_playbackIncreaseRate=1;
    }
	else if(realkey=="L")
    {
        wang_playbackIncreaseRate=0.1;
    }
	else if(realkey=="A")
    {
		alert("当前倍数:"+wang_Video.playbackRate);
    }

	if(realkey=="X")
    {
		console.log("change pause");
        document.querySelector(".bilibili-player-video video").click();
    }
	console.log(new Date().toLocaleTimeString()+" currentPlaybackRate:"+wang_Video.playbackRate);
    console.log("playbackIncreaseRate:"+wang_playbackIncreaseRate);

}