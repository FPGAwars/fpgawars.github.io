# [FPGAwars website](http://fpgawars.github.io/)

[![License](http://img.shields.io/:license-gpl-blue.svg)](http://opensource.org/licenses/GPL-2.0)

Based on [Start Bootstrap Agency template](https://github.com/BlackrockDigital/startbootstrap-agency).


## Development

To use the source files, you will need to have npm installed globally along with Gulp.js. To start:
* Run `npm install` in the root directory
* Run `gulp dev` and edit the files as needed

If you need to update the plugins included with this template, simply run the following tasks:
* First run `npm update` to update the dependencies
* Then run `gulp copy` to copy the new versions to their proper destinations

Project and Tutorials images: 600x510px

Workshops and Talks images: scale to 550, add canvas 600x510px with Gimp or with ImageMagick:

```
$ convert input.png -resize 550 -background white -gravity center -extent 600x510 output.png
```
