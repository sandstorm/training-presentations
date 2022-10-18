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
.col-left{
  width: 95%;
}

.col-right {
  width: 100%;
}
</style>

# Redux Toolkit

---
src: ./decks/redux-toolkit/slides/ReduxToolkit1.md
---

---
src: ./decks/redux-toolkit/slides/ReduxToolkit2.md
---


---
src: ./decks/redux-toolkit/slides/ConfigureStore.md
---


---
src: ./decks/redux-toolkit/slides/ConfigureStore2.md
---


---
src: ./decks/redux-toolkit/slides/Reducers1.md
---


---
src: ./decks/redux-toolkit/slides/Reducers2.md
---


---
src: ./decks/redux-toolkit/slides/Reducers3.md
---


---
src: ./decks/redux-toolkit/slides/ActionCreators.md
---


---
src: ./decks/redux-toolkit/slides/ActionCreators2.md
---


---
src: ./decks/redux-toolkit/slides/CreateSlice.md
---


---
src: ./decks/redux-toolkit/slides/CreateSlice2.md
---

---
src: ./decks/redux-toolkit/slides/CreateSlice3.md
---

---
src: ./decks/redux-toolkit/slides/OtherUsefulAPIFunctions.md
---

---
layout: cover
---

# Hands On

<!--
Exercise 5
-->
