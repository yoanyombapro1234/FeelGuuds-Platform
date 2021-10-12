#!/usr/bin/env bash
set -euo pipefail

# check-markdown.sh
#
# SUMMARY
#
#   Checks the markdown format within the FeelGuuds-Platform repo.
#   This ensures that markdown is consistent and easy to read across the
#   entire FeelGuuds-Platform repo.

scripts/node_modules/.bin/markdownlint \
  --config scripts/.markdownlintrc \
  --ignore scripts/node_modules \
  .
