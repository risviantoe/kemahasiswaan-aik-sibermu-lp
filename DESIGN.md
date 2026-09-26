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

The palette now follows the user-supplied SiberMu emblem image, approved on 23 September: sampled primary navy #103063, deep navy #0b2146, and near-black navy #040c19. These are samples of the supplied gradient image, not claimed official brand-manual values. The header uses the official horizontal logo from the university website; the geometric favicon remains provisional.

Navy carries the hero headline, primary action, section titles, and benefit headings. Hero emphasis uses weight 700 instead of a brighter blue. Blue #2169ad is reserved mainly for links and interaction cues. White and quiet pale-blue reading surfaces remain. AIK uses deep navy, with matching RGB gradient stops around its photograph. The closing overlay uses the same deep navy. After screenshot review, the user restored the footer to its previous #0a1c32 because #040c19 was too dark. Buttons on dark surfaces are white with navy text and a pale-blue hover. Focus and selection retain visible contrast.

## Typography and layout

26 September readability and footer identity refinement: preserve the user's uppercase desktop header title, 10px emblem gap, and 13.6px university name. At tablet widths use a 12px university name and 10px gap; on phones use a 14–16px title, 11px university name, and 8px gap with natural wrapping. Footer repeats the emblem and department identity, using the same source bitmap and CSS brightness/invert for a white monochrome emblem. The footer title is 16px, the university name 12px, and the supporting line reads “Ruang Tumbuh SiberMu”. Footer columns give identity more room, and the back-to-top control flows after the contact block on phones so it does not crowd the logo. Footer links/contact copy are 15px, secondary metadata generally 13–14px, image credits at least 12px, and the copyright/concept line 13px. Archive source links and notices use 14px; mobile activity dates and categories occupy separate lines. Main body copy and section headings retain their established hierarchy. User-owned visual checks remain required; source/build validation is not a rendered UI review.

Header identity update, approved 26 September: show the official green emblem beside an HTML text lockup. “Kemahasiswaan & AIK” is the primary label in Manrope, with “Universitas Siber Muhammadiyah” below in smaller Public Sans. The emblem is displayed through a 208 × 182 source-area viewport of the existing 768 × 182 horizontal logo; the source bitmap is unmodified. This is a page identity arrangement, not a new official university logo. Scale the emblem and type for tablet and phone, allowing text wrapping and protecting the 44px menu button on narrow screens. Browser verification remains with the user.

The approved hero and header retain Manrope. Section headlines use locally bundled Source Serif 4, weight 500, with Public Sans for text and controls. Headings use balanced wrapping and no tracking below -0.04em.

Desktop content stays within 1232px with 56px minimum side gutters; gutters reduce to 32px and then 20px. Section spacing varies with purpose, from the compact archive and service bands to the open community section.

Section compositions:
- Introduction: a student-facing statement and four serif benefit headings in a two-by-two layout.
- Journey: a separate pale band with four linked steps, larger sequence numbers and horizontal connectors.
- AIK: navy banner using a landscape image that keeps the face and book visible, followed by three open explanations of pembinaan, pengamalan and Kemuhammadiyahan. Specific program descriptions live in Activities, once.
- Community: shared invitation and photograph on the left; four equal native disclosure rows on the right. English Club has no arbitrary featured treatment.
- Achievement: a manual five-story showcase replaces the single MIDBRAIN story. On desktop a full original poster/certificate and story sit beside five open selection rows; navy selection and an arrow identify the active item. Controls show previous/next and position. Phones stack the poster and copy, with arrows and position below the story; no select or additional sticky bar. Arrow navigation at widths up to 640px returns to the new panel's start only when it is outside the visible reading area, allowing 16px below the measured sticky header. Focus follows the panel with preventScroll; reduced-motion users get instant scrolling. Desktop selection and swipe do not reposition the page. No autoplay or panel transition animation. Stories stay in server-rendered HTML; without JavaScript all are readable. The enhanced layout reserves the tallest story's height and makes inactive panels inert. Published posters/certificates are shown with contain, never cropped or replaced by fictional winners. Editorial order is not an official ranking.
- Activities: introductory copy beside a filterable archive; dates, expandable titles, and the live result count remain intact.
- Services: three verified external destinations in a horizontal open group on desktop, stacked on mobile. Two FAQs address joining and archive status.
- Closing: a dedicated navy-tinted fictional campus image without people and one community CTA. Footer navigation groups internal sections and verified official destinations.

Supporting reading copy generally uses 0.94–1rem, with titles around 1.05–1.1rem. Archive metadata and image credits remain subordinate. Avoid shrinking whole sections to metadata scale.

23 September screenshot refinement: the AIK photograph anchors directly to the right edge, retaining its 840px cap to protect the subject crop, and blends into navy at the bottom. The achievement's main heading names the award; the two students' names use a smaller, clear sans-serif heading instead of a competing editorial slogan. The introductory section has tighter vertical spacing, while the journey uses shorter copy, larger step labels and numbers, and closer internal grouping. No browser review was performed; the user owns screenshot and manual visual verification.

## Responsive behavior

26 September tablet hero refinement: at 641–900px, remove the phrase-level forced line breaks so each headline message can occupy one line at normal text size, allowing natural wrapping when needed. Use a fluid 32–46px headline, the available copy width, and tighter paragraph/action spacing. The photograph is 320–396px tall with a 112%-wide, right-anchored crop, positioned 20% vertically to retain headroom. A short top fade joins it to the copy. Image sizes reflects that crop. Desktop and phone hero rules remain intact. The user confirmed normal scrolling at the third screenshot size is safe; the absent community content in that long capture is not a reproduced layout bug.

Community columns align at the top even when every disclosure is open. The invitation column sticks 7.5rem below the viewport top only at widths above 900px and heights of at least 46rem, leaving clearance below the header and room for the full image/copy. On mobile and short viewports it scrolls normally. Native disclosures remain independently openable; do not introduce exclusive-open behavior. Shared archive notices carry the general current-status caveat, while individual details retain historical facts, specific missing information, and source links.

The journey and services descriptions sit directly below their section headings at every viewport width, following the user's 23 September feedback. Keep these heading/description groups left-aligned with a 12–14px gap; do not return the descriptions to a separate right-hand column.

Journey reduces to two columns below 901px. The activity archive moves below its introduction at that width. Community, achievement, services, and archive headings stack below 701px. AIK moves its image below the copy at that breakpoint, preserving its 3:2 aspect ratio with a vertical navy blend; its three principles become rows. Activity metadata moves above its title below 641px. Hero breakpoints are preserved.

## Evidence and assets

26 September credit maintenance: footer credits cover the emblem in both placements (including its white footer rendering), dated student activities, original achievement documentation, and generated illustrations separately. All three font licenses are publicly linked, including Source Serif 4. The people, book and heart paths now use the documented Feather users/book-open/heart geometry with the site's 1.6px stroke; Feather's MIT notice is served locally and linked in the credits. This establishes a concrete source for these icons rather than asserting an unverified origin for the earlier inline paths. Other inline symbols, social platform marks and the provisional favicon are described separately without a blanket originality claim.

Latest user choice, 25 September: the user restored the original photographic asset selections directly in code. Preserve those selections; the alternative editorial, remote-learning and study sets below are historical iterations, not instructions to reactivate them. The only requested subsequent asset change is the duplicated collar on the foreground man in `hero-campus-v3`. Corrected asset `hero-campus-v4` retains the original composition with a single shirt collar; both 1774px and 1000px variants are used by the hero. Original v3 files remain available. Full edit prompt/provenance: `docs/hero-collar-correction-2026-09-25.json` and the public asset manifest. Browser inspection remains with the user.

AIK object correction, 25 September: `aik-study-v2` replaces v1 after the user identified an incomplete wooden support and generic printed pages. The revised asset shows a closed ornate mushaf, two crossed rehal boards with both upper supports and lower feet visible, and a matching hand pose. No open scripture pages are generated. The hijab, face-free framing and navy library composition remain. Alt text describes preparing the closed mushaf rather than turning pages. Prompt/provenance: `docs/aik-correction-2026-09-25.json` and the asset manifest. The standalone output was inspected; rendered browser verification remains with the user.

Latest hero narrative refinement on 25 September: the user approved a home-learning scene to support "Belajar dari mana saja" together with online discussion supporting "Tumbuh bersama siapa saja". Hero now uses `hero-remote-v1` (1774/1000px WebP); the previous `hero-study-v1` collaborative scene is reused in Community with a right-aligned 1.6 aspect-ratio display crop. AIK remains `aik-study-v1`. The home learner and all female video-call participants wear hijab. Hero caption describes fictional people and setting, not a campus building. Side-profile and screen faces remain visible; no anonymity or rights-clearance claim. Prompt and provenance: `docs/remote-hero-2026-09-25.json` and `public/images/hero-remote-v1.webp.json`. Existing layout and copy remain unchanged; browser review belongs to the user.

Latest 25 September revision supersedes the gouache set below: the user found illustration and rear-view hero figures unsuitable and approved activity-led photorealistic imagery. Active assets are `hero-study-v1`, `aik-study-v1`, and `community-study-v1` with responsive WebP variants. Hero shows collaborative study from an elevated front-side angle; partial downward-looking faces remain visible, so do not describe it as anonymous or face-free. AIK and community frame hands and learning materials with faces outside the image. Every generated female figure must wear hijab, including background figures. Existing illustrative labels remain essential. Prompts and source provenance are in `docs/study-assets-2026-09-25.json` and public sidecar manifests. Neither this visual treatment nor labelling certifies rights clearance or organizer acceptance.

25 September 2026 asset revision: while organizer clarification about AI eligibility is pending, the user requested alternatives to recognizable generated faces and delegated the art direction. Hero, AIK and community now use navy/ivory gouache editorial illustrations: learners viewed from behind, a reader viewed from behind, and hands collaborating around a table. This supersedes photographic portrait guidance above for these three placements. Keep existing layout and responsive behavior. The closing fictional building remains unchanged. Visible AI disclosures remain; these illustrations reduce likeness and misleading-documentation concerns but do not constitute legal clearance. Full prompts and provenance are in `docs/editorial-assets-2026-09-25.json` and adjacent public asset manifests. Manual browser review remains with the user.

Historical years and source links remain visible or accessible in native details. Do not imply current recruitment, schedules, or organization officers without confirmation.

Hero, AIK, community, and closing artwork are AI illustrations of fictional people/buildings; each image placement carries a visible label. The MIDBRAIN image is original documentation from the official SiberMu article, published 5 January 2024. Its provenance is stored next to the local asset.

All three fonts use the SIL Open Font License and are served locally through Fontsource.

The generated asset set and full prompts are recorded in docs/editorial-assets-2026-09-22.md. Each new asset has 1440px and 720px WebP variants and a provenance JSON file. Original generated files are retained outside the public build.

## Interaction and verification

26 September responsive refinement: journey steps use action labels and the whole step is a link; the connector at the end of the first two-column row is omitted. The AIK banner CTA selects the AIK activity filter before native anchor navigation. General links to Activities restore all entries. Activities now include the 11 May 2026 Siber Sehat Talks #7 webinar (article published 17 July) and 21 February 2026 KKN PJJ launch, followed by the three AIK report entries from 2024. Source links and report/event dates remain explicit; none is presented as open registration. Community and the joining FAQ offer a WhatsApp link to ask the existing campus contact for direction, without claiming it is a UKM officer's number. FAQ answers include actionable official links. The user supplied four device screenshots; the missing community invitation and cut quick links in the intermediate captures are not yet reproduced during normal scrolling. Preserve community sticky behavior pending that manual check; do not claim a screenshot-stitching artifact is a confirmed layout defect.

Footer contact expansion: four desktop columns hold identity/social accounts, page navigation, official destinations and campus contacts. At 1100px and below the grid becomes two columns; on narrow phones identity and contact each span the full width. Instagram, TikTok, YouTube and Facebook use icon-only links in a single horizontal row, with accessible platform names and 44px targets. Email is explicitly Humas universitas; WhatsApp uses +62 851-7994-6901 from the competition brief, as confirmed by the user, without an unverified department label. The postal address links to a map search. Links and contact data live in `src/data/content.ts`, with official source links in footer credits. No embedded social widgets or added JavaScript. Sources and review limitations are recorded in `docs/footer-contacts-2026-09-25.md`.

Navbar section tracking: use `aria-current="location"` for the active anchor, with a 2px navy underline and slightly stronger text. Services keeps its button shape with a pale-blue active background. The state follows the reading line below the sticky header, stays empty before AIK (hero/introduction/journey have no matching menu item), and keeps Services active at page end. Native hash navigation remains intact. Clicks set the destination immediately and retain it during smooth scrolling; scrolling, resize, disclosure-driven layout changes and restored page position resynchronize the indicator. The same anchors and states serve desktop and mobile. No animated indicator or new library.

Preserve skip link, mobile navigation/Escape behavior, native disclosures, visible focus, reduced motion, and activity filtering. External destinations use noopener noreferrer.

For the 22 September implementation the user explicitly owns post-implementation visual checks. Do not run browser screenshots or delegate UI review unless asked. Source checks are separate from visual approval; do not claim the rendered design was validated when it was not.
