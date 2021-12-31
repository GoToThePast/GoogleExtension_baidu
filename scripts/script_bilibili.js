document.onkeydown =wang_MykeyDown;
var wang_playbackIncreaseRate=0.5;
console.log("王大哥无敌");
function wang_MykeyDown(e) {
	let wang_Video=document.querySelector('video');
    let realkey = String.fromCharCode(e.which);
    if(realkey=="Z")
    {
		document.getElementsByClassName("bui-switch-input")[0].click();
    }
	if(realkey=="X")
    {
		console.log("change pause");
        document.querySelector(".bilibili-player-video video").click();
    }
	console.log(new Date().toLocaleTimeString()+" currentPlaybackRate:"+wang_Video.playbackRate);
    console.log("playbackIncreaseRate:"+wang_playbackIncreaseRate);

}