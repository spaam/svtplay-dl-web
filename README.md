# Add a new release:

Update [config](src/config.js) to the correct date and version number then
make a post about the release in [posts](src/data/posts/) with the correct data.

### example of release post:

```
---
layout: post
title: "4.163"
slug: "4.163"
date: "2025-11-03 19:31:00 +0100"
categories: releases
windows-amd64: true
windows-win32: true
binary: true
---

- tv4play: fix token issue
```

- `slug` need to be the version number
- `title` will be the title of the release
- `date` the date when we did the release
- `categories` should be be `releases` if its a release
- `windows-amd64` is the windows 64bit zip file
- `windows-win32` is the windows 32bit zip file
- `binary` is the python zip onefile
- old stuff:
    - `windows_old_exe` is the old windows .exe pyinstaller thing
    - `windows_old_zip` old windows zip file.

the individual release page this is defined in this file [file](src/pages/[id].astro).

[archive](src/pages/archive/index.astro) only have the latest release type.

# Development

you need to have `pnpm`
`pnpm install` then `pnpm dev`

then check if everything is fine with

- `pnpm lint`
- `npm exec prettier . --write` to format the files
