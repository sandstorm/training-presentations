---
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'FCs + Hooks'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s'
# information for your slides, can be a markdown string
info: false

# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'fcs-and-hooks.pdf'
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
src: ./decks/functionalComponentsAndHooks/slides/FunctionComponentsAndHooks.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/FunctionalComponents.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/Fragments.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/ListRendering.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/ChildrenAsProps.md
---

---
layout: cover
---

# Hands On

<!--
Aufgaben 1 + 2
-->

---
src: ./decks/functionalComponentsAndHooks/slides/ReactMemo.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/ReactMemo2.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/ReactHooks.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/UseState.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/UseStateExample.md
---

---
layout: cover
---

# Hands On

<!--
Aufgabe 3
-->

---
src: ./decks/functionalComponentsAndHooks/slides/UseEffect.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/UseEffectExample.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/UseEffectExampleWithDeps.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/UseEffectExampleWithCleanup.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/RulesOfHooks.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/RulesOfHooks2.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/CustomHooks.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/CustomHooks2.md
---

---
layout: cover
---

# Hands On

<!--
Aufgaben 4 + 5
-->

---
src: ./decks/functionalComponentsAndHooks/slides/ControlledInputs.md
---

---
layout: cover
---

# Hands On

<!--
Aufgabe 6
-->

---
src: ./decks/functionalComponentsAndHooks/slides/UseReducer.md
---

---
src: ./decks/functionalComponentsAndHooks/slides/UseReducerExample.md
---

---
layout: cover
---

# Hands On

<!--
Aufgabe 7
-->
