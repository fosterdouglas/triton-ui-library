<docs>

<h3>Text Field</h3>
<p>For general use, and can be used freely in a group along with row elements.</p>

```js
<template>
<b-container class="containsRowItems" fluid>
  <b-row>
    <b-col>
      <b-input-group prepend="Text Field">
        <b-form-input class="form-control" type="text" placeholder="Text Field"></b-form-input>
      </b-input-group>
    </b-col>
    <b-col>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-input-group class="disabled" prepend="Text Field">
        <b-form-input class="form-control" type="text" placeholder="Disabled Text Field" disabled></b-form-input>
      </b-input-group>
    </b-col>
    <b-col>
    </b-col>
  </b-row>
</b-container>

</template>
<script>
  export default {
}
</script>
```

</docs>
