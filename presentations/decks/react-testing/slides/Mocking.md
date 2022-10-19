# Mocking

<br>

> Note: The definitions of mocks vs stubs is blurry, which is why we use them interchangeably

<br>

<v-clicks>

* Mocks replicate some part of the code while changing its implementation
* Useful to draw a line between code that's to be tested and code that is "out of scope"
* Typically can be inspected if it has been called (and how often, and with correct arguments etc.)
* Allows us to return results needed for a test case without the need to interact with the actual code (e.g. an API)
</v-clicks>

<v-click>

Usage examples:
</v-click>

<v-clicks>

* Non-deterministic functions (e.g. randomization)
* API-calls (e.g. <i>fetch</i>)
* Databases, complex classes etc.
</v-clicks>
