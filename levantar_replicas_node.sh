#!/bin/bash
sudo PUERTO_NODE=3001 docker-compose up -d node
sudo PUERTO_NODE=3002 docker-compose up -d node
sudo PUERTO_NODE=3003 docker-compose up -d node