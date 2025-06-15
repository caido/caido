#!/bin/bash

# This script finds all labels in caido/caido and updates them to remove spaces.

REPO="caido/caido"

echo "Finding all labels and stripping spaces..."

# Get all labels as JSON
labels=$(gh label list --repo "$REPO" --json name --limit 1000)

# Use jq to iterate over each label
echo "$labels" | jq -c '.[]' | while read -r label; do
  old_name=$(echo "$label" | jq -r '.name')
  new_name=$(echo "$old_name" | tr -d ' ')
  
  if [ "$old_name" != "$new_name" ]; then
    echo "Renaming label '$old_name' to '$new_name'"
    gh label edit "$old_name" --repo "$REPO" -n "$new_name"
  fi
done
