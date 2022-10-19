# Redux - Why

<br>

> What problem do we need to solve?

<br>

<v-clicks>

* React is the V in MVC so we need the MC
* Logic & State are contained in Components
* Logic & State are not easily shared between Components
* Depends on your App:
  * Small, self-contained Widget: don't use Redux
  * Everything else: strongly consider Redux

</v-clicks>

<!--
- context API is build as a kind of dependency management tool and to avoid props-drilling
- it _can_ be used to replace redux, but avoiding props-drilling is _not_ the use case for Redux
- in a sense, Redux and the surrounding business logic _is_ the App and React is just the view layer
- the M & C in MVC
-->
