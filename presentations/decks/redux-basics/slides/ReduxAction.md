# Redux Action

<v-clicks>

* Think: Event or intent
* Best Practice: Event (what happened, i.e. "User placed an order")
* Plain JS Object <code>type</code> and optional <code>payload</code>

</v-clicks>

<!-->
- Event is the best practise
- Exception: non-serializable values if action will be
intercepted and stopped by a middleware before it reaches
the reducers (e.g. redux-thunk)
-->
