---
layout: page
title: aftonbladet
permalink: /aftonbladet/
icon: fas fa-folder-open
description: aftonbladet premium
---



Login to aftonbladet, press `ctrl + shift + i` or `F12`, then press `network` tab. then go to the aftonbladet plus video, find the call `?access=plus` in the network tab.
<br />
![console](/assets/network.png) <br />

go to the request headers and scroll down to the header: `x-sp-id`
Copy that text that starts with `ey..`<br />
![console](/assets/headers.png) <br />

then you can use it like this: `svtplay-dl --token "ey.." https://www.aftonbladet.se/..`

or use put it in the [config](/config/) like this for example

```yaml
service:
  aftonbladet:
    token: "ey..."
```