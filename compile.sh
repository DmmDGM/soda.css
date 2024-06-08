#!/usr/bin/bash

# Compiles
sass --style=compressed --no-source-map src:out
tsc

# Prints status
echo "Done!"
read
