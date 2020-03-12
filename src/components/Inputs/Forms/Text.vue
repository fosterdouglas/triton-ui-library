<docs>


<h3>Text</h3>
<p>Used for basic form text entry. Form fields use a new selector ":placeholder-shown" to keep labels visible during filling. The labels are built into each form field for styling simplicity, organization, and consistency. <b>Note:</b> the "placeholder" text on the input should include "(Required)" for forms more than a few fields in length. The content of the label should remain without the ammendment qualifier.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col cols="6" class="form-label-group">
        <b-form-input autocomplete="off" id="form-field-2" class="form-control" placeholder=" "/>
        <label for="form-field-2">First Name (Required)</label>
      </b-col>

      <b-col cols="6" class="form-label-group">
        <b-form-input autocomplete="off" id="form-field-3" class="form-control" placeholder=" "/>
        <label for="form-field-3">Last Name (Required)</label>
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
