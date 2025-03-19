#!/bin/zsh

BASE_TAG=$1
TAG="$BASE_TAG"
ORIGIN="origin"

echo "tag=$TAG, base_tag=$BASE_TAG, origin=$ORIGIN"

git tag -d "$TAG"
git push -d "$ORIGIN" "$TAG"
git tag -d latest
git push -d latest

git tag "$TAG"
git push --tags "$ORIGIN" "$TAG"
git tag latest
git push --tags latest


echo "⭕ upload tag done"