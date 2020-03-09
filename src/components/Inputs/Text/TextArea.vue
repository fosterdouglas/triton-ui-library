<docs>

<h3>Text Area</h3>
<p>Used when a large block of text needs to be inputted, for example to add a note.</p>

```js
<template>
<b-container class="containsRowItems" fluid>
  <b-row>
    <b-col>
      <b-input-group prepend="Text Field">
        <b-form-textarea no-resize class="form-control" type="text" placeholder="Text Area" rows="4" ></b-form-textarea>
      </b-input-group>
    </b-col>
    <b-col cols="4"></b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-input-group prepend="Text Field">
        <b-form-textarea no-resize class="form-control" type="text" placeholder="Text Area" rows="3" disabled>
        </b-form-textarea>
      </b-input-group>
    </b-col>
    <b-col cols="4"></b-col>
  </b-row>
</b-container>

</template>
<script>
  export default {
}
</script>
```

</docs>
