#!/usr/bin/env bash

if [[ -z ${PR_NUMBER} ]]; then
  echo "Not a PR; Exiting with FAILURE code"
  exit 1
fi

URL="https://api.github.com/repos/${GITHUB_REPO}/pulls/${PR_NUMBER}/files?per_page=1000"
FILES=$(curl -s -X GET -G "${URL}" | jq -r '.[] | .filename')

REGEXES=()
for CHECK in "$@"
do
  if [[ ${CHECK} == "python" ]]; then
    REGEX="(^\.github\/workflows\/.*python|^tests\/|^superset\/|^setup\.py|^requirements\/.+\.txt|^\.pylintrc)"
    echo "Searching for changes in python files"
  elif [[ ${CHECK} == "frontend" ]]; then
    REGEX="(^\.github\/workflows\/.*(bashlib|frontend|e2e)|^superset-frontend\/)"
    echo "Searching for changes in frontend files"
  else
    echo "Invalid check: \"${CHECK}\". Falling back to exiting with FAILURE code"
    exit 1
  fi
  REGEXES=("${REGEXES[@]}" "${REGEX}")
done
echo

cat<<EOF
CHANGED FILES:
$FILES
EOF

for FILE in ${FILES}
do
  for REGEX in "${REGEXES[@]}"
  do
    if [[ "${FILE}" =~ ${REGEX} ]]; then
      echo "Detected changes in following file: ${FILE}"
      echo "Exiting with FAILURE code"
      exit 1
    fi
  done
done
echo "No changes detected... Exiting with SUCCESS code"
exit 0