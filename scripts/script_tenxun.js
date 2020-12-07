window.onload=function(){
document.onkeydown =wang_MykeyDown;
function wang_MykeyDown(e) {
		var realkey = String.fromCharCode(e.which);
		if(realkey=="C")
		{
			console.log("开始加速");
			document.getElementById("x-tcp-container_html5_api").playbackRate=2.5;
		}
	}
}