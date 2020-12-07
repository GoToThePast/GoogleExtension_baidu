// chrome.contextMenus.create({
//     title: '大哥一下：%s', // %s表示选中的文字
//     contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
//     onclick: function(params)
//     {
//         // 注意不能使用location.href，因为location是属于background的window对象
//         chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
//     }
// });
var contentMenuItem={
    // "id":"search",
    "title": '大哥一下：%s', // %s表示选中的文字
    "contexts": ['selection']// 只有当选中文字时才会出现此右键菜单
};
chrome.contextMenus.create(contentMenuItem);
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {
    if (request.changeStyle){
        //标题加关键词rgb
        chrome.storage.sync.get(["titleColor","textColor","fontBold","fontSize"],function (result) {
            let titleColor="rgb(255, 255, 255)";
            let textColor="rgb(255, 235, 191)";
            let infoColor="rgba(255, 255, 255,0.65)";
            let fontBold="normal";
            let fontSize=14;
            if (result.titleColor)titleColor="rgb("+hexToRgb(result.titleColor)+")";
            if (result.textColor){
                textColor="rgb("+hexToRgb(result.textColor)+")";
                infoColor="rgba("+hexToRgb(result.textColor)+",0.65)";
            }
            if (result.fontBold)fontBold="bold";
            if (result.fontSize)fontSize=parseInt(result.fontSize);
            chrome.tabs.insertCSS(null,{
                code:".t{\n" +
                    "    font-size: "+(fontSize+4)+"px !important;\n" +//改变标题字体大小
                    "}\n" +
                    ".c-abstract {\n" +
                    "    font-size: "+(fontSize+1)+"px !important;\n" +//改变内容字体大小
                    "    color: "+textColor+" !important;\n" +
                    "    font-weight: "+fontBold+";"+
                    "}\n" +
                    ".c-container {\n" +
                    "   font-size: "+(fontSize+0.5)+"px !important;\n"+//改变字体大小
                    "}\n" +
                    ".c-gap-right-small{\n" +
                    "    color: "+infoColor+" !important;\n" +
                    "}\n" +
                    ".op-tieba-general-graycolor{\n" +
                    "    color: "+infoColor+" !important;\n" +
                    "}\n" +
                    ".m, a.m {\n" +
                    "    color: "+infoColor+" !important;\n" +
                    "}\n" +
                    ".c-gray {\n" +
                    "    color: "+infoColor+" !important;\n" +
                    "}\n" +
                    ".f13.se_st_footer a{\n" +
                    "    color: "+infoColor+" !important;\n" +           //改变当前条目所属的网站名颜色
                    "}\n" +
                    ".c-row span{\n" +
                    "    color: "+infoColor+" !important;\n" +          //改变新闻信息(发布者、时间)颜色
                    "}\n"+
                    ".c-showurl{\n" +
                    "    color: "+infoColor+" !important;  \n" +
                    "}\n"+

                    "h3 em{\n" +                                           //改变关键字颜色
                    "    color:"+titleColor+" !important;\n" +
                    "}\n" +
                    "div em{\n" +                                           //改变关键字颜色
                    "    color:"+textColor+" !important;\n" +
                    "}\n" +
                    "a em{\n" +                                           //改变关键字颜色
                    "    color:"+titleColor+" !important;\n" +
                    "}\n" +
                    ".op_dict3_font24.op_dict3_marginRight.c-gap-right{\n" +   //改变关键字颜色
                    "    color:"+titleColor+" !important;\n" +
                    "}\n" +
                    ".new-pmd .c-color-t {\n" +
                    "    color:"+titleColor+" !important;\n" +
                    "}"+
                    "p em{\n" +                                           //改变关键字颜色
                    "    color:"+textColor+" !important;\n" +
                    "}\n" +
                    ".c-abstract em{\n" +                                 //改变关键字颜色
                    "    color:"+textColor+" !important;\n" +
                    "}\n" +
                    ".c-abstract a{\n" +                                //改变关键字颜色
                    "    color:"+titleColor+" !important;\n" +
                    "}\n" +
                    "a{\n" +                                            //改变标题颜色
                    "    color:"+titleColor+" !important;\n" +
                    "}\n" +
                    "#content_left{\n" +                                //改变内容字体和颜色
                    "    color: "+textColor+" !important;\n" +
                    "    font-family: '楷体' !important;\n"+
                    "}\n"+
                    ".new-pmd.c-container{\n" +
                    "    color: "+textColor+" !important;\n" +          //改变内容字体和颜色
                    "}\n"+
                    ".c-color-text{\n" +
                    "    color: "+textColor+" !important;\n" +          //改变内容字体和颜色
                    "}\n"+
                    "#page a{\n" +
                    "    color:rgba(0,0,0,0.5) !important;\n" +         //改变末尾页号颜色
                    "}\n"+
					"::-webkit-scrollbar {"+
						"width: 0px;"+
						"height: 0px;"+
					"}"
            });

        })
        sendResponse("inject css success!");
    }

	if(request.hideScrollbar){
		chrome.tabs.insertCSS(null,{
                code:"::-webkit-scrollbar {"+
						"width: 0px;"+
						"height: 0px;"+
					"}"
            });
		sendResponse("hide scrollbar");
	}
});

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? parseInt(result[1], 16)+","
        +parseInt(result[2], 16)+","+parseInt(result[3], 16): null;
}
chrome.contextMenus.onClicked.addListener(function(params)
{
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
});
