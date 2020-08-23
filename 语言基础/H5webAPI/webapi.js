//1.获取地理位置
window.navigator.geolocation.getCurrentPosition(position=>console.log(position))
//2.重力感应
window.addEventListener('deviceorientation',function(){});
//3.本地存储
localStorage.name='panda' //无论窗口关闭与否，都需要存储
sessionStorage.name='panda'//会话临时需要存储的变量，窗口关闭都会清空
//localStorage和cookie区别
//localStorage在发送请求时不会把数据发出去，cookie会发出去；cookie存储内容较少4K，localStorage可以存储5M左右的内容
//4.单页面回退前进
history.pushState({value:value},null,'#'+value);
window.addEventListener('popstate',function(){})

