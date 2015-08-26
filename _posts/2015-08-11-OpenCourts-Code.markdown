---
layout: post
title:  "OpenCourt's Code"
date:   2015-08-11 09:50:56
categories: open-source code
excerpt: Get the code. Learn about the code.
---

As the name implies, OpenCourt is an open source project. For now all of the project's code is on [Github here](https://github.com/lauraGgit/OpenCourt). The code for this site is also published [here](https://github.com/lauraGgit/OpenCourt-site) OpenCourt's existing data will be published soon! But it's big so it takes up a lot of space!!!

The bulk of the code is a python based program to scrape the cases, read the text, and build data file of the relationships between the cases.

The visualizations were created in [Gephi](https://gephi.github.io///
	) (Version 0.81 Beta) and then rendered as PNGs. 

Ideally, This graph will be interactive, but D3 at this time was not viable. Within the github repositority there are also a few attempts at pre-rendering the graphs using [D3](https://github.com/mbostock/d3) on the server side using an adaptation of Matt [Baker's Gist](https://gist.github.com/mattbaker/1511770) and this [proof of concept](http://mango-is.com/blog/engineering/pre-render-d3-js-charts-at-server-side.html).
