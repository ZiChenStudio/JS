//网站禁止选择文字
document.body.onselectstart = function() {
    self.event.returnValue=false
};
document.onkeydown = function(){
    //禁止 F12
    if (window.event && window.event.keyCode == 123) {
    event.keyCode = 0;
    event.returnValue = false;
    }
    }
document.onkeydown = function(){
    //禁止ctrl+u
    if (event.ctrlKey && window.event.keyCode==85){
    return false;
    }
    }
