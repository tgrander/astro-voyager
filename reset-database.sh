#!/bin/bash
# Use this script to stop, remove Docker containers, and clean up associated volumes for the local development database.
# This script is useful when you've made updates to the schema and need to start fresh.

# TO RUN ON WINDOWS: 
# 1. Install WSL (Windows Subsystem for Linux) - https://learn.microsoft.com/en-us/windows/wsl/install
# 2. Install Docker Desktop for Windows - https://docs.docker.com/docker-for-windows/install/
# 3. Open WSL - `wsl`
# 4. Run this script - `./reset-database.sh`

# On Linux and macOS you can run this script directly - `./reset-database.sh`

DB_CONTAINER_NAME="astro-database"

if ! [ -x "$(command -v docker)" ]; then
  echo "Docker is not installed. Please install Docker and try again.\nDocker install guide: https://docs.docker.com/engine/install/"
  exit 1
fi

# Check if the specific database container is running
if [ "$(docker ps -aq -f name=$DB_CONTAINER_NAME)" ]; then
  echo "Stopping and removing the database container and its associated volumes..."
  docker stop $DB_CONTAINER_NAME
  docker rm -v $DB_CONTAINER_NAME  # The '-v' flag removes associated anonymous volumes
  echo "Database container and volumes have been stopped and removed."
else
  echo "No container named $DB_CONTAINER_NAME found."
fi

echo "Database reset process completed."
