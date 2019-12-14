#!/bin/bash

docker build -t hotburger-service:latest

docker run -it -p 80:80 hotburger-service
