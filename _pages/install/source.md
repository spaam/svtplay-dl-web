---
layout: page
title: Install from source
permalink: /install/source/
icon: fab fa-github
description: Installation instructions for svtplay-dl from source
---

<p class="lead">Installing svtplay-dl from source is pretty simple. Follow the instuctions for your OS.</p>

## For Linux, BSD, macOS <i class="fab fa-linux"></i> <i class="fab fa-freebsd"></i> <i class="fab fa-apple"></i>

```bash
# First clone the repository:
git clone https://github.com/spaam/svtplay-dl.git

# To install svtplay-dl, navigate to the directory where you cloned the source and run:
make
sudo make install

# to test the installation
svtplay-dl --version
```

<div class="alert alert-primary" role="alert">
<p>If you are using bash on Windows or Debian / Ubuntu, install build-essentials first:</p>
<code>sudo apt-get install build-essential</code>
</div>

### Prerequisites

svtplay-dl requires the following additional tools and libraries. They are usually available from your distribution’s package repositories. If you don’t have them, some features will not be working.

* [Python](https://www.python.org/) 3.6 or higher
* [Requests](http://www.python-requests.org/) ```pip3 install requests```
* [cryptography](https://cryptography.io/en/latest/) to download encrypted HLS streams. ```pip3 install cryptography```
* [PyYaml](https://github.com/yaml/pyyaml) for configure file. ```pip3 install pyyaml```
* [PySocks](https://github.com/Anorov/PySocks) to enable proxy support. ```pip3 install pysocks```
* [python-dateutil][https://github.com/dateutil/dateutil] ```pip3 install python-dateutil```
* [ffmpeg](https://ffmpeg.org/) or [avconv](https://libav.org/) for postprocessing and/or for DASH streams

## For Windows <i class="fab fa-windows"></i>

* Install [cx_freeze](https://anthony-tuininga.github.io/cx_Freeze/)
* Clone the repository https://github.com/spaam/svtplay-dl.git
* cd path\to\svtplay-dl && mkdir build
* `pip install -e .`
* python3 setversion.py # this will change the version string to a more useful one
* python3 %PYTHON%\\Scripts\\cxfreeze --include-modules=queue,idna.idnadata --target-dir=build bin/svtplay-dl
* Find binary in build folder. you need svtplay-dl.exe and pythonXX.dll from that folder to run svtplay-dl.exe
