# E2E-Testing with Cypress

<v-clicks>

* Spins up a real browser and tests an application end-to-end
* you should only try to test what you actually control - therefore external APIs should be mocked
* network requests to APIs under your control -> mock most of them, follow a few critical paths for real e2e tests
* don't write e2e tests like unit tests -> e2e tests should test way more then a single button class etc.
* full e2e (you need an actual running application somewhere), so even API calls etc. are being covered
</v-clicks>
