# Deployment Script for AIC Sengani Girls School Website

# Stop on any error
$ErrorActionPreference = 'Stop'

# Function to check if a command exists
function Test-CommandExists {
    param ($command)
    $oldPreference = $ErrorActionPreference
    $ErrorActionPreference = 'stop'
    try { if (Get-Command $command) { return $true } }
    catch { return $false }
    finally { $ErrorActionPreference = $oldPreference }
}

# Verify prerequisites
Write-Host "Checking prerequisites..." -ForegroundColor Cyan

# Check Node.js
if (-not (Test-CommandExists node)) {
    Write-Host "Node.js is not installed. Please install Node.js from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check npm
if (-not (Test-CommandExists npm)) {
    Write-Host "npm is not installed. Please install Node.js from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Navigate to frontend directory
Set-Location "C:\Users\Sirm\CascadeProjects\aic-sengani-girls-school\frontend"

# Clean and install dependencies
Write-Host "Cleaning and installing dependencies..." -ForegroundColor Cyan
npm cache clean --force
npm install

# Build the project
Write-Host "Building the project..." -ForegroundColor Cyan
npm run build

# Prepare deployment configuration
$deployConfig = @{
    "site_name" = "aic-sengani-girls-school"
    "build_command" = "npm run build"
    "publish_directory" = "build"
    "environment_variables" = @{
        "REACT_APP_SCHOOL_NAME" = "AIC Sengani Girls School"
        "REACT_APP_CONTACT_EMAIL" = "[email protected]"
    }
}

# Save deployment configuration
$deployConfig | ConvertTo-Json | Out-File -FilePath "deployment_config.json"

# Generate README for deployment
$readmeContent = @"
# AIC Sengani Girls School Website Deployment

## Deployment Details
- Site Name: $($deployConfig.site_name)
- Build Command: $($deployConfig.build_command)
- Publish Directory: $($deployConfig.publish_directory)

## Environment Setup
Ensure the following environment variables are set in your deployment platform.

## Deployment Checklist
- [x] Dependencies Installed
- [x] Project Built
- [ ] Deployed to Hosting Platform
- [ ] Domain Configured
- [ ] SSL Certificate Installed

Deployed on: $(Get-Date)
"@

$readmeContent | Out-File -FilePath "DEPLOYMENT_README.md"

Write-Host "Deployment preparation complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review deployment_config.json" -ForegroundColor Yellow
Write-Host "2. Review DEPLOYMENT_README.md" -ForegroundColor Yellow
Write-Host "3. Manually deploy to Netlify or your preferred hosting platform" -ForegroundColor Yellow
