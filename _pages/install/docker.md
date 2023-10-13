---
layout: page
title: Install on Docker
permalink: /install/docker/
icon: fab fa-docker
description: Installation instructions for svtplay-dl on Docker
---

## Pull the container

```sh
docker pull spaam/svtplay-dl
```

tags for each version since 2.1. there is also a tag for latest master called `dev`
see [https://hub.docker.com/r/spaam/svtplay-dl](https://hub.docker.com/r/spaam/svtplay-dl)

```sh
docker run -it --rm  -u $(id -u):$(id -g)  -v "$(pwd):/data" spaam/svtplay-dl
```
or create an alias:
###### bash (~/.bashrc)
```sh
alias svtplay-dl='docker run -it --rm -u $(id -u):$(id -g) -v "$(pwd):/data" spaam/svtplay-dl'
```
###### zsh (~/.zshrc)
```sh
alias svtplay-dl='docker run -it --rm -u $(id -u):$(id -g) -v "$(pwd):/data" spaam/svtplay-dl'
```
##### fish (~/.config/fish/config.fish)
```
alias svtplay-dl='docker run -it --rm -u (id -u):(id -g) -v (pwd):/data spaam/svtplay-dl'
```
