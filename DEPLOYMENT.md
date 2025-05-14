# Deployment Guide

This guide explains how to deploy your website to GitHub Pages and set up the Cloudflare Worker for the chatbot.

## Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment)
2. [Cloudflare Worker Setup](#cloudflare-worker-setup)
3. [Connecting the Chatbot to the Worker](#connecting-the-chatbot-to-the-worker)
4. [Testing the Deployment](#testing-the-deployment)

## GitHub Pages Deployment

### Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

### Step 1: Prepare Your Repository

1. Create a new GitHub repository for your website
2. Initialize Git in your project folder (if not already done):
   ```bash
   git init
   ```
3. Add your files to Git:
   ```bash
   git add .
   ```
4. Commit your changes:
   ```bash
   git commit -m "Initial commit"
   ```
5. Connect your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```
6. Push your code to GitHub:
   ```bash
   git push -u origin main
   ```

### Step 2: Configure Vite for GitHub Pages

1. Create or update the `vite.config.js` file in your project root:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
});
```

### Step 3: Add GitHub Actions Workflow

1. Create a `.github/workflows` directory in your project:
   ```bash
   mkdir -p .github/workflows
   ```

2. Create a deployment workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

### Step 4: Build and Deploy

1. Build your project locally to test:
   ```bash
   npm run build
   ```

2. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Add GitHub Pages configuration"
   git push
   ```

3. GitHub Actions will automatically build and deploy your site to GitHub Pages.

4. Go to your repository settings > Pages to check the deployment status.

## Cloudflare Worker Setup

### Step 1: Create a Cloudflare Account

1. Sign up for a free Cloudflare account at [cloudflare.com](https://cloudflare.com)
2. Navigate to the Workers section

### Step 2: Create a New Worker

1. Click "Create a Service"
2. Name your service (e.g., "openrouter-proxy")
3. Click "Create service"

### Step 3: Deploy the Worker Script

1. Click on "Quick edit"
2. Replace the default code with the content of the `cloudflare-worker.js` file
3. Update the following variables in the script:
   - `OPENROUTER_API_KEY`: Your OpenRouter API key
   - `ALLOWED_ORIGINS`: Add your GitHub Pages domain (e.g., `https://yourusername.github.io`)
   - `HTTP-Referer`: Update with your GitHub Pages domain
4. Click "Save and Deploy"

### Step 4: Configure Custom Domain (Optional)

1. If you want to use a custom domain for your worker, go to the "Triggers" tab
2. Add a custom domain (e.g., `api.yourdomain.com`)

## Connecting the Chatbot to the Worker

### Step 1: Set Up Environment Variables

1. Create a `.env` file in the project root (or copy from `.env.example`)
2. Add your Cloudflare Worker URL:
   ```
   VITE_CLOUDFLARE_WORKER_URL=https://your-worker-name.yourusername.workers.dev
   ```
3. The application will automatically use this environment variable for API calls

> **IMPORTANT**: Never commit your `.env` file to the repository as it may contain sensitive information. The `.env` file is already added to `.gitignore`.

### Step 2: Commit and Push Changes

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update Cloudflare Worker URL"
   git push
   ```

2. GitHub Actions will automatically rebuild and deploy your site.

## Testing the Deployment

1. Visit your GitHub Pages site: `https://yourusername.github.io/your-repo-name/`
2. Open the chat bot by clicking on the chat bubble
3. Test different scenarios:
   - Ask general questions about your services
   - Try the contact form
   - Try the booking form

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Cloudflare Worker logs for any errors
3. Make sure your OpenRouter API key is valid and has access to the Qwen models

## Troubleshooting

### CORS Issues

If you see CORS errors in the console:
1. Make sure your GitHub Pages domain is included in the `ALLOWED_ORIGINS` array in the Cloudflare Worker
2. Check that the `Access-Control-Allow-Origin` header is being set correctly

### API Key Issues

If the OpenRouter API calls are failing:
1. Verify your API key is correct in the Cloudflare Worker
2. Check if the model you're using is available in your OpenRouter plan
3. Try a different model from the available list

### GitHub Pages Issues

If your site isn't deploying correctly:
1. Check the GitHub Actions logs for any build errors
2. Make sure the `base` path in `vite.config.js` matches your repository name
3. Verify that the GitHub Pages source is set to the `gh-pages` branch
