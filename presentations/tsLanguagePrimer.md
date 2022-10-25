---
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'TS Primer'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s'
# information for your slides, can be a markdown string
info: false

# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'ts-primer.pdf'
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

# TypeScript

<!--
NOTE: Feel free to skip parts of this presentation, as it can be rather long winded and
it is usually easier to learn TS by "doing"
-->

---
src: ./decks/TS-Language-Primer/slides/Typescript.md
---

---
src: ./decks/TS-Language-Primer/slides/TypeScriptWhy.md
---

---
src: ./decks/TS-Language-Primer/slides/TypeScriptHow.md
---

---
src: ./decks/TS-Language-Primer/slides/TypeScriptWhat.md
---

---
src: ./decks/TS-Language-Primer/slides/Website.md
---

---
src: ./decks/TS-Language-Primer/slides/Boolean.md
---

---
src: ./decks/TS-Language-Primer/slides/Number.md
---

---
src: ./decks/TS-Language-Primer/slides/String.md
---

---
src: ./decks/TS-Language-Primer/slides/TypeInference.md
---

---
src: ./decks/TS-Language-Primer/slides/Caution.md
---

---
src: ./decks/TS-Language-Primer/slides/Array.md
---

---
src: ./decks/TS-Language-Primer/slides/Tuple.md
---

---
src: ./decks/TS-Language-Primer/slides/Function.md
---

---
src: ./decks/TS-Language-Primer/slides/Enum.md
---

---
src: ./decks/TS-Language-Primer/slides/EnumExample.md
---

---
src: ./decks/TS-Language-Primer/slides/Any.md
---

---
src: ./decks/TS-Language-Primer/slides/NullAndUndefined.md
---

---
src: ./decks/TS-Language-Primer/slides/TypeAlias.md
---

---
src: ./decks/TS-Language-Primer/slides/TypeAssertion.md
---

---
src: ./decks/TS-Language-Primer/slides/Composition.md
---

---
src: ./decks/TS-Language-Primer/slides/Generics.md
---

---
src: ./decks/TS-Language-Primer/slides/Interface.md
---

---
src: ./decks/TS-Language-Primer/slides/UnionTypes.md
---

---
src: ./decks/TS-Language-Primer/slides/IntersectionType.md
---

---
src: ./decks/TS-Language-Primer/slides/LiteralTypes.md
---
