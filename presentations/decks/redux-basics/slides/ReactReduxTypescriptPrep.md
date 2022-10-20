# Typescript React Redux hook setup

* Some setup is necessary to easily use `useSelector()` and `useDispatch()` with typescript
* Docs: https://react-redux.js.org/using-react-redux/usage-with-typescript

<br>

> **Important Note**: always make sure not to define the hooks inside your `store.ts` directly!
> Otherwise you might get circular imports and weird typescript errors!
