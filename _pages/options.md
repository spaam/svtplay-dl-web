---
layout: page
title: Options
permalink: /options/
icon: fas fa-cog
description: All available options for svtplay-dl
---

<p class="lead">An overview of all the options svtplay-dl has to offer.</p>

```plaintext
usage: svtplay-dl [-h] [--version] [-o output] [--filename filename] [--subfolder] [--config configfile] [-f] [-l] [-c capture_time] [-s] [--silent-semi] [-u USERNAME] [-p PASSWORD] [--token TOKEN] [-t] [-g]
                  [--get-only-episode-url] [--dont-verify-ssl-cert] [--http-header header1=value;header2=value2] [--cookies cookie1=value;cookie2=value2] [--exclude WORD1,WORD2,...] [--after-date yyyy-MM-dd]
                  [--proxy proxy] [-v] [--nfo] [--force-nfo] [--only-audio] [--only-video] [-q quality] [-Q amount] [-P preferred] [--list-quality] [--stream-priority dash,hls,http] [--format-preferred h264,h264-51]
                  [--audio-language AUDIO_LANGUAGE] [--video-role VIDEO_ROLE] [--resolution RESOLUTION] [-S] [-M] [--force-subtitle] [--require-subtitle] [--all-subtitles] [--raw-subtitles] [--convert-subtitle-colors]
                  [-A] [--all-last NN] [--include-clips] [-R] [--no-remux] [--no-merge] [--no-postprocess] [--keep-original] [--output-format {mp4,mkv}] [--chapters]
                  [urls ...]

positional arguments:
  urls

options:
  -h, --help            show this help message and exit

  --version             show program's version number and exit
  -o output, --output output
                        outputs to the given filename or folder
  --filename filename   filename format {title}.s{season}e{episode}.{episodename}-{id}-{service}.{ext}
  --subfolder           Create a subfolder titled as the show, non-series gets in folder movies
  --config configfile   Specify configuration file
  -f, --force           overwrite if file exists already
  -l, --live            enable for live streams (RTMP based ones)
  -c capture_time, --capture_time capture_time
                        define capture time in minutes of a live stream
  -s, --silent          be less verbose
  --silent-semi         only show a message when the file is downloaded
  -u USERNAME, --username USERNAME
                        username
  -p PASSWORD, --password PASSWORD
                        password
  --token TOKEN         token
  -t, --thumbnail       download thumbnail from the site if available
  -g, --get-url         do not download any video, but instead print the URL.
  --get-only-episode-url
                        do not get video URLs, only print the episode URL.
  --dont-verify-ssl-cert
                        Don't attempt to verify SSL certificates.
  --http-header header1=value;header2=value2
                        A header to add to each HTTP request.
  --cookies cookie1=value;cookie2=value2
                        A cookies to add to each HTTP request.
  --exclude WORD1,WORD2,...
                        exclude videos with the WORD(s) in the filename. comma separated.
  --after-date yyyy-MM-dd
                        only videos published on or after this date
  --proxy proxy         Use the specified HTTP/HTTPS/SOCKS proxy. To enable experimental SOCKS proxy, specify a proper scheme. For example socks5://127.0.0.1:1080/.
  -v, --verbose         explain what is going on
  --nfo                 create a NFO file
  --force-nfo           download only NFO if used with --nfo
  --only-audio          only download audio if audio and video is seperated
  --only-video          only download video if audio and video is seperated

Quality:
  -q quality, --quality quality
                        choose what format to download based on bitrate / video resolution.it will download the best format by default
  -Q amount, --flexible-quality amount
                        allow given quality (as above) to differ by an amount
  -P preferred, --preferred preferred
                        preferred download method (dash, hls, or http)
  --list-quality        list the quality for a video
  --stream-priority dash,hls,http
                        If two streams have the same quality, choose the one you prefer
  --format-preferred h264,h264-51
                        Choose the format you prefer, --list-quality to show which one to choose from
  --audio-language AUDIO_LANGUAGE
                        Choose the language of the audio (it can override the default one), --list-quality to show which one to choose from
  --video-role VIDEO_ROLE
                        Choose the role of the video (it can override the default one), --list-quality to show which one to choose from
  --resolution RESOLUTION
                        Choose what video resolution to download e.g. 480,720,1080. comma seperated

Subtitle:
  -S, --subtitle        download subtitle from the site if available. both merged and separately stored if used with -M
  -M, --merge-subtitle  merge subtitle with video/audio file with corresponding ISO639-3 language code. also saved separately if used with -S
  --force-subtitle      download only subtitle if its used with -S
  --require-subtitle    download only if a subtitle is available
  --all-subtitles       Download all available subtitles for the video
  --raw-subtitles       also download the subtitles in their native format
  --convert-subtitle-colors
                        converts the color information in subtitles, to <font color=""> tags

All:
  -A, --all-episodes    try to download all episodes
  --all-last NN         get last NN episodes instead of all episodes
  --include-clips       include clips from websites when using -A
  -R, --reverse         Reverse download order

Post-processing:
  --no-remux            Do not automatically remux to mp4
  --no-merge            Do not automatically merge video, audio and possibly also subtitle(s) together
  --no-postprocess      Do not postprocess anything
  --keep-original       Do postprocessing while also keeping original files
  --output-format {mp4,mkv}
                        format you want resulting file in (mkv or mp4), mp4 is default
  --chapters            Get chapters and add it to the file
```