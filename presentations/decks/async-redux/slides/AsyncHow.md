# How to do it


A plethora of different async middlewares and enhancers exists
Most notable ones:

<v-clicks>

* <strong>Redux Thunk</strong> (allows writing functions that interact with Redux's <i>dispatch</i> and <i>getState</i>)
* <strong>Redux-Saga</strong> (more powerful and complex, based on generator functions)
* <strong>Redux-Observable</strong> (more powerful and complex, based on observables and streams)
* <strong>Redux-Loop</strong> (middleground between <strong>Thunks</strong> and more complex solutions; based on effects in <strong>Elm</strong>)

</v-clicks>

<br>

> NOTE: Redux Tookit comes bundled with Redux Thunk as well as a Redux-Saga like effect system and a sublibrary called **RTK Query**.
> Beyond these there is rarely any need to use something else these days.

<br>
