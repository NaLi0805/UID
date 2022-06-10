function add(btn) {
    //数量*价格
    //1、获取到当前input框数值，并更新input框
    //parentElement:获取父节点	children:获取子节点
var num=btn.parentElement.children[1].value;
    //parentElement:获取父节点	children:获取子节点
btn.parentElement.children[1].value=++num;
    //2、获取单价,字符串
    //parentElement:获取父节点		//previousElementSibling：获取哥哥节点
var proce=btn.parentElement.previousElementSibling.innerText;
}


//购物车减少数量
function minus(btn){
//数量*价格
//1、获取到当前input框数值，并更新input框
//parentElement:获取父节点	children:获取子节点
var num=btn.parentElement.children[1].value;
//设置不能减到负数，到0就不能减
if(num==0){
    return;
}
btn.parentElement.children[1].value=--num;
}


function check(_btn) {
    var post = document.getElementById('postEmail');
        post.addEventListener('click', function() { //给按钮添加2级监听事件
            //获取p标签节点
            var content = document.querySelector('p');

            //获取input输入框中的值
            var eStr = document.getElementById('email').value;

            var reg = /^([A-z0-9_-]+)@([A-z0-9_-]+)+(\.([A-z0-9_-]+))+$/g;

            if (eStr.match(reg)) {
                content.innerHTML = eStr + 'The E-mail Address is Correct';
            } else {
                content.innerHTML = eStr + ' The E-main Address is Wrong, Please Enter Again';
            }
        })
}









