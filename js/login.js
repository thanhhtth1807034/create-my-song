var LOGIN_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication';
var btnLogin = document.forms['login-form']['btn-login'];
if (btnLogin != null) {
    btnLogin.onclick = function () {
        var pwdPassword = document.forms['login-form']['password'];
        var msgPassword = pwdPassword.nextElementSibling;
        if (pwdPassword == null || pwdPassword.value.length == 0){
            msgPassword.innerHTML = "* Vui lòng điền đây đủ thông tin.";
            msgPassword.classList.remove("hidden-text");
        } else if (pwdPassword.value.length < 5){
            msgPassword.innerHTML = "* Mật khẩu quá ngắn,không an toàn.";
            msgPassword.classList.remove("hidden-text");
        } else {
            msgPassword.innerHTML = "Mật khẩu hợp lệ.";
            msgPassword.classList.remove("hidden-text");
            msgPassword.classList.remove("danger-text");
            msgPassword.classList.add("success-text");
        }
        var txtEmail = document.forms['login-form']['email'];
        var msgEmail = txtEmail.nextElementSibling;
        var aCong =txtEmail.value.includes("@");
        if (txtEmail==null||txtEmail.value.length==0){
            msgEmail.innerHTML = "* Email không được bỏ trống.";
            msgEmail.classList.remove("hidden-text");
        }else if(aCong == false) {
            msgEmail.innerHTML = "* Email phải tồn tại một kí tự @";
            msgEmail.classList.remove("hidden-text");
        }else {
            msgEmail.innerHTML = " Email hợp lệ.";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
        var jsLog = {
            password: pwdPassword.value,
            email: txtEmail.value,
        }
        var jsonDataLogin = JSON.stringify(jsLog);
        postLoginData(jsonDataLogin);
    }
}

function postLoginData(jsonDataLogin) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(this.responseText);
            alert("token:" + member.token + " secretToken:" + member.secretToken);
            // console.log(member.token)
            localStorage.setItem('my-token',member.token);
        }
    }
    xmlHttpRequest.open('POST', LOGIN_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonDataLogin);
}


