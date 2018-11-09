var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange =function () {
    if (this.readyState == 4 && this.status == 200){
        var listsong = JSON.parse(this.responseText);
        var content ='';
        for (var i = 0; i < listsong.length; i++) {
            content += '<div class="song-item">';
            content += '<div class="song-index">' + ( i + 1) + '</div>';
            content += '<div class="song-thumbnail">';
            content += '<img src="'+ listsong[i].thumbnail +'" alt="">';
            content += '</div>';
            content += '<div class="song-infor">';
            content += '<div class="song-name">'+ listsong[i].name + '</div>';
            content += '<div class="song-singer">' + listsong[i].singer + '</div>';
            content += '</div>';
            content += '<div class="song-control" onclick="playSong(\''+ listsong[i].link +'\', \''+ listsong[i].name +'\', \'' + listsong[i].singer +'\')">Play</div>';
            content += '</div>';
        }
        document.getElementById('list-song').innerHTML =content;
    }
}
xmlhttp.open("GET", API, true);
xmlhttp.send();

function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'current playing:' + name + " - " + singer;
}
