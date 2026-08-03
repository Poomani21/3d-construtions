# Spatial Build Studio

PREMIUM 3D CONSTRUCTION WEBSITE — CREATIVE DIRECTION PROMPT

Act as a 20+ year veteran creative director, 3D motion designer, architectural visual designer, UI/UX designer, and senior frontend engineer.

Create an ultra-premium construction and architecture company website with a strong 3D cinematic experience.

The website must NOT look like a normal static business website.

It should feel like:

A premium architectural visualization + construction company + interactive 3D experience.

The first impression should be:

"This looks like a high-end construction company website created by a professional digital agency."

TECHNOLOGY — STRICT

Use ONLY:

HTML5

CSS3

Vanilla JavaScript

Do NOT use:

React

Vue

Angular

Next.js

Bootstrap

Tailwind

jQuery

Three.js

GSAP

WebGL libraries

Any frontend framework

The final website must work as a pure static HTML/CSS/JavaScript website.

Use CSS transform, perspective, transform-style: preserve-3d, translate3d, rotateX, rotateY, rotateZ, scale3d, CSS animations, transitions and Vanilla JavaScript to create the 3D experience.

MAIN VISUAL CONCEPT

The entire website should be designed around:

ARCHITECTURE + 3D + ENGINEERING + CONSTRUCTION

Use:

3D perspective

Architectural depth

Building structures

Blueprint grids

Construction elements

Floating architectural panels

Layered images

Perspective transitions

Depth-based scrolling

Cinematic image movement

3D card rotations

Building assembly animations

Structural line animations

The 3D should feel realistic and sophisticated, not like a game website.

HERO — CINEMATIC 3D EXPERIENCE

The hero must be the most impressive section.

Create a full-screen cinematic hero.

Background:

A large premium construction/building image.

Foreground:

Create a 3D architectural composition.

For example:

Building image/panel in the center

Several architectural layers behind it

Floating structural lines

Perspective grid

Building floor outlines

Small technical labels

Floating project information

Depth layers

Use CSS 3D transforms to make different elements sit at different Z-depths.

Example structure:

              BACKGROUND
        ─────────────────────
          Blueprint Grid

       [ Architectural Layer ]

            ┌───────────┐
            │           │
            │  BUILDING │
            │           │
            └───────────┘

        [ Technical Lines ]

      PROJECT     20+ YEARS


HERO 3D ANIMATION

When the website loads:

STEP 1

Start with a dark screen.

STEP 2

Blueprint grid slowly appears.

STEP 3

Architectural lines begin drawing.

STEP 4

Building structure starts assembling.

STEP 5

Building layers move from different Z positions toward the camera.

STEP 6

Main building image scales forward.

STEP 7

Headline appears with a cinematic reveal.

STEP 8

CTA buttons appear.

The final result should feel like:

An architectural model assembling itself in 3D.

3D BUILDING ASSEMBLY

Create a visual construction animation.

The building should appear to be constructed layer-by-layer.

For example:

Foundation
     ↓
Ground Floor
     ↓
Second Floor
     ↓
Third Floor
     ↓
Structural Frame
     ↓
Glass / Exterior
     ↓
Completed Building


Animate these elements using:

translateZ()

translateY()

rotateX()

rotateY()

scale()

opacity

The animation should create the illusion that the building is being constructed in front of the user.

SCROLL-BASED 3D CAMERA EFFECT

As the user scrolls:

The website should feel like a 3D camera is moving through an architectural space.

Use JavaScript to read scroll position.

Different layers should move at different speeds.

Example:

Background:

translateZ(-300px)

Middle layer:

translateZ(-100px)

Building:

translateZ(0px)

Foreground:

translateZ(100px)

This creates a convincing depth effect.

3D PROJECT SHOWCASE

Create a premium project section where projects feel like physical architectural models.

Each project card should have:

Perspective

3D depth

Image

Project title

Location

Year

Category

When the mouse moves over the card:

The card should tilt based on mouse position.

Example:

Mouse left:

rotateY(-8deg)

Mouse right:

rotateY(8deg)

Mouse top:

rotateX(6deg)

Mouse bottom:

rotateX(-6deg)

Add subtle translateZ() movement.

The card should feel like a physical architectural model floating above the page.

3D PROJECT TRANSITION

When hovering over a project:

Image moves forward

Card rotates slightly

Project title moves toward the user

Technical information appears

Architectural lines animate

Arrow moves forward

Keep it sophisticated.

BLUEPRINT 3D SECTION

Create a large dark architectural blueprint section.

Use:

Grid

Perspective lines

Technical measurements

Structural diagrams

Building outlines

Floating labels

Create a CSS perspective floor.

The grid should appear to extend into the distance.

Use:

perspective: 1200px;
transform-style: preserve-3d;


Create a floor plane using CSS.

The visitor should feel like they are looking across an architectural blueprint floor.

3D SERVICES

Do NOT use normal service cards.

Create services as 3D architectural panels.

Each service should look like a floating panel in space.

Example:

          SERVICE 01

       ┌───────────────┐
       │               │
       │ ARCHITECTURE  │
       │               │
       └───────────────┘
              ↘
           DETAILS


Cards should have:

Perspective

Depth

Layered borders

Floating numbers

Architectural lines

Hover should slightly rotate and move the card toward the visitor.

3D ABOUT SECTION

Create an architectural building image on one side.

Behind it:

Blueprint

Structural lines

Grid

In front:

Floating company statistics

For example:

20+
YEARS

150+
PROJECTS

75+
PROFESSIONALS

These statistics should exist at different depth levels.

When scrolling, they should move at different speeds.

3D STATISTICS

Create large numbers with depth.

Example:

20+
YEARS


The number should appear huge.

On scroll:

Start slightly behind

Move toward the visitor

Scale up

Fade into position

Use:

translateZ()

and

scale3d().

3D CONSTRUCTION PROCESS

Create a vertical construction timeline.

Steps:

01 — CONSULTATION

02 — DESIGN

03 — ENGINEERING

04 — CONSTRUCTION

05 — QUALITY CONTROL

06 — HANDOVER

Each step should appear as a 3D architectural layer.

As the user scrolls:

The active step moves forward.

Inactive steps remain behind.

This should create a 3D depth timeline.

3D CTA

Create a dramatic final section.

Large construction image in the background.

Place a 3D architectural frame around the CTA.

Headline:

LET'S BUILD
SOMETHING
EXCEPTIONAL.

The text should have subtle depth.

Use multiple layered text shadows/transforms to create a premium 3D typography effect.

MOUSE 3D INTERACTION

On desktop, implement a subtle mouse-based camera movement.

Track:

mousemove

Calculate:

mouseX

mouseY

Move different layers by different amounts.

For example:

Background:

2px

Middle:

8px

Building:

15px

Foreground:

25px

This creates a 3D camera/parallax effect.

Keep movement smooth using requestAnimationFrame.

3D BUTTONS

Buttons should feel physical.

Normal:

Flat.

Hover:

Move forward

Slight scale

Shadow expands

Arrow moves

Use:

transform: translate3d(0, -4px, 20px);


Add a smooth transition.

3D IMAGE EFFECT

Images should not simply fade in.

Use a 3D reveal.

Initial:

transform:
    perspective(1000px)
    rotateY(12deg)
    translateZ(-80px)
    scale(0.95);


Final:

transform:
    perspective(1000px)
    rotateY(0deg)
    translateZ(0)
    scale(1);


Use this effect for:

About image

Project images

Service images

Hero elements

CINEMATIC PAGE TRANSITIONS

When moving between major sections, use subtle cinematic transitions.

Examples:

Mask reveal

Clip-path

Perspective rotation

Scale transition

Image zoom

Architectural line drawing

Do NOT make every section rotate.

Use different transitions intelligently.

ARCHITECTURAL CURSOR

Desktop only.

Create a small architectural cursor.

Normal:

Small circle.

Hovering over project:

Cursor becomes larger.

Hovering over CTA:

Cursor expands and displays:

VIEW

or

OPEN

Keep it elegant.

Disable it on mobile.

PREMIUM COLOR PALETTE

Use:

Deep charcoal
Black
Concrete gray
Off-white
Muted construction orange
Optional bronze/gold accent

Avoid:

Neon colors.

Avoid:

Excessive gradients.

Avoid:

Gaming-style UI.

TYPOGRAPHY

Use a premium modern font.

Recommended:

Manrope

or

Inter

or

DM Sans

Use:

Very large headings.

Strong spacing.

Thin uppercase technical labels.

Example:

01 / PROJECTS

ARCHITECTURAL EXCELLENCE

3D DEPTH RULE

Every major section should have at least one of these:

Perspective

Parallax

Layered depth

3D transform

Architectural grid

Floating element

Scroll-based depth

BUT:

Do not make every element move.

The design must remain elegant.

PERFORMANCE

This is extremely important.

Do NOT create actual heavy 3D rendering.

Create the illusion of 3D using CSS and JavaScript.

Use:

CSS transforms

GPU-friendly transform/opacity

requestAnimationFrame

IntersectionObserver

will-change only where necessary

Avoid:

Large continuous animations

Heavy blur

Excessive box shadows

Thousands of DOM elements

WebGL

Three.js

The website must still load quickly on mobile devices.

MOBILE 3D EXPERIENCE

On mobile:

Do NOT remove all the 3D design.

Instead simplify it.

Keep:

Depth

Layered cards

Image movement

Scroll animation

Architectural lines

2.5D effects

Disable:

Heavy mouse effects

Custom cursor

Excessive perspective

Complex continuous animations

The mobile website should still feel premium.

FINAL EXPERIENCE

The final website should feel like:

A construction company website combined with an architectural visualization studio.

The visitor should experience:

PLAN → DESIGN → ENGINEER → BUILD → COMPLETE

through the visual storytelling.

The website should communicate:

PRECISION

ENGINEERING

QUALITY

EXPERIENCE

TRUST

CONSTRUCTION EXCELLENCE

MOST IMPORTANT REQUIREMENT

Do NOT create a normal HTML business template with some animations added.

Instead, design the entire experience around 3D depth and architectural motion.

Think like a:

20+ year award-winning architectural digital designer.

The website should look expensive.

The animations should look cinematic.

The 3D should look believable.

The interface should remain professional.

The website must be fast.

The code must remain pure:

HTML + CSS + Vanilla JavaScript.

Generate the complete working static website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dimensional-build-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/66f16dc3-c9d5-4765-8530-7ee72533212e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
