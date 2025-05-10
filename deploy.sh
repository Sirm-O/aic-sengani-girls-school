#!/bin/bash

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Build the project
npm run build

# Navigate back to project root
cd ..

# Deploy to Netlify
netlify deploy --prod
