#!/usr/bin/env bash

echo "Starting prebuild process"

USER_SET_BRANCH=$1
DETECTED_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
BRANCH="${USER_SET_BRANCH:-$DETECTED_BRANCH}"

echo "Using $BRANCH for the CMS"

# Set branch on which the CMS edits files by creating
# the netlify config from the cms-config and overwrite
# the branch setting.
yes | cp -rf ./cms-config.yml ./public/admin/config.yml
sed -i -e "s|CMS_BRANCH|$BRANCH|g" ./public/admin/config.yml