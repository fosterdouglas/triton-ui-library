<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Distribute components into separate files</li>
        <li class="alertListItem">- Solve text field editor issue (user adding/editing JSON)</li>
      </ul>
  </b-alert>

</div>
```

<h3>Text Field</h3>
<p>For generic use, often a better and more specific solution is avaiable.</p>

```js
<template>

  <div class="row">
    <div class="col">
      <b-input-group prepend="Text Field">
        <b-form-input class="form-control" type="text" placeholder="Text Field"></b-form-input>
      </b-input-group>
    </div>
    <div class="col">
      <b-form-input class="form-control" type="text" placeholder="Disabled Text Field" disabled></b-form-input>
    </div>
  </div>

</template>
<script>
  export default {
}
</script>
```


<h3>Search Box
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>A highlighted text field specifically designed for search functionality. Supports a clear icon upon typing, and is often paired with a group Filtering options. <span class="text-info">~This needs its "clear" search X fixed.~</span></p>

```js
<template>
  <div class="row">

    <div class="col-6">

       <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text><i class="iconSearch text-dark"></i></b-input-group-text>
          </template>
          <b-form-input type="text" name="focus" required class="searchBox form-control" placeholder="Search for Users, Clients, or Agents . . .">
             <b-button onclick="this.blur();" variant="-" class="searchClose cursorDefault text-warning" type="reset">
             </b-button>
          </b-form-input>
        </b-input-group>

    </div>

  </div>
</template>
<script>
export default {

}
</script>
```


<h3>Text Area</h3>
<p>Used when a large block of text needs to be inputted, for example to add a note to something.</p>

```js
<template>

  <div class="row">
    <div class="col" title="Text Field - Area">
      <b-form-textarea no-resize class="form-control" type="text" placeholder="Text Field - Area" rows="3" >
      </b-form-textarea>
    </div>
    <div class="col" title="Text Field - Area">
      <b-form-textarea no-resize class="form-control" type="text" placeholder="Text Field - Area" rows="3" disabled>
      </b-form-textarea>
    </div>
  </div>

</template>
<script>
  export default {
}
</script>
```

<h3>Text Editor
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>
<span class="text-info">This feature is in development and needs confirmation on use case.</span>
</p>

```js
<template>
  <div class="col-6 ml-0 pl-0">

    <div id="editor" class="editor mt-1 border-mediumdark rounded-0"></div>

  </div>
</template>
<script>
var toolbarOptions = ['bold', 'italic', 'underline', 'code-block', { 'size': ['small', false, 'large', 'huge'] }];
var quill = new Quill('#editor', {
  modules: { toolbar: toolbarOptions },
  theme: 'snow'
});
  export default {
}
</script>
```

</docs>
