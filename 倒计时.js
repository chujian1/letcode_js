/**
 * 实现倒计时
 * Created by ly on 2018/9/4.
 */
function cutDown(){
    let count = 6;
    if(count===0){
        clearInterval(myTime);
    }else{
        myTime = setInterval(function(){
            console.log(count--);
        },1000);
    }
}
cutDown();