---
layout: page
title: Install
description: Installation instructions for svtplay-dl
---
<p class="lead">Installing svtplay-dl is pretty simple. Follow the instuctions for your OS and you should be up and running in no time.</p>

## macOS <i class="fab fa-apple"></i>

If you have macOS and [Homebrew](https://brew.sh) you can install with:

```bash
brew install svtplay-dl
```

For postprocessing of video files, also install ffmpeg:

```bash
brew install ffmpeg
```

## Debian and Ubuntu <i class="fab fa-linux"></i>

The included repository in Debian and Ubuntu is very outdated. The recommended way is to use our own [repo](https://apt.svtplay-dl.se/).

Add the PGP release keys:

```bash
curl -s https://svtplay-dl.se/release-key.txt | sudo apt-key add -
```

Add the release channel to your APT sources:

```bash
echo "deb http://apt.svtplay-dl.se/ svtplay-dl release" | sudo tee /etc/apt/sources.list.d/svtplay-dl.list
```

Update and install svtplay-dl:

```bash
sudo apt-get update
sudo apt-get install svtplay-dl
```

For postprocessing of video files, also install ffmpeg:

```bash
sudo apt-get install ffmpeg
```

## Windows <i class="fab fa-windows"></i>


There is an compiled .exe file on the [download page]({{ site.baseurl }}{% link download.md %}), but our recommended way is to use [bash on Ubuntu on Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10) included in Windows 10.
From there, install in the same way as for Ubuntu above.

Since the "home" directory is separate in bash, make a link to your Windows home directory's Videos folder (for example) to your "Ubuntu's" home directory.

```bash
ln -s /mnt/c/Users/your-windows-username/Videos ~/videos
```

## Other systems with python <i class="fab fa-python"></i>

```bash
pip install svtplay-dl
```

## From source <i class="fab fa-github"></i>

Installing from source is fairly straight forward.
First clone the repository:

```bash
git clone https://github.com/spaam/svtplay-dl.git
```

<div class="alert alert-primary" role="alert">
<p>If you are using bash on Windows or Debian / Ubuntu, install build-essentials first:</p>
<code>sudo apt-get install build-essential</code>
</div>

To install svtplay-dl, navigate to the directory where you cloned the source and run:

```bash
make
sudo make install

# to test the installation
svtplay-dl --version
```

### Install FFmpeg from source <i class="fab fa-github"></i>

If you are using Ubuntu you can install ffmpeg's prerequisites like this:

```bash
sudo apt-get install autoconf automake build-essential cmake git libass-dev libfreetype6-dev libsdl2-dev libssl-dev libtheora-dev libtool libva-dev libvdpau-dev libvorbis-dev libxcb1-dev libxcb-shm0-dev libxcb-xfixes0-dev pkg-config texinfo wget zlib1g-dev
sudo apt-get install yasm libx264-dev libx265-dev libvpx-dev libfdk-aac-dev libmp3lame-dev libopus-dev librtmp-dev libxvidcore-dev ocl-icd-opencl-dev
```

Then clone from either GitHub's mirror or FFmpeg's official repository.

Compiling time depends on your computer, but around 10 minutes is normal.

<div class="alert alert-primary" role="alert">
To speed up the compilation do <code>export MAKEFLAGS="-j4"</code> before you start.
</div>

```bash
git clone https://git.ffmpeg.org/ffmpeg.git
./configure --enable-pthreads --enable-version3 --enable-avresample --enable-gpl --enable-libass --enable-libfdk-aac --enable-libfreetype --enable-libmp3lame --enable-libopus --enable-librtmp --enable-libvorbis --enable-libvpx --enable-libx264 --enable-libx265 --enable-libxvid --enable-opencl --enable-openssl --enable-nonfree
make
sudo make install
```

(FFmpeg's repo in GitHub is: `https://github.com/FFmpeg/FFmpeg.git`)
