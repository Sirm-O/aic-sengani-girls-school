# AIC Sengani Girls School Website Deployment Guide

## Prerequisites
- GitHub Account
- Netlify Account
- Node.js (v16+)
- Git

## Deployment Workflow

### 1. GitHub Repository Setup
1. Create a new GitHub repository
2. Name: `aic-sengani-girls-school`
3. Public visibility
4. Do NOT initialize with README or .gitignore

### 2. Local Repository Preparation
```bash
cd aic-sengani-girls-school
git init
git add .
git commit -m "Initial deployment commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aic-sengani-girls-school.git
git push -u origin main
```

### 3. Netlify Deployment
1. Log in to Netlify
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select repository: `aic-sengani-girls-school`
5. Build Settings:
   - Build Command: `npm run build`
   - Publish Directory: `build`

### 4. Environment Variables
Set in Netlify Dashboard:
- `REACT_APP_SCHOOL_NAME`: AIC Sengani Girls School
- `REACT_APP_CONTACT_EMAIL`: [email protected]

## Post-Deployment Checklist
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Forms functional
- [ ] Responsive on mobile devices
- [ ] SSL certificate installed
- [ ] Custom domain configured (optional)

## Troubleshooting
- Check Netlify build logs
- Verify environment variables
- Ensure Node.js and npm versions compatible

## Support
Contact school IT administrator or web developer for assistance.
