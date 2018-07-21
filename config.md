---
layout: page
title: Config
description: How to use configfile in svtplay-dl
icon: fas fa-check-square
---

<p class="lead">How to use configfile in svtplay-dl</p>
commandline argument to svtplay-dl will override the values from the config.
the script use yaml for the config.

### Path to config:
#### linux  <i class="fab fa-linux"></i> / macOS <i class="fab fa-apple"></i>
```bash
~/.svtplay-dl.yaml
```
ex /home/johan/.svtplay-dl.yaml
#### Windows <i class="fab fa-windows"></i>
You need to create the directory under the appdata folder
```bash
%APPDATA%\svtplay-dl\svtplay-dl.yaml
```
ex c:\users\johan\appdata\roaming\svtplay-dl\svtplay-dl.yaml

### keywords:
* path: output directory (ex `/path/to/directory`)
* silent: be less verbose. set to `true` to enable
* silent_semi: only show a message when the file is downloaded. set to `true` to enable
* thumbnail: download thumbnail from the site if available. set to `true` to enable
* get_url: do not download any video, but instead print the URL. set to `true` to enable
* ssl_verify: set to `false` if you dont want to verify the certificate
* remux: set to `true` to enable
* verbose: set to `true` to enable
* subtitle: set to `true` to enable
* force_subtitle: download only subtitle if its used with `subtitle`
* require_subtitle: download only if a subtitle is available. set to `true` to enable
* get_all_subtitles: download all available subtitles for the video. set to `true` to enable
* get_raw_subtitles: also download the subtitles in their native format. set to `true` to enable
* convert_subtitle_colors: converts the color information in subtitles, to <font color=""> tags . set to `true` to enable
* merge_subtitle: merge subtitle with video/audio file with corresponding ISO639-3 language code. set to `true` to enable
* all_episodes: try to download all episodes. set to `true` to enable
* all_last: get last NN episodes instead of all episodes: set to a number
* quality: what quality it should download.
* flexibleq: allow given quality (as above) to differ by an amount
* preferred: preferred download method (dash, hls, hds, http or rtmp)
* stream_prio: If two streams have the same quality, choose the one you prefer (dash,hls,hds,http,rtmp)
* username: what username it should use
* password: what password to use
* http_headers: A header to add to each HTTP request (header1=value;header2=value2)
* exclude: exclude videos with the WORD(s) in the filename. comma separated (eg kalle,anka)
* proxy: Use the specified HTTP/HTTPS/SOCKS proxy.
* filename: {title}.s{season}e{episode}.{episodename}-{id}-{service}.{ext}

#### filename
* {title}: the title of the show
* {season}: the season number
* {episode}: the episode number
* {episodename}: episode name
* {id}: the id number
* {service}: service name
* {ext}: the file extension 

### Example configs:

#### simple
This will output all files to the folder `~/grejgrej/` in your home directory 
```yaml
default:
  path: ~/grejgrej
```

#### service
This will output all files to the folder `~/grejgrej/` in your home directory. if downloading a video from dplay. it will use `user@example.tld` as username and `superHemligt` as password
```yaml
default:
  path: ~/grejgrej

service:
  dplay:
    username: user@example.tld
    password: superHemligt
```
Downloading a video from svtplay will save the file to `/storage/video/svtplay`, it will exclude every file with `a` or `b` or `c` in the name and if the quality is between 837 and 1837. it will write a filename without the id number in it.
```yaml
default:
  path: ~/grejgrej

service:
  svtplay:
    path: /storage/video/svtplay
    exclude: a,b,c
    quality: 1337
    flexibleq: 500
    filename: {title}.s{season}e{episode}.{episodename}-{service}.{ext}
```

