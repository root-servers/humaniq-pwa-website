#!/usr/bin/env bash
set -x

export IMAGE_NAME=pwa-website
export SERVICE_NAME=$IMAGE_NAME
export CHART_PATH=deploy/helm
export APP_VERSION=`git describe --tags --always HEAD | head -n 1`

deploy() {
    source ./deploy/scripts/deploy_helper.sh google_auth
    docker pull eu.gcr.io/humaniq-168420/site:base
    source ./deploy/scripts/deploy_helper.sh deploy
}

deploy