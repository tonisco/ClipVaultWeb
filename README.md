# ClipVault Website - Setup Guide

## Quick Start

The website is running! Just need a few asset replacements:

```bash
cd clip-vault-web
pnpm dev
```

Visit: http://localhost:3000

## Required Actions

### 1. Replace Logo (Remove Background)

**Current Issue**: The generated logo at `/public/logo.png` may have a white/colored background.

**Solution**:

1. Use an image editor or online tool (remove.bg, photopea.com) to remove the background
2. Export as PNG with transparency
3. Replace `/public/logo.png`

**Alternative**: Create a new logo:

- Size: 512x512px minimum
- Format: PNG with transparent background
- Should include vault/lock icon + play button theme

### 2. Download Official Store Badges

**Google Play Badge**:

1. Visit: https://play.google.com/intl/en_us/badges/
2. Click "Get badge" or use direct link: https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png
3. Save as `/public/play-store.png`

**Apple App Store Badge**:

1. Visit: https://developer.apple.com/app-store/marketing/guidelines/#downloadOnAppstore
2. Download "Download on the App Store" badge
3. Save as `/public/app-store.png`

**Important**: Use the official badges to comply with brand guidelines!

### 3. (Optional) Add Real App Screenshots

The "See It In Action" section currently shows stylized mockup cards. To add real screenshots:

1. **Take Screenshots**: Capture your actual app screens (downloads, library, player)
2. **Optional Frame**: Use mockup generators like:
   - mockuphone.com
   - smartmockups.com
   - shots.so
3. **Save Images**: Place in `/public` folder (e.g., `screenshot-downloads.png`)
4. **Update Code**: Edit `src/app/page.tsx` around lines 200-318

## Build for Production

When ready to deploy:

```bash
pnpm build
pnpm start
```

## Deploy to Vercel

1. Push code to GitHub
2. Import project at vercel.com
3. Configure:
   - Framework: Next.js
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`
4. Deploy!

## File Structure

```
clip-vault-web/
├── public/
│   ├── logo.png (REPLACE THIS)
│   ├── play-store.png (REPLACE THIS)
│   ├── app-store.png (REPLACE THIS)
│   └── app-mockup.png
├── src/
│   ├── app/
│   │   ├── page.tsx (Homepage)
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── layout.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── FAQ.tsx
│       ├── FeatureCard.tsx
│       └── Button.tsx
└── [config files]
```

## Features Implemented

✅ Responsive navbar with theme toggle  
✅ Hero section with gradients  
✅ How It Works (3 steps)  
✅ App showcase mockups  
✅ Features grid (9 cards)  
✅ Stats section  
✅ FAQ (7 questions)  
✅ CTA/Download section  
✅ Footer with legal links  
✅ Privacy Policy page  
✅ Terms of Service page  
✅ Dark/Light mode  
✅ SEO optimized

## Next Steps

1. Replace logo with transparent version
2. Download and add official store badges
3. (Optional) Add real app screenshots
4. Add actual store URLs when apps are published
5. Deploy to production

That's it! 🎉
