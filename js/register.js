var REGISTER_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstname = document.forms['register-form']['firstname'];
        var msgFirstName = txtFirstname.nextElementSibling;
        if (txtFirstname == null || txtFirstname .value.length == 0){
            msgFirstName.innerHTML = "* Vui lòng điền đây đủ thông tin.";
            msgFirstName.classList.remove("hidden-text");
        } else if (txtFirstname.value.length > 20){
            msgFirstName.innerHTML = "*Tên bạn quá dài.";
            msgFirstName.classList.remove("hidden-text");
        } else {
            msgFirstName.innerHTML = "Tên hợp lệ.";
            msgFirstName.classList.remove("hidden-text");
            msgFirstName.classList.remove("danger-text");
            msgFirstName.classList.add("success-text");
        }
        var txtLastname = document.forms['register-form']['lastname'];
        var msgLastName = txtLastname.nextElementSibling;
        if (txtLastname == null || txtLastname .value.length == 0){
            msgLastName.innerHTML = "* Vui lòng điền đây đủ thông tin.";
            msgLastName.classList.remove("hidden-text");
        } else if (txtLastname.value.length > 20){
            msgLastName.innerHTML = "* HỌ của bạn quá dài.";
            msgLastName.classList.remove("hidden-text");
        } else {
            msgLastName.innerHTML = "Họ hợp lệ.";
            msgLastName.classList.remove("hidden-text");
            msgLastName.classList.remove("danger-text");
            msgLastName.classList.add("success-text");
        }
        var pwdPassword = document.forms['register-form']['password'];
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
        var txtAddress = document.forms['register-form']['address'];
        var msgAddress = txtAddress.nextElementSibling;
        if (txtAddress == null || txtAddress.value.length == 0){
            msgAddress.innerHTML = "* Vui lòng điền địa chỉ của bạn.";
            msgAddress.classList.remove("hidden-text");
        } else {
            msgAddress.innerHTML = "Địa chỉ hợp lệ.";
            msgAddress.classList.remove("hidden-text");
            msgAddress.classList.remove("danger-text");
            msgAddress.classList.add("success-text");
        }
        var txtPhone = document.forms['register-form']['phone'];
        var msgPhone = txtPhone.nextElementSibling;
        if (txtPhone == null || txtPhone.value.length == 0){
            msgPhone.innerHTML = "* Vui lòng nhập số điện thoại của bạn.";
            msgPhone.classList.remove("hidden-text");
        } else if (txtPhone.value.length < 10){
            msgPhone.innerHTML = "* Sô điện thoại của bạn không đúng.";
            msgPhone.classList.remove("hidden-text");
        }  else if (txtPhone.value.length > 11){
            msgPhone.innerHTML = "* Số điện thoại của bạn không đúng.";
            msgPhone.classList.remove("hidden-text");
        } else {
            msgPhone.innerHTML = "số điện thoại hợp lê.";
            msgPhone.classList.remove("hidden-text");
            msgPhone.classList.remove("danger-text");
            msgPhone.classList.remove("success-text");
        }
        var txtAvatar = document.forms['register-form']['avatar'];
        var msgAvatar = txtAvatar.nextElementSibling;
        if (txtAvatar == null || txtAvatar.value.length == 0){
            msgAvatar.innerHTML = "* Vui lòng nhập ảnh của bạn.";
            msgAvatar.classList.remove("hidden-text");
        } else {
            msgAvatar.innerHTML = "Ảnh hợp lệ.";
            msgAvatar.classList.remove("hidden-text");
            msgAvatar.classList.remove("danger-text");
            msgAvatar.classList.add("success-text");
        }
        var selectgender = document.forms['register-form']['gender'];
        var txtEmail = document.forms['register-form']['email'];
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
        var dateBirthday = document.forms['register-form']['birthday'];
        var dd = new Date(dateBirthday.value);
        var myDate = dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-'
            + (dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate());
        if (txtFirstname != null && txtLastname != null) {
            var firstName = txtFirstname.value;
            var lastName = txtLastname.value;
            var password = pwdPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = selectgender.value;
            var email = txtEmail.value;
            var birthday = dateBirthday.value;
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birthday: birthday,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}
function postRegisterData(jsonData) {
    var xmlhttp =new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201){
            var members = JSON.parse(this.responseText);
            alert( members.id + '-' + members.firstName);
        }
    }
    xmlhttp.open("POST", REGISTER_API, true);
    xmlhttp.setRequestHeader("content-type","application/json");
    xmlhttp.send(jsonData);
}
