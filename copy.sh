#!/bin/bash

source_file="challenges/01.js"

for ((i=2; i<=60; i++)); do
  destination_file="challenges/${i}.js"
  cp "$source_file" "$destination_file"
done

