# Connecting React Components to the Redux Store

<v-clicks>

* Library: [React Redux](https://react-redux.js.org/)
* Two ways to read state/dispatch actions:
  1. use the provided `useSelector()` and `useDispatch()` hooks
  2. use the `connect()`-Higher order component
* The recommended approach is **1.** these days
* Does not work with class components, however
* Both styles can be mixed inside a project, if necessary (but stick to one if possible)

</v-clicks>

<!--
**Skip connect()-detail-slides - only show hooks!**

> **NOTE**: We have both approaches inside this deck, so it is possible to show the
> connect approach if students are interested and there is enough time.
> In most situations we should **only show the hook approach and skip `connect`()**, though.
-->
