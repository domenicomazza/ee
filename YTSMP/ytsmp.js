/*
YTSMP 1.0.2
https://github.com/domenicomazza/YTSMP
*/

window.onload = function(){
  document.getElementById('ytsmpPlayer').style.display = 'block';//only show buttons if JS active
}

function switchVisible() {
  //default show play and next, if on click switch as per below
  if (document.getElementById('pause-button').style.display == 'none') {//if pause is hidden on click, show pause, hide play, show next, hide next inactive
    document.getElementById('pause-button').style.display = 'block';
    document.getElementById('play-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('next-button-inactive').style.display = 'none';
  }
  else {//if pause shown on click, hide pause, show play, hide next, show next inactive
    document.getElementById('pause-button').style.display = 'none';
    document.getElementById('play-button').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('next-button-inactive').style.display = 'block';
  }   
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100',
    width: '100',
    playerVars: { 'autoplay': 0, 'controls': 0,  'loop':1, 'list': 'PLNelKvzgJ1lKvM8T76REo0eUKVBY0_78b' },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.setVolume(100);
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  var nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", function() {
    player.nextVideo();
  });
}

function onPlayerStateChange(event) {
  if (event.data == 1) {//activate buttons on play
    document.getElementById('play-button').style.display = 'none';
    document.getElementById('pause-button').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('pause-button-inactive').style.display = 'none';
    document.getElementById('next-button-inactive').style.display = 'none';
  }
}