#!/usr/bin/env bash

cd .github/workflows
node generate-contributors.js
ls -lh ../../static/img
cd -
