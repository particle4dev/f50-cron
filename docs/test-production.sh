#!/bin/bash

function fileExists {
if [ -f $1 ]; then
  return 0
fi
return 1
}

if fileExists "./bin/.env"; then
. "./bin/.env"
fi

node ./build/index.js

if fileExists "./bin/.clean"; then
. "./bin/.clean"
fi