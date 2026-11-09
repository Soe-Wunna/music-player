# 🎵 Tiny Music Player

A lightweight, clean, and minimalist web-based music player built with vanilla HTML, CSS, and JavaScript.

---

## ✨ Features

- **Playlist Navigation**: Dynamically generated playlist rendered directly from JavaScript. Click any track to play immediately.
- **Playback Controls**:
  - ▶️ **Play / Pause**: Toggle playback with automatic icon updates.
  - ⏭️ **Next Track**: Jump to the next track in the playlist.
  - ⏮️ **Previous Track**: Return to the previous track.
- **Real-Time Progress Bar**: Visual progress indicator that updates continuously as the song plays.
- **Duration & Timestamp**: Formatted (`mm:ss / mm:ss`) display showing elapsed time and total duration.
- **Dark Theme**: Minimalist dark UI styled with custom CSS and Bootstrap 5.

---

## 🛠️ Built With

- **HTML5** & **Audio API**: Semantic markup and native `<audio>` element handling.
- **CSS3**: Custom dark styling and responsive flexbox layout.
- **JavaScript (ES6+)**: Vanilla DOM manipulation and audio playback event listeners.
- **Bootstrap 5**: Base grid and container utilities.
- **Font Awesome 5**: Audio control icons.

---

## 📁 Project Structure

```plaintext
music-player/
├── index.html       # Main HTML markup and player container
├── style.css        # Player styles and dark theme
├── script.js       # Playback logic, playlist data, and event handling
├── README.md        # Project documentation
└── music/           # Audio files directory
    ├── energetic-rock-333526.mp3
    ├── peking-dawn-367038.mp3
    ├── tavc-city-pop-361233.mp3
    └── tavc-city-pop-368749.mp3
```

---

## 🚀 Getting Started

No build tools or external installations are required.

### Option 1: Direct Browser Launch
Simply double-click `index.html` or open it with your favorite browser.

### Option 2: Local HTTP Server (Recommended)
Running through a local web server ensures smooth loading of local audio files:

- **Using Python 3**:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.

- **Using Node.js (`npx serve`)**:
  ```bash
  npx serve .
  ```

- **Using VS Code Live Server**:
  Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

---

## 🎶 Adding Your Own Music

To add your own audio tracks to the player:

1. Copy your `.mp3` files into the `music/` folder.
2. Open [`script.js`](file:///d:/music-player/script.js) and add your track to the `tracks` array:

```javascript
const tracks = [
    { trackId: "music/your-song-file.mp3", title: "Your Song Name" },
    // ...existing tracks
];
```

The playlist UI and track indexes will update automatically.

---

## 💡 Potential Enhancements

- [ ] Interactive progress bar scrubbing (click to seek)
- [ ] Volume slider and mute toggle
- [ ] Shuffle and repeat modes
- [ ] Auto-play next track when current song ends
- [ ] Album cover art / metadata display

