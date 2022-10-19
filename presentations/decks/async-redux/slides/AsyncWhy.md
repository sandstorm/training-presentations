# Asynchronous Redux

<v-clicks>

* Up to this point we have only used Redux completely synchronously
* No way to react to outside/async events (e.g.) API responses directly inside Redux
* Instead fetch logic etc. had to be handled inside our components and resulting data had to be handed to Redux
* However our components should ideally not be concerned with how these tasks are handled

</v-clicks>
