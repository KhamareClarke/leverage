# Leverage Journal - Premium A5 Productivity System

## Latest Updates

### November 14, 2025
- Fixed chapter divider icons to match Chapter 1's clean style
- Updated QR code placeholders with consistent gold styling
- Improved CSS to ensure proper display of gold elements
- Fixed icon class names for consistent styling

### November 13, 2025
- COMPLETE QR CODE REPLACEMENT: Replaced all placeholder QR codes with real ones
- MAJOR FIXES: Fixed 7 Laws layout, added real QR codes, improved A5 sizing

### November 12, 2025
- Updated journal with page renumbering, QR code removal, and certificate changes
- FINAL UPDATE: Completed journal with 129 unique quotes
- Improved dedication logo and fixed milestone page alignment

## 📖 Overview

The Leverage Journal is a premium A5-sized productivity journal designed to help you plan, execute, and achieve your goals with a structured framework.

## 🖨️ Export to PDF

### **Method 1: Chrome/Edge Print (Recommended)**
1. Open `index.html` in **Google Chrome** or **Microsoft Edge**
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Configure print settings:
   - **Destination:** Save as PDF
   - **Paper Size:** A5 (148 × 210 mm)
   - **Margins:** None
   - **Scale:** 100% (Default)
   - **Options:**
     - ✅ Background graphics
     - ❌ Headers and footers
   - **Pages:** All (should show 222)
4. Click **Save**
5. Name your file: `Leverage-Journal-A5.pdf`

### **Method 2: Firefox Print**
1. Open `index.html` in **Firefox**
2. `Ctrl+P` or `Cmd+P`
3. Settings:
   - Paper: A5
   - Print backgrounds: On
   - Scale: 100%
   - Margins: None
4. Save as PDF

### **Method 3: WeasyPrint (Command Line)**
```bash
pip install weasyprint
weasyprint index.html Leverage-Journal-A5.pdf
```

### **Method 4: Prince XML (Professional)**
```bash
prince index.html -o Leverage-Journal-A5.pdf --page-size=A5
```

## ✅ Quality Checklist

After exporting, verify:

- [ ] **Total pages = 222**
- [ ] Black background renders correctly
- [ ] Gold colors (#FFD700) are vibrant
- [ ] Page numbers appear (bottom right, 001-222)
- [ ] Writing lines are visible (0.4pt minimum)
- [ ] Borders and ornaments print clearly
- [ ] Text is sharp and legible
- [ ] No white gaps between pages
- [ ] QR codes display properly
- [ ] Footer wisdom appears on each page

## 📖 Structure Overview

### **Pages 1-6: Front Matter**
1. Cover
2. My Commitment
3. Your Vision
4. My Why
5. My Team
6. Imprint

### **Pages 7-23: PLAN Section (17 pages)**
7. PLAN divider
8-23. 8 Goals × 2 pages each

### **Pages 24-204: DO Section (181 pages)**
24. DO divider
25-204. 90 Daily Spreads (2 pages each)

### **Pages 205-222: ACHIEVE Section (18 pages)**
205. ACHIEVE divider
206-218. 13 Weekly Reviews
219. Victory divider
220. You Did It
221. Notes
222. Legacy Message

## 🎨 Design Features

- **Black & Gold Aesthetic:** Premium luxury design
- **Typography:**
  - Headers: Cormorant Garamond (600-700)
  - Body: Inter (400-700)
- **Gold Gradient:** Linear gradient on titles
- **Decorative Borders:** Gold corner ornaments on every page
- **Writing Lines:** 28px height with gold accent marker
- **Quote Boxes:** Styled callouts with author attribution
- **Grid Trackers:** Habit tracking grids
- **QR Codes:** Functional QR codes for digital integration

## 🔧 Customization

### **Changing Colors**

Edit CSS variables in `css/journal.css`:
```css
:root {
    --gold: #FFD700;
    --gold-metallic: #F4C430;
    --gold-dark: #B8860B;
    --black: #000000;
    --black-soft: #0D0D0D;
    --black-card: #1A1A1A;
}
```

### **Adjusting Print Margins**

In `css/journal.css`, modify:

```css
@page {
    size: 148mm 210mm;
    margin: 10mm; /* Adjust this value */
}
```

## 🚀 Advanced: Adding Bleed

For professional printing with bleed:
1. Uncomment the bleed variant in `css/journal.css`:
```css
@page {
    size: 154mm 216mm;  /* A5 + 3mm bleed on all sides */
    margin: 0;
    marks: crop cross;
    bleed: 3mm;
}
```
2. Adjust page padding in `.page` class
3. Export with crop marks enabled

## 📝 Copyright & License

**© 2025 Leverage App. All rights reserved.**
- This journal template is proprietary
- Quotes used are public domain or attributed
- For commercial licensing: contact@leverage.app

## 🛠️ Technical Notes

### **No JavaScript**
- Completely static HTML
- No `document.write()` or runtime generation
- All 222 pages pre-rendered in DOM

### **CSS Page Counters**
```css
@page {
    counter-increment: page;
}

.page-number::after {
    content: counter(page, decimal-leading-zero);
}
```

### **Print-Safe Strokes**
- Minimum line weight: 0.4pt
- Gold borders: 1-1.5pt
- Black borders: 0.4pt

### **Font Loading**
- Fonts embedded as base64 data URIs
- `font-display: swap` for better rendering
- No external CDN dependencies

### **Accessibility**
- Semantic HTML headings (h1→h2→h3)
- Decorative SVGs marked `aria-hidden="true"`
- Proper color contrast (gold on black)

## 📊 File Sizes

- `index.html`: ~450 KB
- `css/journal.css`: ~15 KB
- **Total package:** < 500 KB

After PDF export: ~2-4 MB (depending on compression)

## 🛠 Troubleshooting

### **Issue: Page count not 222**
- Check browser zoom is 100%
- Verify print scale is 100%
- Ensure paper size is exactly A5

### **Issue: Gold colors look orange/brown**
- Enable "Background graphics" in print settings
- Check color management settings
- Try different PDF viewer

### **Issue: Writing lines too thin**
- Lines are 0.4pt (minimum for print)
- Increase if needed in CSS: `.writing-line { border-bottom: 0.6pt ... }`

### **Issue: Fonts look different**
- Embedded fonts may render differently per browser
- Chrome/Edge recommended for consistency

## 🔧 Support

For technical support or customization requests:
- Email: support@leverage.app
- Website: https://leverage.app
- Documentation: https://docs.leverage.app

## 🗓️ Build Info

**Version:** 1.0.0 (A5 Edition)
**Generated:** 2025
**Format:** Static HTML + CSS
**Framework:** Plan • Do • Achieve
**Target:** Professional print-ready A5 journal

## ✨ Credits

**Design & Development:** Legacy Leverage Publishing
**Typography:** Cormorant Garamond, Inter
**Quotes:** Public domain sources
**Methodology:** Evidence-based goal-setting framework

**🎯 Ready to print. Ready to build. Ready to achieve.**
