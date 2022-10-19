# createAction()

<v-clicks>

 * Combines the definition of the <i>actionCreator</i> with the definition of the type constant
 * The action type can then be referenced by calling either <i>someActionCreator.type</i> or <i>someActionCreator.toString()</i>
 * <strong>Note:</strong> <i>someActionCreator.type</i> only works with <i>createReducer()</i> / <i>createSlice()</i> not with regular reducers
 * Optionally a <i>prepare()</i>-callback can be used as second argument, to define how the payload should be processed

</v-clicks>
