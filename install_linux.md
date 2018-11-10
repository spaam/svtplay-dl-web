---
layout: page
title: Install on Linux
description: Installation instructions for svtplay-dl on Linux
icon: fab fa-linux
permalink: /install/linux/
---

## For any Linux

```bash
# download with curl
sudo curl -L https://svtplay-dl.se/download/latest/svtplay-dl -o /usr/local/bin/svtplay-dl

# make it executable
sudo chmod a+rx /usr/local/bin/svtplay-dl
```

## Debian and Ubuntu

The included repository in Debian and Ubuntu could sometimes be lagging behind.
The recommended way is to use our own [repo](https://apt.svtplay-dl.se/).

```bash
# Add the PGP release keys:
curl -s https://svtplay-dl.se/release-key.txt | sudo apt-key add -

# Add the release channel to your APT sources:

echo "deb https://apt.svtplay-dl.se/ svtplay-dl release" | sudo tee /etc/apt/sources.list.d/svtplay-dl.list

# Update and install svtplay-dl:

sudo apt-get update
sudo apt-get install svtplay-dl

# For postprocessing of video files, also install ffmpeg:

sudo apt-get install ffmpeg
```

## Solus

svtplay-dl is avaliable in the stable repository of [Solus](https://getsol.us/) and can be installed by running:

```bash
sudo eopkg it svtplay-dl
```
