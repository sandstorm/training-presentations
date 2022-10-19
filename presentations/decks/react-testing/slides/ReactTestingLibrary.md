# React-testing-library


<v-clicks>

* library to create component/integration/(e2e) tests
* uses the DOM Api provided by Jest by default
* goal is to test from the users perspective
* prior libraries like <strong>enzyme</strong> where more jquery like, fetching dom nodes by implementation details
* Three query types: <i>get</i>, <i>find</i>, <i>query</i>
* <i>get</i> is synchronous and throws an error if the element is not found
* <i>find</i> is asynchronous (returns a promise) and also throws
* <i>query</i> is synchronouse and returns <i>null</i> element is not found
* <i>find/getbyRole</i> as sane default
* <i>query</i> only for testing if something does not exist
</v-clicks>

<!--
- Show examples in redux-hands-on-repo
- Show docs
-->
