/**
 * cookie的读写封装
 * Created by ly on 2018/9/6.
 */
//设置cookie
function setCookie(name,value,time) {
    var cookie = name + '=' + decodeURIComponent(value);
    if(typeof time === 'number')
        cookie += ";max-age="+(time*60*60*24);
    document.cookie = cookie;
}
//获取cookie
function getCookie(name) {
    var cookies = document.cookie.split(";");
    var c;
    for(let i = 0 ; i<cookies.length;i++){
        c = cookies[i].split("=");
        if(c[0].replace(" ","") === name)
            return decodeURIComponent(c[2]);
    }
    return false;
}