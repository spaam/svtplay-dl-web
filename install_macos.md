---
layout: page
title: Install on macOS
permalink: /install/macos/
icon: fab fa-apple
description: Installation instructions for svtplay-dl on macOS
---

## With Homebrew

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

## From source

See the [Install from source](/install/source/) page.
