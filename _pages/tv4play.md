---
layout: page
title: tv4play
permalink: /tv4play/
icon: fas fa-folder-open
description: tv4play workarounud
---



Login to tv4play.se, then press `ctrl + shift + i` or `F12`, then press `console` tab.
<br />
![console](/assets/console.png) <br />

copy the code below and paste it in the text area next to the `>` sign then press enter.

```bash
document.cookie
  .split("; ")
  .find((row) => row.startsWith("tv4-refresh-token="))
  ?.split("=")[1]; 
```

Copy that text that starts with `ey..`<br />
then you can use it like this: `svtplay-dl --token "ey.." https://tv4play.se/..`

or use put it in the [config](/config/) like this for example

```yaml
service:
  tv4play:
    token: "ey..."
```