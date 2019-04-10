
var btnLanguage = $(".btn-language");
var languageList = $(".language-list");
var languageItem = $(".language-item");
var item = $(".menu-item");
var submenu = $(".submenu");
var submenuItem = $(".submenu-item")

// 언어선택 버튼 컨트롤
btnLanguage.on("click keyup", function(e){
    e.preventDefault();
    languageList.css({"display":"block"});
});

languageItem.on("click keyup", function(e){
    e.preventDefault();
    if(e.keyCode === 13 || e.type === "click"){
    languageList.css({"display":"none"});
    }
});

languageItem.last().on("focusout", function(){
    languageList.css({"display":"none"});
});

// 메인메뉴 컨트롤
item.on("focusin mouseover", function(){
    item.removeClass("menu-act"); 
    $(this).addClass("menu-act"); 
});

submenu.on("mouseout", function(){
    item.removeClass("menu-act"); 
});

submenuItem.last().on("focusout", function(){
    item.removeClass("menu-act"); 
});
