// const player = require("@vimeo/player");
import throttle from 'lodash.throttle'

const VIDEOPLAYER_CURRENT_TIME = 'timeupdate';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}


const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
 player.setCurrentTime(savedTime); 
}