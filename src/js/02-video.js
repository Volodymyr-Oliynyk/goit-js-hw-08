import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

const currentTime = localStorage.getItem(STORAGE_KEY);
if (!currentTime){
player.setCurrentTime(currentTime);
}
player.on('timeupdate', throttle(onPlay, 1000));