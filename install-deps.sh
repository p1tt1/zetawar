#!/bin/bash

# Install npm dependencies
npm install

# Install Clojure dependencies
clojure -P -M:dev:build:test

echo "Dependencies installed successfully!"
