---
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'Functional Programming'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'functiona-programming-exported'
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

<style>
.diagram {
    padding: 30px;
    background: white !important;
    border-radius: 5px;
}
</style>

# Redux

> A Predictable State Container for JS Apps

---
src: ./decks/redux-basics/slides/Intro.md
---

---
src: ./decks/redux-basics/slides/Alternatives.md
---

---
src: ./decks/redux-basics/slides/Why.md
---

---
src: ./decks/redux-basics/slides/What.md
---

---
src: ./decks/redux-basics/slides/Flux.md
---

---
src: ./decks/redux-basics/slides/FPRecap.md
---

---
src: ./decks/redux-basics/slides/FPRecapData.md
---

---
src: ./decks/redux-basics/slides/FPRecapCalculations.md
---

---
src: ./decks/redux-basics/slides/FPRecapActions.md
---

---
src: ./decks/redux-basics/slides/CorePrinciples.md
---

---
src: ./decks/redux-basics/slides/ReduxArchitecture.md
---

---
src: ./decks/redux-basics/slides/ReduxActionIntro.md
---

---
src: ./decks/redux-basics/slides/ReduxAction.md
---

---
src: ./decks/redux-basics/slides/ReduxActionExample.md
---

---
src: ./decks/redux-basics/slides/ReduxStateIntro.md
---

---
src: ./decks/redux-basics/slides/ReduxState.md
---

---
src: ./decks/redux-basics/slides/ReduxReducerIntro.md
---

---
src: ./decks/redux-basics/slides/ReduxReducer.md
---

---
src: ./decks/redux-basics/slides/ReduxReducerExample.md
---

---
src: ./decks/redux-basics/slides/ConfigureStore.md
---

---
layout: center
---

# Hands On

<!-- Exercises 0 & 1 -->

---
src: ./decks/redux-basics/slides/ConnectingToRedux.md
---

---
src: ./decks/redux-basics/slides/ConnectFunction.md
---

---
src: ./decks/redux-basics/slides/MapState.md
---

---
src: ./decks/redux-basics/slides/MapStateExample.md
---

---
src: ./decks/redux-basics/slides/MapDispatch.md
---

---
src: ./decks/redux-basics/slides/MapDispatchExample.md
---

---
src: ./decks/redux-basics/slides/ConnectorExample.md
---

---
layout: center
---

# Hands On

<!-- Exercises 2 & 3 -->

---
src: ./decks/redux-basics/slides/BestPractices.md
---
