> **Internal-Note**: Browser examples, exercises etc. can be found inside the `trainings` repo in our internal Gitlab!


# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Run + develop presentations](#run--develop-presentations)
    - [Run a presentation](#run-a-presentation)
    - [Build a presentation](#build-a-presentation)
    - [Project structure](#project-structure)
    - [Styling](#styling)
      - [Example custom styling on single slide](#example-custom-styling-on-single-slide)

## Run + develop presentations

All presentations inside the `presentations` directory have been built with [slidev](https://sli.dev)

The whole presentation has been split into sub-presentations so that it becomes easier to skip/add
parts of the presentation depending on the requirements of the specific training and customer needs.

### Run a presentation

1. Check out the repository
2. cd into the presentations directory
3. Run `yarn` to install all dependencies
4. Run `yarn run` to list all available `run deck:<deckName>` commands (or have a look inside the `package.json`)
5. Pick the presentation deck you want to run by invoking `yarn run deck:<deckName>`


### Build a presentation

To build a presentation follow these steps:

1. create a new directory inside the `presentations/decks/` directory
2. create a `slides/` and a `deck.mdx` file inside the newly created directory
3. add a new `run deck:<deckname>` npm script to the `package.json`

To get an idea of how to best build a presentation please refer to the mdx-deck-/codeSurfer-docs
and have a look inside our already existing presentations.


### Project structure

* Each deck has an entrypoint md-file lying inside the root of the `presentations/`-directory
* Each decks respective slides can then be found inside the corresponding directory of the `decks/`-directory
* Images/Assets can be put into `images/` and there path is always relative to the `presentations/`-root, even if it is being referenced by a slide somewhere inside `decks/**/*`

> NOTE: It is currently mandatory to have the entrypoints inside the directory root for **slidev** to work properly.
> This is why we can't move these deck files into each decks subdirectory!

### Styling

Currently we do not apply any global styling and deck formatting.
Each deck hast its own frontmatter (simply copy it from another entrypoint file, when you create a new presentation).
You may use `<style></style>` tags either inside the entrypoint file (for styles that should be used multiple times througout the deck) or locally inside a slides Markdown file.

> NOTE: No matter where you put the `style`-tag, the changes will apply to **ALL** slides inside that deck.
> Therefore you should not use generic selectors like `img` or `h1` inside any markdown files other than the entrypoint of the deck. If you use `style` tags inside a slide file, make sure to use specific selectors like classes and use **HTML** to apply them inside the respective slide

#### Example custom styling on single slide

```md
<style>
.my-special-list {
  background: green;
}
</style>

# Example slide with custom styling

<div class="my-special-list">

* item a
* item b
* item c

</div>
```
