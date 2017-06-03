// Example Album


var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    var $row = $(template);

    var clickHandler = function() {

            var songNumber = parseInt($(this).attr('data-song-number'));

            if (currentlyPlayingSongNumber !== null) {

                var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);

                currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
                currentlyPlayingCell.html(currentlyPlayingSongNumber);
            }

             if (currentlyPlayingSongNumber !== songNumber) {
                 setSong(songNumber);
                currentSoundFile.play();
                 $(this).html(pauseButtonTemplate);
                 currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
                 updatePlayerBarSong();
             } else if (currentlyPlayingSongNumber === songNumber) {

                if (currentSoundFile.isPaused()) {
                    $(this).html(pauseButtonTemplate);
                    $('.main-controls .play-pause').html(playerBarPauseButton);
                    currentSoundFile.play();
                } else {
                    $(this).html(playButtonTemplate);
                    $('.main-controls .play-pause').html(playerBarPlayButton);
                    currentSoundFile.pause();
                }

             }

         };

 var setSong = function setSong(songNumber) {
   if (currentSoundFile) {
         currentSoundFile.stop();
     }
     currentlyPlayingSongNumber = parseInt(songNumber);
    var songNumberIndex = parseInt(songNumber - 1);
    currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
         // #2
         formats: [ 'mp3' ],
         preload: true
     });
     setVolume(currentVolume);
    currentSongFromAlbum = currentAlbum.songs[songNumberIndex];
};
var setVolume = function(volume) {
     if (currentSoundFile) {
         currentSoundFile.setVolume(volume);
     }
 };

var getSongNumberCell = function getSongNumberCell(number) {
    var $songNumberCell = $('.song-item-number[data-track-number="' + number + '"]');
    return $songNumberCell;
};

var nextSong = function nextSong() {
     var currentIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    var $oldSong = getSongNumberCell(currentIndex + 1);
     var oldSongNumber = parseInt($oldSong.attr('data-track-number'));
     var $newSong = null;

     currentIndex = 0;
     }

     currentSongFromAlbum = currentAlbum.songs[currentIndex];
      setSong(currentIndex + 1);
      currentSoundFile.play();
      $oldSong.html(oldSongNumber);
     $newSong = getSongNumberCell(currentIndex + 1);
      $newSong.html(pauseButtonTemplate);
     updatePlayerBarSong();
 };

 var previousSong = function previousSong() {
     var currentIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    var $oldSong = getSongNumberCell(currentIndex + 1);
     var oldSongNumber = parseInt($oldSong.attr('data-track-number'));
     var $newSong = null;

var previousSong = function previousSong() {
     }
     setSong(currentIndex + 1);
     currentSoundFile.play();
     $oldSong.html(oldSongNumber);

    $newSong = getSongNumberCell(currentIndex + 1);
     $newSong.html(pauseButtonTemplate);
     updatePlayerBarSong();
 };

    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(songNumber);
        }
        console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
    };

    $row.find('.song-item-number').click(clickHandler);
     // #2
     $row.hover(onHover, offHover);
     // #3
     return $row;
};

var setCurrentAlbum = function(album) {
     currentAlbum = album;
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
};
var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };

var updatePlayerBarSong = function() {

    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
    $('.main-controls .play-pause').html(playerBarPauseButton);
};
     // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);

     // #3
     $albumSongList.empty();

     // #4
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };




     updatePlayerBarSong();

     var $nextSongNumberCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
     var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');

     $nextSongNumberCell.html(pauseButtonTemplate);
     $lastSongNumberCell.html(lastSongNumber);
 };

 var togglePlayFromPlayerbar = function() {
     var $currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
    if (currentSoundFile.isPaused()) {
        $currentlyPlayingCell.html(pauseButtonTemplate);
        $(this).html(playerBarPauseButton);
        currentSoundFile.play();
    } else if (currentSoundFile) {
        $currentlyPlayingCell.html(playButtonTemplate);
        $(this).html(playerBarPlayButton);
        currentSoundFile.pause();
    }
};

 var previousSong = function() {
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = currentAlbum.songs.length - 1;
    }

    var lastSongNumber = currentlyPlayingSongNumber;
    setSong(currentIndex + 1);

    updatePlayerBarSong();

    $('.main-controls .play-pause').html(playerBarPauseButton);

    var $previousSongNumberCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
    var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');

    $previousSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
};

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
 var playerBarPauseButton = '<span class="ion-pause"></span>';


 // Store state of playing songs
 var currentAlbum = null;
 var currentlyPlayingSongNumber = null;
 var currentSongFromAlbum = null;
 var currentSoundFile = null;
 var currentVolume = 80;
 var $previousButton = $('.main-controls .previous');
 var $nextButton = $('.main-controls .next');
 var $playPauseButton = $('.main-controls .play-pause');


 $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
     $previousButton.click(previousSong);
     $nextButton.click(nextSong);
     $playPauseButton.click(togglePlayFromPlayerbar);
 });

 var albums = [albumPicasso, albumMarconi, albumGodOfLamb];
      var index = 1;
      albumImage.addEventListener("click", function(event) {
          setCurrentAlbum(albums[index]);
          index++;
          if (index == albums.length) {
            index = 0;
  }
     });
