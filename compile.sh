#!/usr/bin/bash
sass src/main.scss out/soda.css
sass --style=compressed src/main.scss out/soda.min.css
sass src/main.scss out/soda.scss
sass --style=compressed src/main.scss out/soda.min.scss