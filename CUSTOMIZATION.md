# Portfolio Customization Guide

This guide will help you customize your portfolio website to match your personal brand and content.

## Quick Start

All the main content can be edited in one place: `src/constants/portfolio.js`

## Customization Options

### 1. Personal Information

Edit your personal details in the `personalInfo` object:

```javascript
export const personalInfo = {
  name: "YOUR NAME",
  title: "YOUR TITLE",
  tagline: "Your personal tagline or introduction",
  location: "Your City",
  email: "your.email@example.com",
  availableForWork: true // Set to false to hide availability indicator
};
```

### 2. Social Links

Update your social media profiles in the `socialLinks` object:

```javascript
export const socialLinks = {
  linkedin: "https://linkedin.com/in/yourprofile",
  instagram: "https://instagram.com/yourprofile",
  cv: "/path/to/your/cv.pdf" // or external link
};
```

### 3. Experience

Add or modify your work experience in the `experience` array:

```javascript
export const experience = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "Start Year - End Year"
  },
  // Add more experiences...
];
```

### 4. Case Studies

Customize your project showcases in the `caseStudies` array:

```javascript
export const caseStudies = [
  {
    company: "COMPANY NAME",
    title: "Project title goes here",
    description: "Brief description of the project and its impact",
    tags: ["TAG 1", "TAG 2", "TAG 3"],
    metrics: [
      { value: "1.1%", label: "METRIC NAME" },
      { value: "62%", label: "ANOTHER METRIC" }
    ],
    bgColor: "#b1d1f6", // Hex color for card background
    image: "/path/to/screenshot.png", // or null
    link: "#" // Link to full case study
  },
  // Add more case studies...
];
```

## Styling Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'primary': '#32404f',      // Main text color
  'secondary': 'rgba(50, 64, 79, 0.58)', // Secondary text
  'accent': 'rgba(50, 64, 79, 0.75)',    // Accent text
},
```

### Fonts

The portfolio uses two fonts:
- **Geist Sans**: For navigation and headers
- **Manrope**: For body text and content

To change fonts:
1. Update the font imports in `src/index.css`
2. Modify the font family in `tailwind.config.js`

### Case Study Card Colors

Each case study has its own background color. Choose colors that complement each other:

- Blue: `#b1d1f6`
- Purple: `#b1aaec`
- Green: `#d8ecaa`
- Pink: `#f6b1d1`
- Yellow: `#f6ecb1`
- Orange: `#f6d1b1`

## Adding Images

### Case Study Screenshots

1. Add your project screenshots to the `public/images/` folder
2. Update the `image` property in each case study:

```javascript
image: "/images/project-screenshot.png"
```

### Profile Photo (Optional)

To add a profile photo to the hero section:

1. Add the image to `public/images/`
2. Modify `src/components/Hero.jsx` to include an `<img>` tag

## Responsive Breakpoints

The portfolio is responsive across all devices. Default breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Adjust breakpoints in `tailwind.config.js` if needed.

## SEO Optimization

Update the meta tags in `index.html`:

```html
<title>Your Name - Product Designer Portfolio</title>
<meta name="description" content="Your custom description here" />
```

For better SEO, consider adding:
- Open Graph tags
- Twitter Card tags
- A favicon

## Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Hosting

The built files in the `dist/` folder can be deployed to:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Custom Server**: Upload `dist/` contents via FTP/SFTP

## Tips for Customization

1. **Keep it Simple**: Don't overcrowd with too many case studies. 3-5 is ideal.
2. **Use Real Metrics**: Replace placeholder metrics with actual project results.
3. **High-Quality Screenshots**: Use crisp, professional screenshots of your work.
4. **Consistent Colors**: Choose a color palette that reflects your personal brand.
5. **Regular Updates**: Keep your portfolio fresh with recent projects and experience.

## Need Help?

If you encounter issues or need additional customization:

1. Check the component files in `src/components/`
2. Review Tailwind CSS documentation for styling
3. Consult React documentation for functionality changes

## Advanced Customizations

### Adding New Sections

Create a new component in `src/components/` and import it into `src/App.jsx`:

```javascript
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <main>
        <Hero />
        <NewSection /> {/* Your new section */}
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}
```

### Adding Animations

The portfolio includes basic hover effects. For advanced animations, consider:

- **Framer Motion**: React animation library
- **GSAP**: Professional animation library
- **Lottie**: For animated icons and illustrations

### Analytics

Add analytics to track visitors:

```bash
npm install @vercel/analytics
```

Then add to `src/main.jsx`:

```javascript
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
```
