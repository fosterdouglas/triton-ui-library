<docs>

<h3>Text Valid / Invalid</h3>
<p>Valid data entered in a text field is marked with a green border and a check mark, and invalid data is marked in red. In general, the styling for "valid" shouldn't be used by default, only for fields that benefit from additional confirmation (for example, when creating a new password, when the input meets the set criteria).</p>

```js
<template>
    <b-container class="containsRowItems" fluid>

      <b-row>
        <b-col cols="6" class="form-label-group">
          <b-form-group>
            <b-form-input :state="true" id="form-field-2" class="form-control" placeholder="Email" value="valid@gmail.com" description="test"/>
            <label for="form-field-2">Email</label>
            <b-form-valid-feedback>
              Congrats! You did a good job!
            </b-form-valid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6" class="form-label-group">
          <b-form-group>
            <b-form-input :state="false" id="form-field-2" class="form-control" placeholder="Email" value="invalid@gmail.commm"/>
            <label for="form-field-2">Email</label>
            <b-form-invalid-feedback>
              Please check the formatting of your email address.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

    </b-container>
</template>
```

</docs>
