# Chaitali Gaikwad - Portfolio Website

## Design Guidelines

### Design References
- **Brittany Chiang** (brittanychiang.com): Clean developer portfolio, minimal, dark theme
- **Minimal & Professional**: Germany-friendly, clean sans-serif, high readability
- **Style**: Modern Minimalism + Dark/Navy Theme + Professional Data Science

### Color Palette
- Primary Background: #0F172A (Dark Navy)
- Secondary Background: #1E293B (Slate 800)
- Card Background: #1E293B with border #334155
- Accent: #38BDF8 (Sky Blue - CTAs and highlights)
- Accent Secondary: #818CF8 (Indigo - secondary highlights)
- Text Primary: #F1F5F9 (Slate 100)
- Text Secondary: #94A3B8 (Slate 400)
- Success/Metric: #34D399 (Emerald)

### Typography
- Font: Inter (Google Fonts) - clean sans-serif
- Heading1: Inter 700, 48px
- Heading2: Inter 600, 36px
- Heading3: Inter 600, 24px
- Body: Inter 400, 16px base
- Small/Labels: Inter 500, 14px

### Key Component Styles
- **Buttons**: Sky blue (#38BDF8) bg, dark text, 8px rounded, hover: brighten
- **Cards**: Slate 800 bg, 1px border slate 700, 12px rounded, hover: lift + glow
- **Timeline**: Vertical line with dot markers, alternating content
- **Skill bars**: Grouped columns with proficiency badges
- **Section transitions**: Fade-in on scroll

### Layout & Spacing
- Single column on mobile, max-width 1200px centered
- Section padding: 80px vertical
- Card gaps: 24px
- Hero: Full viewport height

### Images to Generate
1. **hero-data-visualization-abstract.jpg** - Abstract data visualization with flowing lines, nodes, and connections on dark navy background, futuristic tech feel (Style: minimalist, dark theme)
2. **about-professional-workspace.jpg** - Clean modern workspace with data dashboards on screens, professional tech environment (Style: photorealistic, warm lighting)
3. **projects-data-dashboard.jpg** - Power BI style dashboard with charts, KPIs, and data visualizations on dark background (Style: photorealistic, tech)
4. **skills-tech-abstract.jpg** - Abstract technology pattern with circuit-like connections, code elements, AI/ML symbols on dark background (Style: minimalist, dark navy)

---

## Development Tasks

### Files to Create (8 files max)
1. **src/pages/Index.tsx** - Main single-page portfolio with all sections
2. **src/components/Hero.tsx** - Hero section with headline, tagline, CTAs
3. **src/components/About.tsx** - About/Snapshot section
4. **src/components/Experience.tsx** - Experience timeline
5. **src/components/Projects.tsx** - Projects grid with modal details
6. **src/components/Skills.tsx** - Skills & Tools grouped display
7. **src/components/Education.tsx** - Education, Certifications, Publications combined
8. **src/components/Contact.tsx** - Contact form + Footer combined

### Implementation Notes
- All sections on single page (Index.tsx) with smooth scroll navigation
- Sticky navigation header with section links
- CV download button links to /Chaitali_Gaikwad_CV.pdf
- Responsive: mobile-first approach
- GDPR privacy notice in footer
- Scroll animations using intersection observer
- Project modals using shadcn Dialog component