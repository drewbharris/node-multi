# node-multi

Distributed audio performance using node.js, socket.io and the HTML5 WebAudio API.

## Install

     npm install
     mkdir static
     mkdir static/audio

Note that you'll have to put your IP address in master.html, slave.html and slave_mobile.html (this will be templated in the future).  You can either edit the included config file to point to remote mp3 files or drop your own mp3 files in static/audio that will be served with Express (see issues).

Web Audio is currently supported in Google Chrome, desktop Safari, Mobile Safari (on iOS 6) and the WebKit nightlies, I believe.

TODO: fix latency issues (possibly via multiple ping and latency compensation), use nginx to serve static content

## Issues

### Latency

There are significant issues with clients beginning play at different times, sometimes up to 500 ms.  I'm actively working on this.  Currently, when a client loads the page it will phone home to the server 10 times and calculate the average latency.  When the master sends a play event, each client requests a latency-adjusted play event from the server, which is currently 1000 ms minus the individual recorded client latency.

I don't know if that is will work, it's kind of a brain puzzle and I'm pretty new to Javascript.  If you have suggestions, let me know.

### Static file serving

I had some problems with Express getting overwhelmed serving large mp3s to many clients.
Might be better to use remote files, hence the included config.example.js.

## License


