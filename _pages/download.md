---
layout: page
title: Download
permalink: /archive/
icon: fas fa-download
description: Download page for svtplay-dl
---

<p class="lead">Before you download anything here, have a look at the <a href="/install/">install page</a> first.</p>

There might be a better solution for you, than downloading a file from here.

* [Latest (currently 4.27](https://svtplay-dl.se/download/4.27/svtplay-dl)
* [Latest windows 64bit .exe (currently 4.27)](https://svtplay-dl.se/download/4.27/svtplay-dl-amd64.zip)
* [Latest windows 32bit .exe (currently 4.27)](https://svtplay-dl.se/download/4.27/svtplay-dl-win32.zip)

* [Snapshots](/download/snapshots/) created from each push. it might be broken. use at your own risk.

<div class="list-group">
{% for post in site.posts %}
<a href="{{ post.url }}" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ post.title }}</h5>
      <small class="text-muted">{{ post.date | date: "%Y-%m-%d" }}</small>
    </div>
    <p class="mb-1">{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>
    <small class="text-muted">{{ post.author }}</small>
</a>
{% endfor %}
</div>
