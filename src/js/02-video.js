import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

const currentTime = localStorage.getItem(STORAGE_KEY);
player.setCurrentTime(currentTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
});

player.on('play', throttle(onPlay, 1000));