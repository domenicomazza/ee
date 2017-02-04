# YTSMP 1.0.2
## Overview
YouTube Simple Music Player (YTSMP) is a small HTML/JS YouTube playlist player. Unlike a traditional YouTube player, the video is hidden, and you're provided with three buttons—play, pause and next. The aim of the player is to make setting up, editing and listening to an online mix simple. It uses public content so all you have to do is install the player and create a mix.

## Demo
- [YTSMP](https://domenicomazza.github.io/ee/YTSMP/)
- [Playlist on YouTube](https://www.youtube.com/playlist?list=PLNelKvzgJ1lKvM8T76REo0eUKVBY0_78b)

## Installation
- You can use the provided `index.html` file or the player div `<div id="ytsmpPlayer">...</div>` will gladly fit anywhere in a web document. Basic requirements are the player div `<div id="ytsmpPlayer">...</div>`, `ytsmp.css` and `ytsmp.js`.
- Add your own public or unlisted YouTube playlist by grabbing your playlist code. Look for `&list=` in the playlist URL and copy the code which follows. In the `ytsmp.js` file this is `PLNelKvzgJ1lKvM8T76REo0eUKVBY0_78b`—replace this code with yours.

## Features
- No back button. Yes.
- Completely fluid design.
- The buttons are SVG vectors encoded in base64 in the CSS. A good tool to decode the current graphics and encode any custom graphics can be found at http://www.mobilefish.com/services/base64/base64.php.

## Planned Features
- A playlist selector.

## Known Bugs
- Deleted videos in the playlist will cause play issues. Keep an eye on your playlist.
- The player won't work on mobile devices.
- No algorithm to prevent the playing of Pop music.

## Credits
This project was based off Chris Coyier's guide [Play and Pause Buttons for YouTube and Vimeo Videos](https://css-tricks.com/play-button-youtube-and-vimeo-api/) at CSS-Tricks.
