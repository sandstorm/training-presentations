## Table of contents

<!-- vim-markdown-toc GFM -->

- [Run + develop presentations](#run--develop-presentations)
  - [Run a presentation](#run-a-presentation)
    - [Shortcuts](#shortcuts)
  - [Build a presentation](#build-a-presentation)
- [Known Issues](#known-issues)
  - [`WebpackError: ReferenceError: Prism is not defined`](#webpackerror-referenceerror-prism-is-not-defined)

<!-- vim-markdown-toc -->

## Run + develop presentations

All presentations inside the `presentations` directory have been built with [mdx-deck](https://github.com/jxnblk/mdx-deck) and [CodeSurfer](https://github.com/pomber/code-surfer).

The whole presentation has been split into sub-presentations so that it becomes easier to skip/add
parts of the presentation depending on the requirements of the specific training and customer needs.

### Run a presentation

1. Check out the repository
2. cd into the presentations directory
3. Run `yarn` to install all dependencies
4. Run `yarn run` to list all available `run deck:<deckName>` commands (or have a look inside the `package.json`)
5. Pick the presentation deck you want to run by invoking `yarn run deck:<deckName>`

#### Shortcuts

- `alt + o` - overview mode
- `alt + p` - presenter mode

### Build a presentation

To build a presentation follow these steps:

1. create a new directory inside the `presentations/decks/` directory
2. create a `slides/` and a `deck.mdx` file inside the newly created directory
3. add a new `run deck:<deckname>` npm script to the `package.json`

To get an idea of how to best build a presentation please refer to the mdx-deck-/codeSurfer-docs
and have a look inside our already existing presentations.

## Known Issues

- Because this project was scaffolded with CodeSurfer we are currently running an older version of mdx-deck which might lack some features of **v4.x.x+**
- Whenever you want to add a new `import` (e.g. an image, a slide or a react-component) you currently have to restart the development-server (hot-reloading is unfortunately broken inside the mdx-deck version we have to use)
- We currently cannot upgrade mdx-deck, as slide import seems to be broken in **v4.x.x+** and CodeSurfer also does not seem to support **v4**, yet
- **Can't we use another library?** - I did extensive testing of various libraries and at the time of writing this **README** I didn't find any library that met our requirements and also wasn't completely broken and well maintained. Libraries that have also been taken into consideration:
  - spectacle
  - reveal.js
  - marp
  - deckdeckgo
  - react-presents
  - remark
  - fusuma

### `WebpackError: ReferenceError: Prism is not defined`

If you get this error you probably have this import `import "prismjs/components/prism-tsx"` somewhere inside your deck,
without a slide using CodeSurfer.
Make sure to only include prism into a deck if you have at least one slide containing a code example.
