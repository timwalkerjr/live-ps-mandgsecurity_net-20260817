# 1. Site Info
SITE_TYPE: Corporate Security Provider
HTML_LANG: en

# 2. Color Token Mapping

---DESIGN_MD_START---
## Visual Theme
High-end, authoritative corporate security brand utilizing a premium gold and deep navy-blue color palette with bold geometric layouts, sharp square-edged elements, and high-contrast typography.

## Colors
- background: hsl(0, 0%, 97%)
- foreground: hsl(217, 51%, 8%)
- muted-foreground: hsl(220, 9%, 45%)
- border: hsl(220, 10%, 90%)
- surface: hsl(0, 0%, 100%)
- primary: hsl(45, 100%, 43%)
- primary-foreground: hsl(217, 51%, 8%)
- primary-hover: hsl(45, 100%, 33%)
- secondary: hsl(218, 11%, 35%)
- secondary-foreground: hsl(0, 0%, 100%)
- dark-background: hsl(215, 51%, 11%)
- dark-foreground: hsl(260, 0%, 98%)
- dark-muted-foreground: hsl(220, 9%, 70%)
- dark-border: hsl(215, 30%, 20%)
- accent: hsl(45, 100%, 43%)

## Page Background
solid hsl(0, 0%, 97%)

## Typography
- Heading font: REQUIRED slug `space-grotesk` (source: "Space Grotesk", weights: 700)
- Body font: REQUIRED slug `manrope` (source: "Manrope", weights: 400, 700)

## Components
- Buttons: Sharp, strictly square corners (`rounded-none`), heavy padding (`px-8 py-4` or `px-6 py-3`), bold uppercase text tracking-wider, text-xs or text-sm.
- Cards: Solid flat white backgrounds, extremely subtle thin light gray border (`border border-gray-100`), crisp margins, with smooth upward vertical translation on hover (`hover:-translate-y-1 transition-all duration-300`).
---DESIGN_MD_END---

# 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 1920px
NAV_BACKGROUND: hsl(215, 51%, 11% / 0.95)
NAV_BORDER_RADIUS: 0px
NAV_POSITION: fixed
NAV_SHADOW: 0 4px 20px rgba(0, 0, 0, 0.15)
SCROLL_BEHAVIOR: none
NAV_DIVIDERS: none

Link style:
- fontSize: text-[12px] (from resolvedDesignFacts)
- fontWeight: font-bold
- fontFamily: var(--font-heading)
- textTransform: uppercase
- letterSpacing: tracking-[0.05em] (0.6px)
- color: oklch(0.98 0 260 / 0.9) (mapped to `text-dark-foreground/90`)
- activeColor: oklch(0.75 0.16 85) (mapped to `text-primary` for the Home link)
- link row layout: `distribution: right`. The navigation links sit to the right side of the header. Spacing: links have standard padding of `px-4`.
- SINGLE LINE: The main desktop menu is configured strictly as a non-wrapping single horizontal flex row. Apply `flex-nowrap whitespace-nowrap` to parent and child elements.
- menu vertical placement: middle (centered vertically relative to logo).

Logo:
- Presence: Brand logo is present.
- src: Use the original URL `https://mandgsecurity.clientsite.agency/project_files/1bf70c2f-d2e2-4a14-9178-9762d73e2ef9/3d957a88-20e5-4612-a102-248b0fcabfa4_compressed_mg-lockup_gold-head_white-text.webp` matched against CDN values in `index.images.json`.
- Size: w-[126px] h-[40px]
- Position: inside-nav (left-aligned)
- Badge: false

CTA button:
- Text: "GET A QUOTE"
- Style: Solid, filled primary gold background (`bg-primary`), dark text (`text-foreground`), uppercase, tracking-wider, `text-[12px] font-bold px-6 py-3 rounded-none`.

# 4. Section Plan

## Hero Section id="hero"
- theme: DARK
- background: bg-dark-background
- backgroundImage: Use background photo matched with `img_res/81c017098ff77a4f07c345b2eb9ad978.webp`.
- overlay: `linear-gradient(rgba(14,27,43,0.85), rgba(14,27,43,0.85)), radial-gradient(at 100% 0%, oklch(0.75 0.16 85 / 0.12), rgba(0,0,0,0) 55%)`
- text: text-dark-muted-foreground
- heading color: text-dark-foreground
- heading size: text-[60px] leading-[60px] font-bold
- heading transform/tracking: uppercase, tracking-tight (-1.2px)
- body size: text-[16px] leading-[26px]
- text alignment/placement: centered layout
- layout: flex flexDirection: "column" alignItems: "center" justify-center text-center
- padding: py-[120px] md:py-[180px]
- content:
  - Subtitle wrapper: Flex container holding a small gold decorative box (`w-1.5 h-4 bg-primary`) and text "ON CALL 24/7" (text-[12px] uppercase font-bold tracking-widest text-primary gap-2 items-center flex).
  - Main H1: "THE MOST TRUSTED <span class='text-primary'>SECURITY PROVIDER</span> IN BERKS COUNTY"
  - Description: "M&G Security is a Pennsylvania-based security company founded in 1997 by former law enforcement officers. Our active and retired police staff bring over 60 years of combined law enforcement experience to every assignment." (max-w-[720px] mx-auto mb-10).
  - CTA Button Row: Flex row, center-aligned, gap-4.
    - Button 1: Solid primary gold with phone icon. "`(484) 824-8631`" -> icon `ri-phone-line`, background `bg-primary`, text `text-foreground`, `font-bold uppercase tracking-wider text-[12px] px-8 py-4 rounded-none`.
    - Button 2: Outline bordered with email icon. "`REQUEST A QUOTE`" -> icon `ri-mail-line`, border `border border-dark-border`, text `text-dark-foreground`, `font-bold uppercase tracking-wider text-[12px] px-8 py-4 rounded-none hover:bg-white/5`.
  - Stats Grid: Center aligned, 3-column row spanning `max-w-4xl mx-auto mt-16 pt-12 border-t border-dark-border/40 gap-8`.
    - Stat 1: "24/7" (text-primary text-[36px] font-bold) + "ALWAYS ON CALL" (text-dark-muted-foreground text-[11px] font-bold uppercase tracking-wider).
    - Stat 2: "60+" (text-primary text-[36px] font-bold) + "YEARS LAW ENFORCEMENT EXPERIENCE" (text-dark-muted-foreground text-[11px] font-bold uppercase tracking-wider).
    - Stat 3: "1997" (text-primary text-[36px] font-bold) + "SERVING BERKS COUNTY" (text-dark-muted-foreground text-[11px] font-bold uppercase tracking-wider).

## Professional Security Services id="services"
- theme: LIGHT
- background: bg-background
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[48px] leading-[48px] font-bold
- heading transform/tracking: uppercase, tracking-tight (-0.96px)
- body size: text-[16px] leading-[26px]
- text alignment/placement: Center aligned headers, left-aligned card texts.
- layout: flex flexDirection: "column" alignItems: "center"
- padding: py-24 md:py-32
- content:
  - Header panel: 
    - Subtitle marker: Gold colored line (`w-6 h-0.5 bg-primary mb-4 mx-auto`) and text "WHAT WE DO" (text-primary text-[10px] uppercase font-bold tracking-widest).
    - H2: "PROFESSIONAL SECURITY SERVICES"
    - Paragraph: "From crowd control to site security — one team with real law enforcement experience, one accountable contract." (text-center max-w-2xl mt-4 mb-16)
  - Cards Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto`.
    - Render 9 distinct cards with consistent structures:
      - Card 1: Apartment Complex Security -> Icon: Shield/Building. Body: "Professional guards keep your community safe, handling resident concerns with courtesy and professionalism. Available 24/7 or on scheduled shifts."
      - Card 2: Public Auctions -> Icon: Gavel/Hammer. Body: "Crowd control and asset protection for public auctions of all sizes. Our guards manage traffic flow and secure merchandise and equipment."
      - Card 3: Construction Sites -> Icon: HardHat/Construction. Body: "Secure your tools, equipment, and materials from theft. Our guards are present during and after hours to protect your valuable assets."
      - Card 4: Festivals & Major Events -> Icon: Ticket/Festival. Body: "Large crowd management for festivals, concerts, and major public gatherings. We handle safety at public events with experienced personnel."
      - Card 5: Sporting Events -> Icon: Trophy/Sport. Body: "Keep athletes and spectators safe at sporting events, conventions, and tournaments. Professional security at professional and amateur venues."
      - Card 6: Concerts -> Icon: Music/Microphone. Body: "Venue security and crowd control for concerts and live performances. We manage safety for both indoor and outdoor concert venues."
      - Card 7: High School Events -> Icon: GraduationCap/School. Body: "From sporting events to proms and graduations, we keep your school events safe. Our staff works seamlessly with school administrators."
      - Card 8: Restaurant & Hospitality -> Icon: Food/Utensils. Body: "Overnight and maintenance-period security for restaurants and hospitality venues. We protect your establishment during vulnerable hours."
      - Card 9: Private Investigations -> Icon: Search/Spy. Body: "Our licensed private investigators provide discreet, professional investigative services for individuals and businesses throughout Pennsylvania."
    - Card Styling Details:
      - Background: `bg-surface`, `border border-gray-100`, `p-8`, `rounded-none`, `flex flex-col h-full justify-between hover:-translate-y-1 transition-all duration-300 group shadow-sm`.
      - Top Icon Container: `w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-6 text-xl`.
      - Card Heading H3: `text-[18px] font-bold text-foreground mb-4 uppercase tracking-wide`.
      - Card Body Paragraph: `text-[14px] text-muted-foreground leading-relaxed mb-6 flex-grow`.
      - Card Link: "LEARN MORE →" (text-primary text-[12px] font-bold tracking-wider uppercase group-hover:text-primary-hover flex items-center gap-1). Link dynamically maps to slugs (e.g., `/security-services/apartment-complex`).

## Founded by Law Enforcement id="about"
- theme: DARK
- background: bg-dark-background
- text: text-dark-muted-foreground
- heading color: text-dark-foreground
- heading size: text-[36px] leading-[44px] font-bold
- heading transform/tracking: uppercase, tracking-tight (-0.72px)
- body size: text-[16px] leading-[24px]
- text alignment/placement: Left aligned (start).
- layout: grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center max-w-7xl mx-auto
- padding: py-24 md:py-32
- content:
  - Left Column: Image wrapper. Clean square container displaying image matched with `img_res/a058a2f1cba0127ec1d47bef14807be2.webp` (M&G Security professional guard standing next to patrol car). Styling: `w-full h-[450px] lg:h-[660px] object-cover rounded-none`.
  - Right Column: Text content block.
    - Subtitle marker: Gold colored line (`w-6 h-0.5 bg-primary mb-4`) + "OUR STORY" (text-primary text-[10px] uppercase font-bold tracking-widest).
    - H2: "FOUNDED BY LAW ENFORCEMENT, BUILT ON TRUST"
    - Body 1: "M&G Security was founded in 1997 by former Reading Police Sergeant <span class='text-dark-foreground font-bold'>Mark N. Pellicciotti</span> and retired Pennsylvania State Trooper <span class='text-dark-foreground font-bold'>Anthony DiGuglielmo</span>." (mt-6).
    - Body 2: "Our staff consists of active and retired law enforcement personnel with over <span class='text-primary font-bold'>60 years of combined experience</span>. We have been proudly serving Berks County and surrounding areas for over 27 years." (mt-4).
    - Body 3: "From the Santander Arena to local construction sites, high school proms to corporate offices, we bring the discipline, training, and professionalism of law enforcement to every assignment." (mt-4 text-dark-muted-foreground/80).
    - Stats Row: Flex grid (`grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-dark-border`).
      - Stat block 1: "1997" (text-primary text-[24px] font-bold) + "FOUNDED" (text-dark-muted-foreground text-[10px] uppercase tracking-wider font-bold).
      - Stat block 2: "60+" (text-primary text-[24px] font-bold) + "YEARS LEO EXP." (text-dark-muted-foreground text-[10px] uppercase tracking-wider font-bold).
      - Stat block 3: "27+" (text-primary text-[24px] font-bold) + "YEARS IN BERKS" (text-dark-muted-foreground text-[10px] uppercase tracking-wider font-bold).

## Testimonials id="testimonials"
- theme: LIGHT
- background: bg-background (light gray `oklch(0.95 0.01 260)`)
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[48px] leading-[48px] font-bold
- heading transform/tracking: uppercase, tracking-tight (-0.96px)
- body size: text-[16px] leading-[24px]
- text alignment/placement: Center aligned headers, left-aligned content inside cards.
- layout: flex flexDirection: "column" alignItems: "center"
- padding: py-24 md:py-32
- content:
  - Header panel:
    - Subtitle marker: Gold colored line (`w-6 h-0.5 bg-primary mb-4 mx-auto`) + "TESTIMONIALS" (text-primary text-[10px] uppercase font-bold tracking-widest).
    - H2: "WHAT OUR CLIENTS SAY"
    - Paragraph: "Real feedback from the businesses, schools, and organizations we protect across Berks County." (mt-4 mb-16 text-center max-w-2xl)
  - Cards Row: `grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto`.
    - Testimonial Card 1:
      - Avatar: Image `img_res/6f789f590545fc92c6e48802d5ae4d41.webp` (48x48px circular, object-cover).
      - Header info: "Mr. Tom Doyle" (text-foreground text-[14px] font-bold uppercase) + "Activities Chairman, Immaculate Conception Church" (text-muted-foreground text-[11px]).
      - Text: `"Thousands of people attend our festival in a short period of time. M&G Security handles the crowds in a very professional manner. It is great to have these guards on site."`
      - Stars: Row of 5 gold filled star icons.
    - Testimonial Card 2:
      - Avatar: Image `img_res/7b2750c824349298f38e0e0245fd876e.webp` (48x48px circular, object-cover).
      - Header info: "Charles Mountcastle III" (text-foreground text-[14px] font-bold uppercase) + "Monty's Construction" (text-muted-foreground text-[11px]).
      - Text: `"I hire M&G Security to cover all of my construction sites. I have not had any thefts or damage to any of my equipment since they have taken over on site security."`
      - Stars: Row of 5 gold filled star icons.
    - Testimonial Card 3:
      - Avatar: Image `img_res/e4d5820333107c8d13d5826f7f6fcc50.webp` (48x48px circular, object-cover).
      - Header info: "Beth Hiem" (text-foreground text-[14px] font-bold uppercase) + "Apartment Complex Manager" (text-muted-foreground text-[11px]).
      - Text: `"The guards at M&G Security handle the residents complaints in a very professional and courteous manner. They are a great asset to the complex."`
      - Stars: Row of 5 gold filled star icons.
    - Card Styling Details:
      - Background: `bg-surface`, `border border-gray-100`, `p-8`, `rounded-none`, `flex flex-col justify-between shadow-sm`.
      - Top Row: Flex container aligning avatar left and text stack to the right, gap-4.
      - Body Text: `text-[15px] italic text-muted-foreground leading-relaxed my-6`.
      - Stars Row: Flex container holding 5 `ri-star-fill text-primary text-sm` stars.

## Trusted Organizations id="marquee"
- theme: DARK
- background: bg-dark-background
- text: text-dark-muted-foreground
- layout: flex flex-col items-center w-full
- padding: py-12
- content:
  - Header: "TRUSTED BY LEADING ORGANIZATIONS ACROSS BERKS COUNTY" (text-dark-muted-foreground/60 text-[10px] font-bold uppercase tracking-[0.15em] mb-6)
  - Marquee: Infinite auto-scrolling horizontal band. Use CSS animation `@keyframes marquee` scrolling from `translateX(0)` to `translateX(-50%)` smoothly. Ensure zero pointer-events and perfect visual overlap of two repeated sets of items.
  - Marquee Items (Each with gold shield icon: `ri-shield-check-line text-primary text-xl`):
    - "Santander Arena"
    - "Reading Royals"
    - "Reading Liederkranz Oktoberfest"
    - "Berks Catholic"
    - "Daniel Boone High School"
    - "Immaculate Conception Church"
    - "Monty's Construction"
  - Item styling: `flex items-center gap-3 text-dark-foreground font-bold uppercase text-[12px] tracking-wider whitespace-nowrap mx-8`.

## We Are Hiring id="hiring"
- theme: DARK
- background: bg-dark-background
- overlay: `radial-gradient(at 75% 50%, oklch(0.75 0.16 85 / 0.1), rgba(0, 0, 0, 0) 60%)`
- text: text-dark-muted-foreground
- heading color: text-dark-foreground
- heading size: text-[36px] leading-[44px] font-bold
- heading transform/tracking: uppercase, tracking-tight (-0.72px)
- body size: text-[16px] leading-[24px]
- text alignment/placement: Left aligned (start).
- layout: flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 max-w-7xl mx-auto
- padding: py-20
- content:
  - Left content block:
    - H2: "WE ARE HIRING"
    - Paragraph: "M&G Security is always looking for qualified security guards to join our team. If you are a current or retired law enforcement officer, we want to hear from you." (mt-4 max-w-3xl)
  - Right CTA Block: Flex row container with gap-4.
    - Button 1 (Solid Gold): "APPLY NOW" with arrow icon -> icon `ri-arrow-right-line`, background `bg-primary`, text `text-foreground`, `font-bold uppercase tracking-wider text-[12px] px-8 py-4 rounded-none hover:bg-primary-hover flex items-center gap-2`.
    - Button 2 (Outline White): "CONTACT US" -> border `border border-dark-foreground/30`, text `text-dark-foreground`, `font-bold uppercase tracking-wider text-[12px] px-8 py-4 rounded-none hover:bg-white/5`.

# 5. Favicon
Favicon is present as a custom graphic. Call the Astro helper function `process_favicon_image({ imageUrl: "https://mandgsecurity.clientsite.agency/vite.svg" })`.

# 6. Footer
- Style: Solid dark blue-gray background `bg-dark-background` (`hsl(215, 51%, 11%)`) with deep high-contrast structural columns.
- Text color: `text-dark-muted-foreground` / `text-dark-foreground`
- Columns: 12-column grid configuration on desktop (Col 1: span 4, Col 2: span 2, Col 3: span 3, Col 4: span 3). Content is cleanly left-aligned with absolute precision.
- Column 1 (Span 4):
  - Logo: M&G Security brand lockup logo, `h-12 w-auto object-contain mb-6`.
  - Paragraph description: "Professional security services for Berks County, PA and surrounding areas since 1997. Owned and operated by former law enforcement officers." (text-dark-muted-foreground text-[14px] leading-relaxed mb-6).
  - Social icons block: Flex row, center-aligned, gap-2. 
    - Facebook: Link `https://www.facebook.com/profile.php?id=100063783338150` with circular or square dark bordered outline container holding a small white `ri-facebook-fill` icon (size: `w-9 h-9 border border-dark-border flex items-center justify-center text-dark-muted-foreground hover:text-primary hover:border-primary transition-colors`).
- Column 2 (Span 2):
  - Heading H4: "NAVIGATION" (text-primary text-[10px] uppercase font-bold tracking-widest mb-6).
  - Navigation links:
    - Home -> `/`
    - Security Services -> `/security-services`
    - About Us -> `/about-us`
    - Photo Gallery -> `/photo-gallery`
    - Contact Us -> `/contact-us`
    - Employment -> `/employment-opportunities`
  - Links layout: Standard clean vertical list with `gap-3`. Links style: `text-dark-muted-foreground hover:text-primary text-[14px] transition-colors`.
- Column 3 (Span 3):
  - Heading H4: "SERVICES" (text-primary text-[10px] uppercase font-bold tracking-widest mb-6).
  - Services links:
    - Sporting Events -> `/security-services/sporting-events`
    - High School Events -> `/security-services/high-school-events`
    - Construction Sites -> `/security-services/construction-sites`
    - Festivals & Major Events -> `/security-services/festivals-major-events`
    - Concerts -> `/security-services/concert-security`
    - Private Investigation -> `/security-services/private-investigation`
    - Apartment Complex -> `/security-services/apartment-complex`
    - Auctions -> `/security-services/auctions`
    - Restaurant Maintenance -> `/security-services/restaurant-maintenance`
  - Links layout: Standard clean vertical list with `gap-3`. Links style: `text-dark-muted-foreground hover:text-primary text-[14px] transition-colors`.
- Column 4 (Span 3):
  - Heading H4: "CONTACT" (text-primary text-[10px] uppercase font-bold tracking-widest mb-6).
  - Contact Details block (Vertical flex stack with gap-4, text-[14px] text-dark-muted-foreground):
    - Address details: "P.O. Box 6255, Wyomissing, PA 19610"
    - Telephone: `(484) 824-8631` (rendered as `a href="tel:+14848248631"` hover:text-primary transition-colors)
    - Email: `info@theiroldurl.com` (rendered as `a href="mailto:info@theiroldurl.com"` hover:text-primary transition-colors)
- Bottom copyright bar:
  - Flat full-width row layout separated by a thin top border `border-t border-dark-border mt-16 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center text-[12px] text-dark-muted-foreground/60`.
  - Left copyright block: "© 2026 M&G Security · All rights reserved"
  - Right footer legal links: Flex row with gap-6.
    - Style Guide -> `/style-guide`
    - About This Site -> `/about-this-site`
    - Sitemap -> `/sitemap`
    - Links styling: `hover:text-primary transition-colors`.

# 7. Files
MODIFY: Navigation.astro, Footer.astro, site.ts, global.css
CREATE:
- src/components/home/Hero.astro
- src/components/home/Services.astro
- src/components/home/About.astro
- src/components/home/Testimonials.astro
- src/components/home/Marquee.astro
- src/components/home/Hiring.astro