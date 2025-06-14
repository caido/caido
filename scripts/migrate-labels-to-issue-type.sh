#!/bin/bash

# This script finds all issues in caido/caido with exactly one label of type 'kind:'
# and updates them to replace the 'kind:' label with 'type=Feature', preserving other labels.

REPO="caido/caido"

echo "Finding issues with exactly one 'kind:' label..."

# Get all issues with exactly one kind: label, outputting number and labels as JSON
issues=$(gh issue list --repo "$REPO" --state all --search 'label:"kind: question"' -L 100 --json number,labels --jq '
  .[] | select((.labels | map(select(.name | startswith("kind:"))) | length) == 1) | {number, labels}
')

# Use jq to iterate over each issue
echo "$issues" | jq -c '.' | while read -r issue; do
  number=$(echo "$issue" | jq -r '.number')
  echo "Updating issue #$number"

  # Update issue type
  gh api \
    --method PATCH \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    --silent \
    -f type=Question \
    /repos/$REPO/issues/$number

  # Remove kind: label
  gh api \
  --method DELETE \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  --silent \
  /repos/$REPO/issues/$number/labels/kind:%20question
done
