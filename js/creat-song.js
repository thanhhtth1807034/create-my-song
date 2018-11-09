var API_SONG = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs';
var btnSubmit = document.forms['song-form']['btn-submit'];
btnSubmit.onclick = function () {
    var txtName = document.forms['song-form']['name'];
    var msgName = txtName.nextElementSibling;
    if (txtName == null || txtName.value.length == 0){
        msgName.innerHTML = "* Vui lòng điền đầy đủ thông tin.";
        msgName.classList.remove("hidden-text");
    } else {
         msgName.innerHTML = "Thông tin chính xác.";
         msgName.classList.remove("hidden-text");
         msgName.classList.remove("danger-text");
         msgName.classList.add("success-text");
    }
    var txtSingerName = document.forms['song-form']['singername'];
    var msgSinger = txtSingerName.nextElementSibling;
    if (txtSingerName == null || txtSingerName.value.length == 0){
        msgSinger.innerHTML = "* VUi lòng điền đầy đủ thông tin.";
        msgSinger.classList.remove("hidden-text");
    } else {
        msgSinger.innerHTML = "Thông tin chính xác.";
        msgSinger.classList.remove("hidden-text");
        msgSinger.classList.remove("danger-text");
        msgSinger.classList.add("success-text");
    }
    var txtDescription = document.forms['song-form']['description'];
    var msgDescription = txtDescription.nextElementSibling;
    if (txtDescription == null || txtDescription.value.length == 0){
        msgDescription.innerHTML = "* VUi lòng điền đầy đủ thông tin.";
        msgDescription.classList.remove("hidden-text");
    } else {
        msgDescription.innerHTML = "Thông tin chính xác.";
        msgDescription.classList.remove("hidden-text");
        msgDescription.classList.remove("danger-text");
        msgDescription.classList.add("success-text");
    }
    var txtAuthor = document.forms['song-form']['author'];
    var msgAuthor = txtAuthor.nextElementSibling;
    if (txtAuthor == null || txtAuthor.value.length == 0){
        msgAuthor.innerHTML = "* VUi lòng điền đầy đủ thông tin.";
        msgAuthor.classList.remove("hidden-text");
    } else {
        msgAuthor.innerHTML = "Thông tin chính xác.";
        msgAuthor.classList.remove("hidden-text");
        msgAuthor.classList.remove("danger-text");
        msgAuthor.classList.add("success-text");
    }
    var urlThumbnail = document.forms['song-form']['thumbnail'];
    var msgThumbnail = urlThumbnail.nextElementSibling;
    if (urlThumbnail == null || urlThumbnail.value.length == 0){
        msgThumbnail.innerHTML = "* VUi lòng điền đầy đủ thông tin.";
        msgThumbnail.classList.remove("hidden-text");
    } else {
        msgThumbnail.innerHTML = "Thông tin chính xác.";
        msgThumbnail.classList.remove("hidden-text");
        msgThumbnail.classList.remove("danger-text");
        msgThumbnail.classList.add("success-text");
    }
    var urlLink = document.forms['song-form']['link'];
    var msgLink = urlLink.nextElementSibling;
    if (urlLink == null || urlLink.value.length == 0){
        msgLink.innerHTML = "* VUi lòng điền đầy đủ thông tin.";
        msgLink.classList.remove("hidden-text");
    } else {
        msgLink.innerHTML = "Thông tin chính xác.";
        msgLink.classList.remove("hidden-text");
        msgLink.classList.remove("danger-text");
        msgLink.classList.add("success-text");
    }
    var jsSong = {
        name: txtName.value,
        singer: txtSingerName.value,
        description: txtDescription.value,
        author: txtAuthor.value,
        thumbnail: urlThumbnail.value,
        link: urlLink.value,
    }
    createSong(jsSong);
}
    function createSong(jsSong) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201){
                var song = JSON.parse(this.responseText);
                alert('creat song: ' + song.name + ' success!');
            }
        }
    xhr.open('POST', API_SONG, true);
    xhr.setRequestHeader('content-type','application/json');
    xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('my-token'));
    xhr.send(JSON.stringify(jsSong));
}