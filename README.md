# [FPGAwars website](http://fpgawars.github.io/)

[![License](http://img.shields.io/:license-gpl-blue.svg)](http://opensource.org/licenses/GPL-2.0)

Based on [Start Bootstrap Agency Jekyll theme](https://github.com/y7kim/agency-jekyll-theme).

### Development

Execute `jekyll serve` to run the website locally.

#### Structure

* `_content`: contains the keys and links of the Projects-Tutorials-Workshops-Talks.
* `_data\strings.yml`: contains all the strings translated (en, es).
* `img`: contains all the images. It is recommended to use the size 600x510px:

Projects & Tutorials: `convert input.png -resize 600 -background "rgba(0,0,0,0)" -gravity center -extent 600x510 output.png`

Workshops & Talks: `convert input.png -resize 550 -background "rgba(0,0,0,0)" -gravity center -extent 600x510 output.png`
