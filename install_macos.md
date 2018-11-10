---
layout: page
title: Install on macOS
description: Installation instructions for svtplay-dl on macOS
icon: fab fa-apple
permalink: /install/macos/
---

## With Homebrew <i class="fas fa-folder-open"></i>

If you have [Homebrew](https://brew.sh) you can install with:

```bash
brew install svtplay-dl

# For postprocessing of video files, also install ffmpeg

brew install ffmpeg
```

## Download with curl

```bash
sudo curl -L https://svtplay-dl.se/download/latest/svtplay-dl -o /usr/local/bin/svtplay-dl

# make it executable
sudo chmod a+rx /usr/local/bin/svtplay-dl
```
