---
layout: center
---

# The Flux Architecture

<br>
<br>

```mermaid {theme: 'neutral', scale: 1.7}
flowchart LR
    A(Action) --> B(Dispatcher) --> C(Store) --> D(View) --> A
    
    style A color: #fff, fill: #76b6c8, stroke: #fff, stroke-width: 4px
    style B color: #fff, fill: #444242, stroke: #fff, stroke-width: 4px
    style C color: #fff, fill: #2e4551, stroke: #fff, stroke-width: 4px
    style D color: #fff, fill: #5faf6a, stroke: #fff, stroke-width: 4px
```

<br />

<v-clicks>

* Application architecture for building user interfaces
* Unidirectional data flow:
* Views send actions to the dispatcher.
* The dispatcher sends actions to every store.
* Stores send data to the views.

</v-clicks>
