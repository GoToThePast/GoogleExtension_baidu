window.onload=function() {
    console.log("王大哥百度");
	chrome.runtime.sendMessage({"hideScrollbar": 'true'},function (response) {
                console.log(response);
            });
    var wrapper_wang = document.getElementById("wrapper");
    if (wrapper_wang){
        let head_wang = document.getElementById("head");
        let div_wang = document.createElement("div");
        wrapper_wang.insertBefore(div_wang, head_wang);
        div_wang.style.position = "fixed";
        div_wang.style.zIndex = "-100";
        div_wang.style.width = "100%";
        //div_wang.style.height = window.screen.height + "px";
		div_wang.style.height = "100%";
        chrome.storage.sync.get("imgIndex",function (para) {
            let img_wang=5;
            if (para.imgIndex!=null&&img_wang>0&&img_wang<=10)img_wang=parseInt(para.imgIndex);
            //设置背景壁纸
            div_wang.style.backgroundImage = "url('https://gitee.com/iamtrying/chrome-extension-we/raw/master/img/"+img_wang+".jpg')";
			div_wang.style.backgroundSize = "cover";
            head_wang.style.backgroundImage = "url('https://gitee.com/iamtrying/chrome-extension-we/raw/master/img/"+img_wang+".jpg')";
            head_wang.style.backgroundSize = "cover";
			//覆盖background属性，使背景透明
			head_wang.style.background = "border-box";
        });
        
        //消除主页上多余的样式
        var hidden_wang=document.getElementById("s_top_wrap");
        var hot_wang=document.getElementById("s-hotsearch-wrapper");
        if (hidden_wang)hidden_wang.style.display = "none";
        hidden_wang=document.getElementById("lg"); //隐藏百度知道图片
        if (hidden_wang){
            hidden_wang.style.display = "none";
        }
        if (hot_wang){
            //关闭热榜
            hot_wang.style.display = "none";
        }
        var no_wang=document.getElementById("head_wrapper");
        if (no_wang)
        {
            no_wang.className+=" s-ps-islite";
            no_wang=document.getElementById("kw");
            no_wang.style.backgroundColor="rgba(0,0,0,0)";
            no_wang.previousSibling.style.backgroundColor="rgba(0,0,0,0)";
        }

        //消除主页上多余的东西
        hidden_wang=document.getElementById("s-top-left");
        if (hidden_wang)hidden_wang.style.display = "none";
        hidden_wang=document.getElementById("s_side_wrapper");
        if (hidden_wang)hidden_wang.style.display = "none";
        hidden_wang=document.getElementById("bottom_layer");
        if (hidden_wang)hidden_wang.style.display = "none";
        hidden_wang=document.getElementById("content_right");
        if (hidden_wang)hidden_wang.style.display = "none";
    }


    //定义三个全局变量
    firstText_wang="";   //记录当前搜索结果的第一个词条内容
    time_wang=null;      //记录检测定时器次数
    timeDelay_wang=null; //记录样式改变定时器次数
    hid_wang=document.getElementById("wrapper_wrapper");
    if (hid_wang)hid_wang.style.display="none";
    var h3_wang=document.getElementsByTagName("h3");
    if (h3_wang.length!=0)firstText=h3_wang[0].innerText;

    /**
     * 检测回车是否按下(开始百度一下),如果按下，开始检测结果是否显示成功(第一个词条的内容发生了改变便认为搜索完毕)
     * @type {wang_MykeyDown}
     */
    document.onkeydown =wang_MykeyDown;
    function wang_MykeyDown(e) {
        if(e.which==13)
        {
            if (hid_wang)hid_wang.style.display="none";
            check_wang(0);
        }
    }

    /**
     * 点击提交按钮改变样式
     */
    document.getElementById("su").onmousedown=function(){
        console.log("点击");
        if (hid_wang)hid_wang.style.display="none";
        check_wang(200);
    }
    /**
     * 点击搜索框提示
     * @param event
     */
    document.onmousedown=function(event){
        if(event.button==0)
        {
            check_wang(200);
        }
    }


    /**
     * 在刷新页面后改变样式
     */
	 check_wang(100);
    //检测是否可以改变样式
    function check_wang(delayTime) {
        changeStyle_wang(500);
        changeStyle_wang(1000);
        changeStyle_wang(1800);
        console.log("开始检测");
        var endTime=0;
        clearInterval(time_wang);
        time_wang=setInterval(function () {
            //检测5秒后关闭
            if (++endTime==100)
            {
                clearInterval(time_wang);
                console.log("停止检测");
            }
            var h3_wang=document.getElementsByTagName("h3");
            if (h3_wang.length!=0&&firstText_wang!=h3_wang[0].innerText)
            {
                firstText_wang=h3_wang[0].innerText;
                changeStyle_wang(delayTime);
            }
        },50);
    }
    of_wang=document.body.clientWidth/2-280-140;
    //延迟多少时间改变样式，默认为0
    function changeStyle_wang(delayTime) {
        timeDelay_wang=setTimeout(function () {
            var page_wang = document.getElementById("page");
            if (page_wang) {
				document.getElementById("head").style.background=" "
				//样式已经改变则取消改变
                if (getComputedStyle(document.getElementById("page"), null)["paddingLeft"] == of_wang+"px") return;

                //使主要内容居中并透明
                page_wang.style.backgroundColor = "rgba(255,255,25,0)";
                page_wang.style.paddingLeft = of_wang+"px"
            }
            else
                return;
            //请求background注入css
            chrome.runtime.sendMessage({"changeStyle": 'true'},function (response) {
                console.log(response);
            });
            var left_wang = document.getElementById("content_left");
            var hidden_wang=document.getElementById("content_right");
            var foot_wang = document.getElementById("foot");
            var rs_wang = document.getElementById("rs");

            if (left_wang) {
                left_wang.style.visibility="hidden";
                left_wang.style.paddingLeft = of_wang+"px";
                //以下样式在注入的css里修改
                // left_wang.style.fontFamily = "楷体";
				// left_wang.style.color = textColor;

            }

            if (hidden_wang)hidden_wang.style.display = "none"; //隐藏搜索内容旁边的相关人物、热门内容
            if (foot_wang) foot_wang.style.display = "none";    //隐藏最下边的帮助、用户反馈栏

            //改变末尾相关搜索背景并使其居中
            if (rs_wang) {
                rs_wang.style.backgroundColor = "rgba(255,255,25,0)";
                rs_wang.style.marginLeft = of_wang+"px";
            }

            if (left_wang) {
                left_wang.style.visibility = "visible";
            }
            if (hid_wang)hid_wang.style.display="block";

            //修改提示
			console.log("样式改变成功--"+delayTime);
			clearInterval(time_wang);
            console.log("终止检测");
        },delayTime||0);
    }

}