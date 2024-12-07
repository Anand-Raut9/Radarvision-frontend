const video = document.getElementById('video');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const skipForwardButton = document.getElementById('skip-forward');
const skipBackwardButton = document.getElementById('skip-backward');

// Play Video
playButton.addEventListener('click', () => {
  video.play();
});

// Pause Video
pauseButton.addEventListener('click', () => {
  video.pause();
});

// Skip Forward 5 Seconds
skipForwardButton.addEventListener('click', () => {
  video.currentTime += 5;
});

// Skip Backward 5 Seconds
skipBackwardButton.addEventListener('click', () => {
  video.currentTime -= 5;
});
