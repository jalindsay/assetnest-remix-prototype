#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "main" || $VERCEL_GIT_COMMIT_REF == "dev"  ]] ; then 
  echo "This is our main or dev branch"
  npm run build-db
else 
  echo "This is not our main or dev branch"
  npm run build-local-branch
fi