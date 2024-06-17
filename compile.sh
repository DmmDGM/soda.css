#!/usr/bin/bash

# Compiles
rm -rf ./out/* 
sass --style=compressed --no-source-map src:out
tsc

# Prints status
echo "Done!"
read
