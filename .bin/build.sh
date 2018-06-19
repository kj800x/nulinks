#!/bin/bash

# Build the site
cd nugo-site
npm run build
cd ..

# Save the CWD
pushd . > /dev/null
cd $(dirname $0)

# Clean up any files that are currently in our workspace
rm -rf /tmp/nugo/*

# Set up the folder structure that we'll need
mkdir -p /tmp/nugo/nugo-extension

# Copy extension files
cp -Rp nugo-extension/* /tmp/nugo/nugo-extension

# Copy common files
# Remove the symbolic link
rm /tmp/nugo/nugo-extension/nugo-common
# Copy files
mkdir -p /tmp/nugo/nugo-extension/nugo-common
cp -Rp nugo-common/* /tmp/nugo/nugo-extension/nugo-common

# Copy site build files
mkdir -p /tmp/nugo/nugo-extension/pages
cp -Rp nugo-site/build/* /tmp/nugo/nugo-extension/pages
# Remove site's manifest
rm /tmp/nugo/nugo-extension/pages/manifest.json

# Build the zip file
cd /tmp/nugo
zip -r nugo-extension.zip nugo-extension

# Restore the CWD
popd > /dev/null

# Copy the zip back here
cp /tmp/nugo/nugo-extension.zip .

# Clean up
rm -rf /tmp/nugo/*
