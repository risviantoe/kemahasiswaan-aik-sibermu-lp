---
name: Ruang Tumbuh SiberMu
description: A contemporary student commons with forest green fields, daylight surfaces, and clear routes to participation.
colors:
  forest: "#123f35"
  deep: "#0a3028"
  lime: "#dfeeae"
  ink: "#182e27"
  muted: "#5c6c63"
  paper: "#fafbf8"
  line: "#dce3da"
  leaf: "#65804d"
  notice-surface: "#edf2e7"
  quiet-surface: "#f0f3ec"
  poster-surface: "#e3ebd6"
  inverse-copy: "#c4d5c8"
  inverse-line: "#537367"
  white: "#ffffff"
  focus: "#778b2a"
  draft: "#785c24"
  sample-surface: "#f1ecd9"
  sample-ink: "#786028"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(3.1rem, 5.4vw, 4.75rem)"
    fontWeight: 650
    lineHeight: 1.095
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
    fontWeight: 650
    lineHeight: 1.16
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1.4rem"
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
  brand:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1.95rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.04em"
rounded:
  tag: "4px"
  control: "6px"
  surface: "14px"
  filter: "30px"
  circle: "50%"
spacing:
  inline-small: "12px"
  copy-gap: "20px"
  section-gap: "40px"
  split-gap: "68px"
  section-block: "88px"
  mobile-section-block: "58px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.deep}"
  button-light:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.deep}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  button-light-hover:
    backgroundColor: "#eaf6c4"
  text-link:
    typography: "{typography.action}"
  navigation-service:
    rounded: "{rounded.control}"
    padding: "12px 18px"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.filter}"
    padding: "10px 20px"
  filter-selected:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
  sample-tag:
    backgroundColor: "{colors.sample-surface}"
    textColor: "{colors.sample-ink}"
    rounded: "{rounded.tag}"
    padding: "2px 9px"
  community-poster:
    backgroundColor: "{colors.poster-surface}"
    rounded: "{rounded.surface}"
    padding: "36px"
---

# Design System: Ruang Tumbuh SiberMu

## Overview

**Creative North Star: "Contemporary Student Commons"**

A calm, welcoming student commons expressed through deep forest fields, almost-white daylight surfaces, and pale chartreuse wayfinding. Generous spacing and asymmetrical compositions leave room for human imagery and direct, useful language.

This records the implemented local prototype, derived from `src/styles/global.css` and the Astro page and components. It is a provisional competition identity, not an official university identity. The geometric mark and generated photograph must retain their prototype and illustrative status until approved assets arrive.

**Key Characteristics:**

- Forest green anchors, chartreuse wayfinding, and light reading surfaces.
- Manrope headings paired with Public Sans reading and action text.
- Flat color fields, fine separators, and selective curved silhouettes.
- Visible status information, native disclosures, and restrained motion.

## Colors

The palette feels leafy and daylight-lit; contrast comes from alternating light reading surfaces and deep green sections.

### Primary

- **Forest** anchors primary actions, the AIK field, and the photograph frame.
- **Deep** supplies the footer and the primary action's hover state.
- **Lime** highlights reverse-surface actions, selected phrases, and the help panel.
- **Leaf** colors the hero emphasis and the scrollbar thumb.

### Neutral

- **Paper** is the page and sticky header background.
- **Ink** is the primary text; **Muted** supports descriptions and utility information.
- **Line** divides rows and light surfaces without shadows.
- **Notice Surface** supports the prototype notice and scrollbar track.
- **Quiet Surface** supports the achievement and help sections.
- **Poster Surface** supplies the community invitation panel.
- **White**, **Inverse Copy**, and **Inverse Line** provide hierarchy on green fields.
- **Focus** marks keyboard focus on light surfaces. Reverse surfaces use Lime.
- **Draft**, **Sample Surface**, and **Sample Ink** distinguish pending and illustrative content.

**The Field Contrast Rule.** Use light text on forest fields and dark text on lime fields; keep muted reading text on its matching light or dark surface.

## Typography

Manrope Variable carries headings and the provisional wordmark; Public Sans Variable carries paragraphs, navigation, metadata, and actions. Both are loaded locally through Fontsource in the implementation, with sans-serif fallbacks.

The frontmatter records the observed base roles. Headings have compact tracking while reading copy uses open line spacing. Display and headline share a medium-heavy weight; the brand combines a heavier “Siber” with a lighter “Mu.”

Hero display changes to 3.7rem at 1100px and 3.05rem at 900px; at 640px it uses `clamp(2.6rem, 11.2vw, 3.9rem)`. Other title treatments vary with their content: the community item title is 1.17rem, activity titles 1.35rem, and achievement titles 1.55rem on desktop. These are contextual variants rather than a new global type scale.

**The Heading First Rule.** Give each story or activity its title before functional archive, category, and example metadata. Keep metadata subordinate and descriptive.

## Layout

The desktop container is capped at 1232px with 56px side gutters. Gutters become 32px at 1100px and 20px at 640px. General sections use generous vertical rhythm; component-specific colored sections have their own padding.

Desktop compositions pair unequal columns and use the shared split gap for community and achievement content. The hero uses a 1.1:1 split and a 74px gap; the AIK section uses a 1.05:0.95 split. Lists and disclosures provide information density without surrounding every row with a box.

At 900px the main navigation becomes a controlled mobile menu, quick routes stack, and the achievement layout becomes one column. At 640px the hero, community, AIK, help, and FAQ layouts also stack. Filters wrap and the result count moves onto its own line. At 1600px the hero gains more vertical space and a taller photograph.

## Elevation & Depth

The implementation has no box shadows. Solid color fields, thin borders, image cropping, and section contrast establish depth. The sticky header stays opaque; there is no blur or translucent glass layer.

**The Flat Surface Rule.** Use color and separators to define surfaces; retain the existing shadow-free treatment.

## Shapes

Controls use small rounded corners; larger panels use the surface radius. Filter buttons are pill-shaped, and the back-to-top control is circular. The community poster repeats three intersecting outlined circles.

The hero frame has one pronounced upper-left curve: 150px outside and 134px on the photograph, shrinking to 100px and 88px on mobile. The other corners stay modest. The achievement stamp uses an arch-like top with small lower corners. These distinct silhouettes are signature accents, not the default shape for every panel.

## Components

### Buttons and text links

Primary actions use Forest and White; actions on the forest AIK field use Lime and Deep. Both share the action typography, control radius, and padding from the frontmatter, with a minimum height of 50px. Hover changes the fill and shifts the button upward by 2px over 200ms.

Text links inherit their context color, use a directional inline SVG, have a 44px minimum height, and underline on hover. Keyboard focus uses a 3px outline with a 5px offset; on the AIK section and footer its color is Lime.

### Navigation

The desktop header is sticky and 96px tall before responsive reductions. Plain anchor links are supplemented by one outlined service link. The wordmark uses the brand token's tracking. At 900px the menu becomes a full-width paper panel below the header, controlled by a 44px square toggle. The implementation updates its accessible name and expanded state, closes on selection or Escape, and returns focus to the toggle on Escape.

### Filters and status

Activity filters are real buttons with pressed states. Selected filters use Forest and White, while unselected filters are transparent with a fine outline. They have a 44px minimum height. A polite live count accompanies the filtered results. The small sample tag communicates example content and does not act as a control.

### Panels and disclosures

The community invitation is a flat, softly rounded green panel. The help banner uses Lime and splits copy from service links before stacking on mobile. Activity entries are separated rows with small illustrated icon blocks, not elevated cards.

Community items and FAQs use native details/summary controls, fine bottom borders, and plus icons that rotate when open. Content remains usable without a hover interaction. There are no inputs or form field patterns in this prototype.

### Imagery and motion

The hero image is a labelled AI illustration of fictional students collaborating in daylight. Preserve its explicit caption and provenance. Its one entrance motion reveals a shallow bottom crop with clip-path over 650ms using `cubic-bezier(.16,1,.3,1)`; it runs only when reduced motion is not requested. Buttons, quick-route surfaces, and disclosure icons use brief 200ms transitions. Reduced-motion preference disables animations and transitions and changes smooth scrolling to automatic.

## Do's and Don'ts

### Do:

- Do use Manrope for headings and Public Sans for reading and controls.
- Do keep functional metadata below the heading it describes.
- Do preserve visible keyboard focus and reduced-motion behavior.
- Do retain illustrative and pending-content labels until source material is confirmed.
- Do use flat color fields and fine separators for hierarchy.

### Don't:

- Don't present the provisional mark or generated imagery as official university assets.
- Don't replace clear status text with decorative labels.
- Don't make hover the only way to reach content or understand a control.
- Don't add shadow elevation to the established flat surface vocabulary.

