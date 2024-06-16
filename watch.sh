#!/usr/bin/bash

# Watches
sass --style=compressed --no-source-map --watch src:out &
tsc --watch &
wait
