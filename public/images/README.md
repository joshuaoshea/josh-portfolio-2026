# Portfolio Images

Place your portfolio images in this directory.

## Recommended Structure

```
images/
├── projects/
│   ├── zendesk-project-1.png
│   ├── zendesk-project-2.png
│   └── genesys-project.png
├── profile/
│   └── headshot.jpg
└── icons/
    └── favicon.ico
```

## Image Guidelines

### Case Study Screenshots
- **Format**: PNG or WebP preferred
- **Dimensions**: Minimum 1500x900px (16:9 ratio recommended)
- **Size**: Under 500KB (use compression tools like TinyPNG)
- **Naming**: Use descriptive, lowercase names with hyphens

### Profile/Headshot (if adding)
- **Format**: JPG or WebP
- **Dimensions**: 400x400px or higher (square)
- **Size**: Under 200KB

## Image Optimization

Before adding images:

1. **Resize** to appropriate dimensions
2. **Compress** using tools:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/) (Mac)

3. **Convert** to WebP for better compression:
   ```bash
   # Using cwebp (install via brew on Mac or download from Google)
   cwebp -q 80 input.jpg -o output.webp
   ```

## Using Images in Your Portfolio

Update `src/constants/portfolio.js`:

```javascript
export const caseStudies = [
  {
    // ... other properties
    image: "/images/projects/zendesk-project-1.png",
    // ... rest of config
  }
];
```

## Adding a Favicon

1. Generate favicon using [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Place generated files in `public/` folder
3. Update `index.html` with favicon links

## Tips

- Use consistent naming conventions
- Keep original high-res versions backed up elsewhere
- Test image loading on different devices
- Consider lazy loading for better performance
- Use descriptive alt text for accessibility
