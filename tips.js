function Tips(){
    var x;
    var r=confirm('点击同样代表您同样了我们的免责声明 \n如果您点击了取消代表您拒绝我们的免责声明 \n免责声明：https://zichenstudio.github.io/readme.html');
    if (r==true){
        x="你按下了\"确定\"按钮!";
    }
    else{
        window.opener = null;
        window.open('', '_self');
        window.close()
    }
    document.getElementById("demo").innerHTML=x;
    }
