window.onload=function () {
    let save = document.getElementById("save");
    let select = document.getElementById("imgIndex");
    let titleColor = document.getElementById("titleColor");
    let textColor = document.getElementById("textColor");
    let fontBold = document.getElementById("fontBold");
    let fontSize = document.getElementById("fontSize");
    let hover = document.getElementById("hover");
    let down = document.getElementById("down");
    let tip = document.getElementById("tip");
    save.onmouseenter=function(){
        hover.play();
    }
    chrome.storage.sync.get(["imgIndex","titleColor","textColor","fontBold","fontSize"],function (result) {
        if (result.imgIndex)
            select.options[parseInt(result.imgIndex)-1].selected=true;
        if (result.titleColor)
            titleColor.value=result.titleColor;
        if (result.textColor)
            textColor.value=result.textColor;
        if (result.fontBold)
            fontBold.checked=result.fontBold;
        if (result.fontSize)
            fontSize.value=result.fontSize;
    })
    save.onmousedown=function () {
        chrome.storage.sync.set(
            {
                "imgIndex":select.options[select.selectedIndex].value,
                "titleColor":titleColor.value,
                "textColor":textColor.value,
                "fontBold":fontBold.checked,
                "fontSize":fontSize.value
            },
            function () {
                down.play();
                tip.style.visibility="visible";
                setTimeout(function () {
                    tip.style.visibility="hidden";
                    close();
                    },1000);
            });
    }
}