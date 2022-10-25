---
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'Functional Programming'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s'
# information for your slides, can be a markdown string
info: false

# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'functional-programming.pdf'
# syntax highlighter, can be 'prism' or 'shiki'
highlighter: 'prism'
# show line numbers in code blocks
lineNumbers: true
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: true
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: false

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
routerMode: 'history'
# aspect ratio for the slides
aspectRatio: '16/9'
# real width of the canvas, unit in px
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# default frontmatter applies to all slides
defaults:
  layout: 'default'
  # ...

# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true


# First slide
layout: cover
---

# Functional Programing Basics

---
src: ./decks/functionalProgramming/slides/FPBasicsOverview.md
---

---
src: ./decks/functionalProgramming/slides/PureFunctions.md
---

---
src: ./decks/functionalProgramming/slides/IsThisFunctionPure.md
---

---
src: ./decks/functionalProgramming/slides/Immutability.md
---

---
src: ./decks/functionalProgramming/slides/ImmutabilityWhy.md
---

---
src: ./decks/functionalProgramming/slides/MutableExample.md
---

---
src: ./decks/functionalProgramming/slides/ImmutableExample.md
---

---
src: ./decks/functionalProgramming/slides/ImmutabilityWait.md
---

---
src: ./decks/functionalProgramming/slides/ImmutableIteration.md
---

---
src: ./decks/functionalProgramming/slides/VariableReAssignments.md
---

---
src: ./decks/functionalProgramming/slides/VariableReAssignments2.md
---

---
src: ./decks/functionalProgramming/slides/VariableReAssignments3.md
---

---
src: ./decks/functionalProgramming/slides/ImmutabilityArraysAndObjects.md
---

---
src: ./decks/functionalProgramming/slides/ImmutabilityArrays.md
---

---
src: ./decks/functionalProgramming/slides/ImmutabilityObjects.md
---

---
src: ./decks/functionalProgramming/slides/CurryingAndClosures.md
---

---
src: ./decks/functionalProgramming/slides/Closures.md
---

---
src: ./decks/functionalProgramming/slides/ClosuresExample.md
---

---
src: ./decks/functionalProgramming/slides/Currying.md
---

---
src: ./decks/functionalProgramming/slides/CurryingExample.md
---

---
src: ./decks/functionalProgramming/slides/HigherOrderFunctions2.md
---

---
src: ./decks/functionalProgramming/slides/HigherOrderFunctions3.md
---
