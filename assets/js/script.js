// Credits: Beeple for these amazing vj loops
var videos = [
    "24k_(loop) (1080p).mp4",
    "anauu (720p).mp4",
    "angular_(loop) (1080p).mp4",
    "aquahall_(loop) (1080p).mp4",
    "ashthorp (720p).mp4",
    "base_ten (1080p).mp4",
    "bilousby (720p).mp4",
    "bitsweep (720p).mp4",
    "bokk_(loop) (1080p).mp4",
    "box_beat_(125bpm_loop) (1080p).mp4",
    "breath_ctrl_(loop) (1080p).mp4",
    "built.ee_(loop) (1080p).mp4",
    "cleanroom_(loop) (1080p).mp4",
    "cuttt_(loop) (1080p).mp4",
    "cycloid_(loop) (720p).mp4",
    "dirty_ribbon_(loop) (1080p).mp4",
    "dvde_(loop) (1080p).mp4",
    "domeshards_(110bpm_loop) (720p).mp4",
    "eightytown_(loop) (720p).mp4",
    "exhaust_(loop) (720p).mp4",
    "fiber_optical_(loop) (1080p).mp4",
    "gerschwinn (720p).mp4",
    "glass_ladder_(loop) (1080p).mp4",
    "glitychghost_(loop) (720p).mp4",
    "gobo.v1 (1080p).mp4",
    "gobo.v2 (1080p).mp4",
    "hexxx_(loop) (1080p).mp4",
    "hotboxxx_(128bpm_loop) (1080p).mp4",
    "koll (1080p).mp4",
    "lightgrid_(loop) (720p).mp4",
    "milkcave_(loop) (1080p).mp4",
    "moar (720p).mp4",
    "moonvirus_(loop) (1080p).mp4",
    "multi-turbs (720p).mp4",
    "okkkk_(loop) (1080p).mp4",
    "p-crawl_(loop) (1080p).mp4",
    "pewpy_dollar_sign (1080p).mp4",
    "pink_vynil_(loop) (720p).mp4",
    "plugslower (720p).mp4",
    "poxels_(loop) (720p).mp4",
    "pray_state (1080p).mp4",
    "rebalance_(loop) (1080p).mp4",
    "signal_barrel_(loop) (720p).mp4",
    "smoke_four (720p).mp4",
    "splick (1080p).mp4",
    "steps_(loop) (1080p).mp4",
    "strt_(loop) (1080p).mp4",
    "subspace (720p).mp4",
    "t-hawk_(loop) (1080p).mp4",
    "tech.fux_(loop) (1080p).mp4",
    "tendril_(loop) (1080p).mp4",
    "tracerfaun (720p).mp4",
    "unplug_(loop) (1080p).mp4",
    "warm_neon_birth (1080p).mp4",
    "wormhole_(loop) (720p).mp4",
    "wrmmm_(loop) (1080p).mp4",
    "xannn (1080p).mp4"
];

var video = document.getElementById('video');
var source = document.getElementById('source');

source.setAttribute('src', './assets/vid/' + videos[Math.round(Math.random() * (videos.length - 1))]);

video.load();
video.width = screen.width;
video.height = screen.height;