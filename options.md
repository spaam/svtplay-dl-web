---
layout: page
title: Options
description: All available options for svtplay-dl
fa-icon: fas fa-cog
---

<p class="lead">An overview of all the options svtplay-dl has to offer.</p>

```plaintext
Usage: svtplay-dl [options] [urls]

Options:
  --version             show program's version number and exit
  -h, --help            show this help message and exit
  -o OUTPUT, --output=OUTPUT
                        outputs to the given filename or folder
  -f, --force           overwrite if file exists already
  -r, --resume          resume a download (RTMP based ones)
  -l, --live            enable for live streams (RTMP based ones)
  -c capture_time, --capture_time=capture_time
                        define capture time in minutes of a live stream
  -s, --silent          be less verbose
  --silent-semi         only show a message when the file is downloaded
  -v, --verbose         explain what is going on
  -q quality, --quality=quality
                        choose what format to download based on bitrate /
                        video resolution. it will download the best format by
                        default
  -Q amount, --flexible-quality=amount
                        allow given quality (as above) to differ by an amount
  --list-quality        list the quality for a video
  -S, --subtitle        download subtitle from the site if available
  -M, --merge-subtitle  merge subtitle with video/audio file with
                        corresponding ISO639-3 language code. this invokes
                        --remux automatically. use with -S for external also.
  --force-subtitle      download only subtitle if its used with -S
  --require-subtitle    download only if a subtitle is available
  --all-subtitles       Download all available subtitles for the video
  --raw-subtitles       also download the subtitles in their native format
  --convert-subtitle-colors
                        converts the color information in subtitles, to <font
                        color=> tags
  -u USERNAME, --username=USERNAME
                        username
  -p PASSWORD, --password=PASSWORD
                        password
  -t, --thumbnail       download thumbnail from the site if available
  -A, --all-episodes    try to download all episodes
  --all-last=NN         get last NN episodes instead of all episodes
  -P preferred, --preferred=preferred
                        preferred download method (dash, hls, hds, http or
                        rtmp)
  --exclude=WORD1,WORD2,...
                        exclude videos with the WORD(s) in the filename. comma
                        separated.
  -g, --get-url         do not download any video, but instead print the URL.
  --dont-verify-ssl-cert
                        Don't attempt to verify SSL certificates.
  --http-header=header1=value;header2=value2
                        A header to add to each HTTP request.
  --stream-priority=dash,hls,hds,http,rtmp
                        If two streams have the same quality, choose the one
                        you prefer
  --remux               Remux from one container to mp4 using ffmpeg or avconv
  --include-clips       include clips from websites when using -A
  --cmore-operatorlist  show operatorlist for cmore
  --cmore-operator=operator
  --proxy=proxy         Use the specified HTTP/HTTPS/SOCKS proxy. To enable
                        experimental SOCKS proxy, specify a proper scheme. For
                        example socks5://127.0.0.1:1080/.

```