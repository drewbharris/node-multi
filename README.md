# node-multi

Distributed audio performance using node.js, socket.io and the HTML5 WebAudio API.

## Install

     npm install
     mkdir static
     mkdir static/audio

Note that you'll have to put your IP address in master.html, slave.html and slave_mobile.html (this will be templated in the future).  Also, drop some mp3s in the static/audio directory.

Web Audio is currently supported in Google Chrome, desktop Safari, Mobile Safari (on iOS 6) and the WebKit nightlies, I believe. 

TODO: fix latency issues (possibly via multiple ping and latency compensation), use nginx to serve static content 
