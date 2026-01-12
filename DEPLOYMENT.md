# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## Prerequisites

Before deploying, make sure:
- All content is updated in `src/constants/portfolio.js`
- Project builds successfully: `npm run build`
- No console errors when running `npm run dev`

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment with automatic HTTPS and global CDN.

#### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to deploy.

#### Custom Domain:
- Go to your project settings in Vercel
- Navigate to "Domains"
- Add your custom domain
- Update DNS records as instructed

**Build Settings** (auto-detected):
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### 2. Netlify

Netlify is another excellent option with similar features to Vercel.

#### Steps:

1. **Via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Via Drag and Drop**:
   - Build your project: `npm run build`
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder to deploy

3. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

#### Custom Domain:
- Go to "Domain settings" in your site dashboard
- Click "Add custom domain"
- Follow DNS configuration instructions

---

### 3. GitHub Pages

Deploy directly from your GitHub repository.

#### Steps:

1. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**:
   Add homepage and deployment scripts:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // your repo name
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

Your site will be live at: `https://yourusername.github.io/portfolio`

---

### 4. Custom Server (VPS/Shared Hosting)

Deploy to your own server via FTP/SFTP or SSH.

#### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload via FTP**:
   - Connect to your server using an FTP client (FileZilla, Cyberduck)
   - Upload all files from the `dist/` folder to your web root
   - Typical paths: `/public_html/`, `/www/`, `/htdocs/`

3. **Upload via SSH**:
   ```bash
   # Build locally
   npm run build
   
   # Transfer files
   scp -r dist/* user@yourserver.com:/path/to/web/root/
   ```

4. **Configure Server**:
   
   **Apache (.htaccess)**:
   Create `.htaccess` in web root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **Nginx**:
   Update server block:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

### 5. Firebase Hosting

Google's hosting solution with free SSL and CDN.

#### Steps:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```
   - Select existing project or create new one
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub deployment: Optional

4. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

Your site will be live at: `https://your-project.web.app`

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] Images display properly
- [ ] Smooth scrolling functions
- [ ] Mobile responsiveness
- [ ] Forms submit correctly (if any)
- [ ] Contact links work
- [ ] Social media links are correct
- [ ] HTTPS is enabled
- [ ] Custom domain configured (if applicable)

## Performance Optimization

### After Deployment:

1. **Test Performance**:
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

2. **Optimize Images**:
   - Use WebP format for better compression
   - Compress images before uploading
   - Use appropriate image sizes

3. **Enable Compression**:
   Most modern hosting platforms enable Gzip/Brotli automatically.

4. **Set up CDN**:
   Vercel and Netlify include CDN by default. For custom servers, consider Cloudflare.

## Analytics Setup

### Google Analytics 4:

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics:

```bash
npm install @vercel/analytics
```

Add to `src/main.jsx`:
```javascript
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
```

## Troubleshooting

### Build Fails:
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for errors: `npm run build`
- Verify Node version: `node --version` (should be 18+)

### 404 Errors:
- Ensure server is configured for SPA routing
- Check `.htaccess` or server config files

### Images Not Loading:
- Verify image paths start with `/` for absolute paths
- Check that images are in `public/` folder
- Confirm images were included in build

### Fonts Not Loading:
- Check font URLs in `src/index.css`
- Verify internet connection (for external fonts)
- Consider self-hosting fonts for better performance

## Continuous Deployment

For automatic deployments on every commit:

**Vercel/Netlify**:
- Automatically enabled when connecting GitHub repository
- Every push to main branch triggers deployment

**GitHub Actions** (for other hosts):
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      # Add deployment steps for your hosting
```

## Security Best Practices

1. Keep dependencies updated: `npm update`
2. Use environment variables for sensitive data
3. Enable HTTPS (automatic with Vercel/Netlify)
4. Set appropriate CORS headers if needed
5. Add security headers via hosting platform

## Getting Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)

---

Happy Deploying! 🚀
