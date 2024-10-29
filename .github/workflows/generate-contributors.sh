#!/usr/bin/env bash

cd .github/workflows
node generate-contributors.js
ls -l
cd -
