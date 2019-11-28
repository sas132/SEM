#!/bin/bash

docker build -t hotburger-service:latest

docker run -it -p 8080:80 hotburger-service
