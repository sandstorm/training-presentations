---
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: 'default'
# title of your slide, will auto infer from the first header if not specified
title: 'React Testing'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s'
# information for your slides, can be a markdown string
info: false

# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'react-testing.pdf'
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

# Testing in react - an overview


---
src: ./decks/react-testing/slides/WhyTesting.md
---


---
src: ./decks/react-testing/slides/WhatToTest.md
---


---
src: ./decks/react-testing/slides/WhatToTest2.md
---


---
src: ./decks/react-testing/slides/GoldenRules.md
---


---
src: ./decks/react-testing/slides/Vitest.md
---


---
src: ./decks/react-testing/slides/Vitest2.md
---


---
src: ./decks/react-testing/slides/UnitTests.md
---

---
layout: cover
---

# Hands On

<!--
NOTE: If participants have checked out our training repo, there is no need to install
packages - everything has already been setup!

> Show existing tests in hands on repoistory, before doing the exercises!

* 0
* 1
* 2
-->


---
src: ./decks/react-testing/slides/ReactTestingLibrary.md
---


---
src: ./decks/react-testing/slides/Mocking.md
---


---
src: ./decks/react-testing/slides/Mocking2.md
---

---
layout: cover
---

# Hands On

<!--
NOTE: If participants have checked out our training repo, there is no need to install
packages - everything has already been setup!

> Show existing tests in hands on repoistory, before doing the exercises!

* 3
* 4
-->

---
src: ./decks/react-testing/slides/Cypress.md
---


---
src: ./decks/react-testing/slides/Cypress2.md
---


---
src: ./decks/react-testing/slides/Cypress3.md
---

---
layout: cover
---

# Hands On

<!--
NOTE: If participants have checked out our training repo, there is no need to install
packages - everything has already been setup!

> Show existing tests in hands on repoistory, before doing the exercises!

* 5
-->

---
src: ./decks/react-testing/slides/TDD.md
---


---
src: ./decks/react-testing/slides/BDD.md
---


---
src: ./decks/react-testing/slides/BDD2.md
---


---
src: ./decks/react-testing/slides/BDD3.md
---


---
src: ./decks/react-testing/slides/Coverage.md
---
