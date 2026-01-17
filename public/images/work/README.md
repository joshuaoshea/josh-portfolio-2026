# Work Page Preview Images

These are the product screenshots displayed in the browser mockups on the Work/Case Studies listing page.

## Current Images

1. **zendesk-voice-intelligence.png** - Post-call intelligence interface
2. **zendesk-ai-voice-agents.png** - AI voice agent admin tools
3. **genesys-digital-channels.png** - Digital channel setup interface

## File Naming Convention

Use the case study ID from `portfolio.js`:
- `{case-study-id}.png`

Examples:
- `zendesk-voice-intelligence.png`
- `zendesk-ai-voice-agents.png`
- `genesys-digital-channels.png`

## Image Specifications

### Dimensions
- **Aspect Ratio**: 749:459
- **Recommended**: 1498px × 918px (2x retina)
- **Minimum**: 749px × 459px

### Format
- **Type**: PNG or WebP
- **Size**: Under 300KB
- **Quality**: High (shows in prominent position)

### Content Guidelines
- Show actual product UI screenshots
- Ensure text is legible
- Use clean, professional cropping
- Consider blurring sensitive data
- Highlight key features/interactions

## Usage

Update your case study in `src/constants/portfolio.js`:

```javascript
export const caseStudies = [
  {
    id: "zendesk-voice-intelligence",
    company: "ZENDESK",
    title: "Unifying Post-Call Intelligence...",
    // ... other fields
    image: "/images/work/zendesk-voice-intelligence.png"  // Add this line
  }
];
```

The image will automatically display in the browser mockup on the work page.

## Quick Export Tips

### From Figma
1. Select your frame/component
2. Export at 2x scale (1498×918)
3. Format: PNG
4. Compress with [TinyPNG](https://tinypng.com/)
5. Place in this folder

### From Screenshots
1. Capture at high resolution
2. Crop to 749:459 aspect ratio
3. Compress before adding
4. Name using case study ID

## Folder Structure

```
public/images/work/
├── zendesk-voice-intelligence.png
├── zendesk-ai-voice-agents.png
├── genesys-digital-channels.png
└── README.md (this file)
```
