const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audio")[0];
const currentAndTotalTimeTag = document.getElementsByClassName("currentAndTotalTime")[0];
const currentProgressTag = document.getElementsByClassName("currentProgress")[0];
const playButtonTag = document.getElementsByClassName("playButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];



const tracks = [
    {trackId : "music/tavc-city-pop-361233.mp3", title: "Tavc City Pop One"},
    {trackId : "music/energetic-rock-333526.mp3", title: "Energetic Rock - Metal"},
    {trackId : "music/peking-dawn-367038.mp3", title: "Peking Dawn - ASMR Sleep"},
    {trackId : "music/tavc-city-pop-368749.mp3", title: "Tavc City Pop Two"}
]

for (let i = 0; i < tracks.length; i++){
    const trackTag = document.createElement("div");
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString()+ ". " + tracks[i].title;
    trackTag.textContent = title;

    playListContainerTag.append(trackTag);
    trackTag.addEventListener("click", () => {
        currentPlayingIndex = i;
        playSong();
    })    
}
let duration = 0;
let durationText = "00:00";
audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    durationText = createMinuteAndSecondText(duration);
})

audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText = createMinuteAndSecondText(currentTime);
    const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
    currentAndTotalTimeTag.textContent = currentTimeTextAndDurationText;
    updateCurrentProgress(currentTime);
})

const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (450/duration) * currentTime;
    currentProgressTag.style.width = currentProgressWidth.toString() + "px";
}

const createMinuteAndSecondText = (totalSecond) => {
    const minutes = Math.floor(totalSecond/60);
    const seconds = totalSecond % 60;

    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    return minuteText + ":" + secondText;
}

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
    isPlaying = true;
    const currentTime = Math.floor(audioTag.currentTime);
    if (currentTime === 0) {
        playSong();
    } else{
        audioTag.play();
        playAndPauseUpdate();
    }
})
pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    playAndPauseUpdate();
})
previousButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === 0){
        return;
    }
    currentPlayingIndex -= 1;
    playSong();
})
nextButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === tracks.length -1){
        return;
    }
    currentPlayingIndex += 1;
    playSong();
})

const playSong = () => {
    const songToPlay = tracks[currentPlayingIndex].trackId;
    audioTag.src = songToPlay;
    audioTag.play();
    isPlaying = true;
    playAndPauseUpdate();
}
 const playAndPauseUpdate = () => {
    if (isPlaying){
        playButtonTag.style.display = "none";
        pauseButtonTag.style.display = "inline";
    } else {
        playButtonTag.style.display = "inline";
        pauseButtonTag.style.display = "none";
    }
 }