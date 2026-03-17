# FileConvertTool — Next.js Website

Full Next.js 14 website for [fileconverttool.com](https://www.fileconverttool.com).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Geist (Google Fonts)
- **Hosting:** Vercel
- **API:** Railway (`https://fileconverttool-api-production.up.railway.app`)
- **Analytics:** Google Analytics 4 (G-H6WFHBPDQQ)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with converter UI + popular conversions |
| `/[slug]` | Dynamic converter pages (e.g., `/png-to-jpg`) with SEO content |
| `/pricing` | Free / Pro / Business plan comparison |
| `/formats` | All supported formats with details |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Individual blog posts (5 starter articles) |
| `/faq` | 19 frequently asked questions |
| `/about` | About us page |
| `/contact` | Contact form + info |
| `/privacy` | Privacy policy (AdSense-compliant) |
| `/terms` | Terms of service |

## Features

- **200+ converter pages** auto-generated for all format combinations
- **SEO optimised:** unique meta titles/descriptions, FAQ/HowTo/WebApplication schema, auto sitemap.xml, robots.txt
- **Freemium model:** 10 free conversions/day tracked via localStorage
- **Dark/light theme** with system preference detection
- **Mobile-first responsive** with burger menu under 768px
- **Pixel-perfect design** matching original single-page site

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push to GitHub repo `designvenue05/fileconverttool-site`
2. Connect repo in Vercel dashboard
3. Add custom domain `fileconverttool.com` in Vercel
4. Configure GoDaddy DNS:
   - A record: `76.76.21.21`
   - CNAME `www`: `cname.vercel-dns.com`

## Environment

No environment variables required — the API URL is hardcoded for simplicity.
