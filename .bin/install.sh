#!/bin/bash

# This script must be copied to the CI server.
# If you change it, please ask in your PR for the CI server to be updated.

cd nulinks-site
npm install
cd ..

cd nulinks-common
npm install
cd ..
