#!/bin/bash

# This script must be copied to the CI server.
# If you change it, please ask in your PR for the CI server to be updated.

# Build the site
cd nulinks-site
npm run build
cd ..

# Save the CWD
pushd . > /dev/null
cd $(dirname $0)/..

# Clean up any files that are currently in our workspace
rm -rf /tmp/nulinks/*

# Set up the folder structure that we'll need
mkdir -p /tmp/nulinks/nulinks-extension

# Copy extension files
cp -Rp nulinks-extension/* /tmp/nulinks/nulinks-extension

# Copy common files
# Remove the symbolic link
rm /tmp/nulinks/nulinks-extension/nulinks-common
# Copy files
mkdir -p /tmp/nulinks/nulinks-extension/nulinks-common
cp -Rp nulinks-common/* /tmp/nulinks/nulinks-extension/nulinks-common

# Copy site build files
mkdir -p /tmp/nulinks/nulinks-extension/pages
cp -Rp nulinks-site/build/* /tmp/nulinks/nulinks-extension/pages
# Remove site's manifest
rm /tmp/nulinks/nulinks-extension/pages/manifest.json

# Remove other extra files
rm /tmp/nulinks/nulinks-extension/nulinks-common/package.json
rm /tmp/nulinks/nulinks-extension/nulinks-common/package-lock.json
rm /tmp/nulinks/nulinks-extension/nulinks-common/junit.xml
rm -rf /tmp/nulinks/nulinks-extension/nulinks-common/node_modules
rm -rf /tmp/nulinks/nulinks-extension/nulinks-common/test

# Build the zip file
cd /tmp/nulinks
zip -r nulinks-extension.zip nulinks-extension

# Restore the CWD
popd > /dev/null

# Copy the zip back here
cp /tmp/nulinks/nulinks-extension.zip .

# Clean up
#rm -rf /tmp/nulinks/*
