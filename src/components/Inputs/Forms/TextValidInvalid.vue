<docs>

<h3>Text Valid / Invalid</h3>
<p>Valid data entered in a text field is marked with a green border and a check mark, and invalid data is marked in red.</p>

```js
<template>
    <b-container class="containsRowItems" fluid>

      <b-row>
        <b-col cols="6" class="form-label-group">
          <b-form-input :state="true" id="form-field-2" class="form-control" placeholder="Email" value="valid@gmail.com"/>
          <label for="form-field-2">Email</label>
        </b-col>

        <b-col cols="6" class="form-label-group">
          <b-form-input :state="false" id="form-field-2" class="form-control" placeholder="Email" value="invalid@gmail.commm"/>
          <label for="form-field-2">Email</label>
        </b-col>
      </b-row>

    </b-container>
</template>
```

</docs>
