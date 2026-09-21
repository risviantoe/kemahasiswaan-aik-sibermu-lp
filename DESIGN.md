---
name: Ruang Tumbuh SiberMu
description: Navy and blue editorial identity inspired by the recurring visual language of SiberMu's Instagram feed.
colors:
  navy: "#122b49"
  deep: "#0a1c32"
  sky: "#9bd7f5"
  blue: "#2169ad"
  sky-surface: "#dceefd"
  gold: "#dbba77"
  aik-accent: "#a8dec3"
  ink: "#152c46"
  muted: "#53677c"
  paper: "#ffffff"
  line: "#dce5ef"
  notice-surface: "#edf4fa"
  quiet-surface: "#f2f6fb"
  poster-surface: "#e4effa"
  hero-surface: "#edf5fb"
  hero-arch: "#d2e7f7"
  aik-surface: "#f0f7f8"
  aik-ink: "#276348"
  inverse-copy: "#c8d8e9"
  inverse-line: "#3d5772"
  draft: "#785c24"
  archive-surface: "#f1ecd9"
  archive-ink: "#786028"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.75rem, 3.8vw, 3.45rem)"
    fontWeight: 650
    lineHeight: 1.08
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
  metadata:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "0.75rem"
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
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  button-hero:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  button-aik:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  filter-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.filter}"
    padding: "10px 20px"
  archive-tag:
    backgroundColor: "{colors.archive-surface}"
    textColor: "{colors.archive-ink}"
    typography: "{typography.metadata}"
    rounded: "{rounded.tag}"
    padding: "2px 9px"
  community-poster:
    backgroundColor: "{colors.poster-surface}"
    rounded: "{rounded.surface}"
    padding: "36px"
  service-banner:
    backgroundColor: "{colors.sky-surface}"
    rounded: "{rounded.surface}"
    padding: "45px 48px"
---

# Design System: Ruang Tumbuh SiberMu

## Overview

**Creative North Star: "SiberMu Digital Editorial"**

A student-facing editorial identity with strong navy fields, white reading surfaces, blue wayfinding, and a human focal photograph. The palette follows recurring treatments across SiberMu's Instagram profile, highlights, and multiple posts, rather than the competition poster alone. This direction was approved by the user on 19 September 2026.

The color values are design adaptations, not verified official brand specifications. The existing geometric mark remains provisional. Hero students and the AIK reading scene are labelled AI illustrations of fictional people.

**Key Characteristics:**

- Navy institutional anchors and blue student-facing actions.
- White reading surfaces, restrained gold achievement accents, and green AIK details.
- Manrope display typography with Public Sans for reading and controls.
- Flat fields, editorial asymmetry, native disclosures, and visible archive status.

## Colors

### Primary

Navy anchors hero typography, the achievement panel, and selected controls. Deep anchors the footer. The hero uses an ice-blue surface, blue emphasized text and a blue primary action. Blue also provides text-link color and focus outlines on light surfaces. Image credits use readable dark text below the images.

### Secondary

Gold marks the achievement heading and award on navy. AIK uses a pale blue-green surface with local dark-green emphasis and links. Its main action remains navy with white text.

### Neutral

Paper supports the header and reading sections. Ink and Muted provide light-surface reading hierarchy. Line separates rows. Quiet Surface supports quick routes and services; Poster Surface supports the community invitation. Sky Surface fills the services panel. Inverse Copy and Inverse Line support dark sections. Draft and archive tokens communicate historical status.

**The Institutional Color Rule.** Navy and blue carry the university identity; green is reserved for AIK context and must not become the page-wide theme again.

**The Evidence Rule.** Treat the palette as a feed-inspired adaptation until a university brand guide provides official values.

## Typography

Manrope Variable carries headings; Public Sans Variable carries body copy, navigation, metadata, and actions. Both fonts are locally bundled. Headings use compact tracking and paragraphs use open line spacing.

The hero puts “Kemahasiswaan & AIK · SiberMu” above a two-part heading: “Belajar dari mana saja. Tumbuh bersama siapa saja.” Each message has a deliberate phrase break, producing four lines at tested sizes. The hero display scales across 1100px and 900px, then uses `clamp(2.125rem, 9.2vw, 2.5rem)` at 640px. Metadata is contextual: archive tags, AIK footnotes, and mobile activity metadata use the recorded metadata role. Some secondary legacy captions remain smaller and are not promoted into a new global minimum.

**The Heading First Rule.** Put each program title before its category, archive label, and source information.

## Layout

The container is capped at 1232px, with 56px gutters on desktop, 32px below 1100px, and 20px below 640px. Standard sections use generous vertical spacing. Community and achievement content keep asymmetric column relationships.

The desktop hero uses a full-width 2:1 photographic campaign illustration: three fictional students, imaginary campus architecture, sky and a sweeping pale foreground. Live HTML copy occupies the left 46%, over a light contrast scrim. The minimum desktop height is 640px (600px at 901–1100px). The image uses cover with center 25% positioning to retain heads on wide screens. The caption explicitly identifies fictional people and buildings. The baseline and quick routes remain below. Updated 21 September 2026 following the user's reference.

At 900px navigation becomes a mobile menu; hero copy precedes a separate full-width image area, 440px tall on tablet and clamp(280px,78vw,420px) below 640px. The crop aligns right to preserve the student group. Image credit remains below on mobile. Achievement stacks below 640px and AIK below 900px. Other section layouts are unchanged.

## Elevation & Depth

There are no box shadows or glass UI layers. The hero artwork provides photographic depth through sky, architecture and foreground figures. A light CSS scrim supports readable live text; the former geometric arch has been removed.

**The Flat Surface Rule.** Use surface color and composition to express hierarchy.

## Shapes

Controls use small rounded corners, content panels use 14–16px radii, filters are pills, and the back-to-top control is circular. The AIK reading image has one pronounced upper-left corner, 72px at desktop and 56px on mobile; other corners are 6px. The hero uses an integrated photographic composition with an illustrated pale wave at its base. Achievement emphasis uses oversized gold award text and an existing trophy icon.

## Components

### Actions and navigation

The hero primary action uses Blue and Paper. General primary actions and the AIK action use Navy and Paper. Buttons are at least 50px tall, lift 2px on hover, and use a visible 3px focus outline. Text links are at least 44px tall and underline on hover. Dark surfaces use a light focus outline.

The white sticky header uses navy typography and the existing provisional mark. Its mobile toggle has an accessible expanded state, closes on selection or Escape, and returns focus on Escape.

### Filters, disclosures, and status

Filters use pressed states and a polite live count. Native details/summary disclose community and activity descriptions, FAQ answers, and credits. Archive tags are amber, descriptive, and noninteractive. Historical content remains labelled with its year.

### Panels and imagery

The community panel is pale blue. The services panel uses a separate sky-tinted surface. Activity entries remain divided rows, with blue student-life icon blocks and green AIK icon blocks. The footer is Deep with light-blue support text.

The hero uses `hero-campus-v3.webp` (1774×887, 114,902 bytes) with a 1000px responsive variant (55,952 bytes). People and architecture are fictional AI imagery. AIK uses `aik-study-v1.webp`, also with a 640px variant. Adjacent JSON manifests preserve complete generation prompts and fictional-image provenance. The hero image enters from 10px below while opacity changes from .92 to 1 over 600ms, only when reduced motion is not requested. Text is visible from first render. Other interaction transitions last 200ms. Reduced-motion mode disables transitions, animations, and smooth scrolling.

## Do's and Don'ts

### Do:

- Do use navy and blue as the dominant institutional colors.
- Do keep gold restrained and green specific to AIK.
- Do preserve readable status labels and the provenance of imagery.
- Do preserve keyboard focus, native disclosures, and reduced-motion behavior.

### Don't:

- Don't claim these adapted hex values are an official brand guide.
- Don't present the provisional mark or AI image as official university assets.
- Don't let decorative motion hide content before it loads.
- Don't copy the competitor's VR figure or poster composition.
