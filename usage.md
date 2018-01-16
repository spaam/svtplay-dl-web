---
layout: page
title: Usage
description: How to use svtplay-dl
fa-icon: fas fa-graduation-cap
---

<p class="lead">After you successfully <a href="/install/">installed svtplay-dl</a> on your computer. You can dig into how to use it below.</p>

## Normal usage

In most cases you just would like to download a video. Below we go through some other scenarios as well.

##### Download one video

```bash
# example, download the first episode of "Vår tid är nu"
svtplay-dl https://www.svtplay.se/video/15367465/var-tid-ar-nu/var-tid-ar-nu-sasong-1-freden
```

##### Download one video with subtitles (-S)

```bash
# example, download one episode of "Hela england bakar" with subtitles
svtplay-dl -S https://www.tv4play.se/program/hela-england-bakar/2287193
```

##### Download all episodes of a series (-A)

```bash
# example, download all episodes of "Vår tid är nu"
svtplay-dl -A https://www.svtplay.se/video/15367465/var-tid-ar-nu/var-tid-ar-nu-sasong-1-freden

# example, download all episodes and subtitles
svtplay-dl -S -A https://www.svtplay.se/video/15367465/var-tid-ar-nu/var-tid-ar-nu-sasong-1-freden
```

##### Download the last five episodes of a series (-A --all-last=N)

```bash
# example, download last five episodes of "Vår tid är nu"
svtplay-dl -A --all-last=5 https://www.svtplay.se/video/15367465/var-tid-ar-nu/var-tid-ar-nu-sasong-1-freden
```

##### View available Video stream qualities (--list-quality)

```bash
# example, view available qualities
svtplay-dl --list-quality https://www.svtplay.se/video/15367465/var-tid-ar-nu/var-tid-ar-nu-sasong-1-freden

INFO: Quality	Method
INFO: 3248	DASH
INFO: 3248	DASH
INFO: 2796	HLS
INFO: 2794	HLS
INFO: 2794	HDS
INFO: 2029	DASH
INFO: 2029	DASH
INFO: 1680	HLS
INFO: 1678	HLS
INFO: 1678	HDS
INFO: 1170	DASH
INFO: 1170	DASH
INFO: 988	HLS
INFO: 986	HLS
INFO: 986	HDS
...
```

Quality is the bit rate in bit/s. 3248 bit/s will have the Video quality of 720p resolution.
* DASH aslo known as MPEG-DASH is an international standard for video streaming.
* HLS (Apple HTTP Live Streaming) Apple's protocol for video streaming.
* HDS (Adobe HTTP Dynamic Streaming) Adobe's protocol for video streaming, will be depricated.

The default order of protocols svtplay-dl will use is: DASH, HLS, HDS. If you for instance like to use HLS instead of DASH, add the option `-P hls`.

##### Download other video quality (-q -Q -P)

You can also specify the quality you'd like to download, unless you want the best quality.

```bash
# example, download HLS 988 quality
svtplay-dl -P hls -q 988 -Q 100 https://url.to.video.page/
```

The `-Q` flag is how much `-q` can differ. The above example would look for HLS Video with a bitrate between 888 and 1088 and take the one closest to 988.

##### See all options

On the [options]({{ site.baseurl }}{% link options.md %}) page you can view all options available in svtplay-dl

## Post processing

In some cases you probably would like to change the media container of the video and audio streams. For example from .ts and .srt to .mkv where you have the subtitles included instead of two seperate files. FFmpeg is the swiss army knife for anything with video and audio.

To merge video, audio and subtitles to one file without changing the quality (remux only)
```bash
ffmpeg -i video.file.ts -i subtitle.file.srt -metadata:s:a:0 language=eng -metadata:s:s:0 language=swe -c copy outfile.mkv
```
