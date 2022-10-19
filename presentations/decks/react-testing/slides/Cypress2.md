# E2E-Testing with Cypress


<v-clicks>

* tests are async!
* you can't use async/await and need to use <i>then()</i> chains instead (these are not promises!)
* cypress commands are serial and are triggered one after another
* cypress automatically waits for queries to finish (and opts retries)
* if a cypress command fails, eventually the test will fail
* cypress tests often do not need actual assertions, because each command is basically some kind of assertion in and of themselves

</v-clicks>
