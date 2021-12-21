function trip(obj, trip) {
    document.getElementById(obj).innerHTML = "<b>" + trip + "</b>";
}

function checkForm() {
    console.log("进入checkForm")
    //获取用户名输入项
    var userNname = document.getElementById("userNname");
    var uName = userNname.value;
    console.log(uName)
    if (uName.length < 1 || uName.length > 10) {
        trip("name_trip", "账号长度为1-10位!!");
        return false;
    } else {
        trip("name_trip", "OK!!");
    }

    // 密码长度大于6 和确认必须一致 
    var password = document.getElementById("password");
    var userPass = password.value;
    if (userPass.length < 6) {
        trip("password_trip", "密码要>6位!!");
        return false;
    } else {
        trip("password_trip", "OK!!");
    }

    //获取确认密码框的值 var
    var surePassword = document.getElementById("surePassword").value;
    if (userPass !== surePassword) {
        trip("surePassword_trip", "两次密码不一致!!");
        console.log(userPass, surePassword)
        return false;
    } else {
        trip("surePassword_trip", "OK!!");
    }

    //校验邮箱(正则表达式):/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
    var inputEmail = document.getElementById("email");
    var uEmail = inputEmail.value;
    if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(uEmail)) {
        trip("emil_trip", "邮箱不合法!!");
        return false;
    } else {
        trip("emil_trip", "OK!!");
    }
    return true;
}

//提交
function submitT() {
    if (checkForm()) {
        alert("注册成功！");
        window.open('./login.html', '_top');
    }
    else {
    }
}

//重置事件
function myFunctionReset() {
    console.log("已重置");
    trip("name_trip", "");
    trip("password_trip", "");
    trip("surePassword_trip", "");
    trip("emil_trip", "");
}