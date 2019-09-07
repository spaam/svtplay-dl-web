---
layout: page
title: Options
permalink: /options/
icon: fas fa-cog
description: All available options for svtplay-dl
---

<p class="lead">An overview of all the options svtplay-dl has to offer.</p>

```plaintext
usage: svtplay-dl [-h] [--version] [-o output] [--subfolder]
                  [--config configfile] [-f] [-r] [-l] [-c capture_time] [-s]
                  [--silent-semi] [-u USERNAME] [-p PASSWORD] [-t] [-g]
                  [--get-only-episode-url] [--dont-verify-ssl-cert]
                  [--http-header header1=value;header2=value2] [--remux]
                  [--exclude WORD1,WORD2,...] [--after-date yyyy-MM-dd]
                  [--proxy proxy] [-v] [--nfo] [--force-nfo] [-q quality]
                  [-Q amount] [-P preferred] [--list-quality]
                  [--stream-priority dash,hls,hds,http] [-S] [-M]
                  [--force-subtitle] [--require-subtitle] [--all-subtitles]
                  [--raw-subtitles] [--convert-subtitle-colors] [-A]
                  [--all-last NN] [--include-clips] [--cmore-operatorlist]
                  [--cmore-operator operator]
                  [urls [urls ...]]

positional arguments:
  urls

optional arguments:
  -h, --help            show this help message and exit

  --version             show program's version number and exit
  -o output, --output output
                        outputs to the given filename or folder
  --subfolder           Create a subfolder titled as the show, non-series gets
                        in folder movies
  --config configfile   Specify configuration file
  -f, --force           overwrite if file exists already
  -r, --resume          resume a download (RTMP obsolete)
  -l, --live            enable for live streams (RTMP based ones)
  -c capture_time, --capture_time capture_time
                        define capture time in minutes of a live stream
  -s, --silent          be less verbose
  --silent-semi         only show a message when the file is downloaded
  -u USERNAME, --username USERNAME
                        username
  -p PASSWORD, --password PASSWORD
                        password
  -t, --thumbnail       download thumbnail from the site if available
  -g, --get-url         do not download any video, but instead print the URL.
  --get-only-episode-url
                        do not get video URLs, only print the episode URL.
  --dont-verify-ssl-cert
                        Don't attempt to verify SSL certificates.
  --http-header header1=value;header2=value2
                        A header to add to each HTTP request.
  --remux               Remux from one container to mp4 using ffmpeg or avconv
  --exclude WORD1,WORD2,...
                        exclude videos with the WORD(s) in the filename. comma
                        separated.
  --after-date yyyy-MM-dd
                        only videos published on or after this date
  --proxy proxy         Use the specified HTTP/HTTPS/SOCKS proxy. To enable
                        experimental SOCKS proxy, specify a proper scheme. For
                        example socks5://127.0.0.1:1080/.
  -v, --verbose         explain what is going on
  --nfo                 create a NFO file
  --force-nfo           download only NFO if used with --nfo

Quality:
  -q quality, --quality quality
                        choose what format to download based on bitrate /
                        video resolution.it will download the best format by
                        default
  -Q amount, --flexible-quality amount
                        allow given quality (as above) to differ by an amount
  -P preferred, --preferred preferred
                        preferred download method (dash, hls, hds, or http)
  --list-quality        list the quality for a video
  --stream-priority dash,hls,hds,http
                        If two streams have the same quality, choose the one
                        you prefer

Subtitle:
  -S, --subtitle        download subtitle from the site if available
  -M, --merge-subtitle  merge subtitle with video/audio file with
                        corresponding ISO639-3 language code.this invokes
                        --remux automatically. use with -S for external also.
  --force-subtitle      download only subtitle if its used with -S
  --require-subtitle    download only if a subtitle is available
  --all-subtitles       Download all available subtitles for the video
  --raw-subtitles       also download the subtitles in their native format
  --convert-subtitle-colors
                        converts the color information in subtitles, to <font
                        color=""> tags

All:
  -A, --all-episodes    try to download all episodes
  --all-last NN         get last NN episodes instead of all episodes
  --include-clips       include clips from websites when using -A

C More:
  --cmore-operatorlist  show operatorlist for cmore
  --cmore-operator operator

```