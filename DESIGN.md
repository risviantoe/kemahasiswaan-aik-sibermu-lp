---
name: Ruang Tumbuh SiberMu
description: Navy institutional landing page with serif section headlines, integrated photography, and open student directories.
colors:
  navy: "#103063"
  deep: "#0b2146"
  night: "#0a1c32"
  sky: "#e5edfa"
  blue: "#2169ad"
  ink: "#172b49"
  muted: "#53677c"
  paper: "#ffffff"
  line: "#dce5ef"
  quiet-surface: "#f4f6fa"
  hero-surface: "#eef3fa"
  inverse-copy: "#ccd8eb"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.75rem, 3.8vw, 3.45rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Source Serif 4 Variable, serif"
    fontSize: "clamp(2.15rem, 3.4vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
  metadata:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "0.75rem"
rounded:
  control: "6px"
  photograph: "4px"
spacing:
  section-block: "76px"
  mobile-section-block: "48px"
  split-gap: "72px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  community-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "24px 0"
  activity-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "24px 0"
  service-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "20px 0"
---

# Design System: Ruang Tumbuh SiberMu

## Direction and authority

The user's self-created references dated 20 September 2026, 05:51:53 PM and 22 September 2026, 06:30:00 AM are the visual authority for the sections after the approved hero. The latest approved refinement addresses the supplied live screenshot: coherent navy campus photography, larger supporting type, separate introduction and journey, substantive AIK, a story-led achievement section, and different compositions for the archive and services.

The previous treatment of large repeated cards, icon discs, and decorative numbered fact lists is superseded. Icons indicate actions, navigation, or disclosures. Sequence numbers belong only to the four-step journey.

The palette now follows the user-supplied SiberMu emblem image, approved on 23 September: sampled primary navy #103063, deep navy #0b2146, and near-black navy #040c19. These are samples of the supplied gradient image, not claimed official brand-manual values. The existing geometric mark remains provisional.

Navy carries the hero headline, primary action, section titles, and benefit headings. Hero emphasis uses weight 700 instead of a brighter blue. Blue #2169ad is reserved mainly for links and interaction cues. White and quiet pale-blue reading surfaces remain. AIK uses deep navy, with matching RGB gradient stops around its photograph. The closing overlay uses the same deep navy. After screenshot review, the user restored the footer to its previous #0a1c32 because #040c19 was too dark. Buttons on dark surfaces are white with navy text and a pale-blue hover. Focus and selection retain visible contrast.

## Typography and layout

The approved hero and header retain Manrope. Section headlines use locally bundled Source Serif 4, weight 500, with Public Sans for text and controls. Headings use balanced wrapping and no tracking below -0.04em.

Desktop content stays within 1232px with 56px minimum side gutters; gutters reduce to 32px and then 20px. Section spacing varies with purpose, from the compact archive and service bands to the open community section.

Section compositions:
- Introduction: a student-facing statement and four serif benefit headings in a two-by-two layout.
- Journey: a separate pale band with four linked steps, larger sequence numbers and horizontal connectors.
- AIK: navy banner using a landscape image that keeps the face and book visible, followed by three open explanations of pembinaan, pengamalan and Kemuhammadiyahan. Specific program descriptions live in Activities, once.
- Community: shared invitation and photograph on the left; four equal native disclosure rows on the right. English Club has no arbitrary featured treatment.
- Achievement: the introduction sits beside one verified MIDBRAIN story. The original announcement is a smaller evidence figure below the story with a readable caption. Do not crop the announcement or generate fictional winners.
- Activities: introductory copy beside a filterable archive; dates, expandable titles, and the live result count remain intact.
- Services: three verified external destinations in a horizontal open group on desktop, stacked on mobile. Two FAQs address joining and archive status.
- Closing: a dedicated navy-tinted fictional campus image without people and one community CTA. Footer navigation groups internal sections and verified official destinations.

Supporting reading copy generally uses 0.94–1rem, with titles around 1.05–1.1rem. Archive metadata and image credits remain subordinate. Avoid shrinking whole sections to metadata scale.

23 September screenshot refinement: the AIK photograph anchors directly to the right edge, retaining its 840px cap to protect the subject crop, and blends into navy at the bottom. The achievement's main heading names the award; the two students' names use a smaller, clear sans-serif heading instead of a competing editorial slogan. The introductory section has tighter vertical spacing, while the journey uses shorter copy, larger step labels and numbers, and closer internal grouping. No browser review was performed; the user owns screenshot and manual visual verification.

## Responsive behavior

Community columns align at the top even when every disclosure is open. The invitation column sticks 7.5rem below the viewport top only at widths above 900px and heights of at least 46rem, leaving clearance below the header and room for the full image/copy. On mobile and short viewports it scrolls normally. Native disclosures remain independently openable; do not introduce exclusive-open behavior. Shared archive notices carry the general current-status caveat, while individual details retain historical facts, specific missing information, and source links.

The journey and services descriptions sit directly below their section headings at every viewport width, following the user's 23 September feedback. Keep these heading/description groups left-aligned with a 12–14px gap; do not return the descriptions to a separate right-hand column.

Journey reduces to two columns below 901px. The activity archive moves below its introduction at that width. Community, achievement, services, and archive headings stack below 701px. AIK moves its image below the copy at that breakpoint, preserving its 3:2 aspect ratio with a vertical navy blend; its three principles become rows. Activity metadata moves above its title below 641px. Hero breakpoints are preserved.

## Evidence and assets

Historical years and source links remain visible or accessible in native details. Do not imply current recruitment, schedules, or organization officers without confirmation.

Hero, AIK, community, and closing artwork are AI illustrations of fictional people/buildings; each image placement carries a visible label. The MIDBRAIN image is original documentation from the official SiberMu article, published 5 January 2024. Its provenance is stored next to the local asset.

All three fonts use the SIL Open Font License and are served locally through Fontsource.

The generated asset set and full prompts are recorded in docs/editorial-assets-2026-09-22.md. Each new asset has 1440px and 720px WebP variants and a provenance JSON file. Original generated files are retained outside the public build.

## Interaction and verification

Preserve skip link, mobile navigation/Escape behavior, native disclosures, visible focus, reduced motion, and activity filtering. External destinations use noopener noreferrer.

For the 22 September implementation the user explicitly owns post-implementation visual checks. Do not run browser screenshots or delegate UI review unless asked. Source checks are separate from visual approval; do not claim the rendered design was validated when it was not.
