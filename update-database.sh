#!/bin/bash

echo "Resetting the database..."
./reset-database.sh

echo "Starting the database container..."
./start-database.sh

echo "Generating the database schema..."
npm run db:generate

echo "Pushing the database changes..."
npm run db:push

echo "Seeding the database..."
npm run db:seed

echo "Database update process completed."
