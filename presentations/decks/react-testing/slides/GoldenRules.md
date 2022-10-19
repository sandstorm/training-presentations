# Golden rules of testing

<v-clicks>

1. tests should never depend on other tests -> if they need a common setup use `beforeEach/afterEach` blocks instead
2. a test should always fail at least once

</v-clicks>

<!--
* If a test has not failed you can't even be sure that you are testing anything or the correct thing
-->
