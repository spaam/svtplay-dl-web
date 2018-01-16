---
layout: page
title: Download
description: Download page for svtplay-dl
fa-icon: fas fa-download
permalink: /archive/
---

<p class="lead">Before you download anything here, have a look at the <a href="/install/">install page</a> first.</p>

There might be a better solution for you, than downloading a file from here.

* [Latest (currently 1.9.7)](https://svtplay-dl.se/download/latest/svtplay-dl)
* [Latest windows .exe (currently 1.9.7)](https://svtplay-dl.se/download/latest/svtplay-dl.exe)

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