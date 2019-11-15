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
        <li class="alertListItem">- <del>Remove/solve form field "underline"</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Add datalist type</li>
      </ul>
  </b-alert>

</div>
```

<h3>Radio Group</h3>
<p></p>

```js
<template>
  <div>

    <b-form-group label="Group of options:">
      <b-form-radio-group
        name="radios-stacked"
        stacked
      >
      <b-form-radio class="custom-radio" name="radio-group" value="1">You Can Choose This One</b-form-radio>
      <b-form-radio class="custom-radio" name="radio-group" value="2">Or This Option</b-form-radio>
      <b-form-radio class="custom-radio" name="radio-group" value="3">Even This One Is An Option</b-form-radio>

    </b-form-radio-group>
    </b-form-group>

  </div>
</template>
<script>
  export default {
  }
</script>
```

<h3>Text Standard</h3>
<p>Used for basic form text entry. Form fields use a new selector ":placeholder-shown" to keep labels visible during filling.
  The labels are built into each form field for styling simplicity, organization, and consistency.
  <br/>
  The "placeholder" property on the input should be appended with (Required) for forms more than a few fields in length.
  The content of the label should remain without the ammendment qualifier.</p>

```js
<template>
  <div class="row">

  <div class="form-label-group formFieldHalf">
    <b-form-input id="form-field-1" class="form-control" placeholder="First Name (Required)"/>
    <label for="form-field-1">First Name</label>
  </div>

  <div class="form-label-group formFieldHalf">
    <b-form-input id="form-field-2" class="form-control" placeholder="Last Name (Optional)"/>
    <label for="form-field-2">Last Name</label>
  </div>

  </div>
</template>
```

<h3>Text Valid</h3>
<p>Compliant data entered in a text field is marked with a green border and a check mark.</p>

```js
<template>
  <div class="row">

  <div class="form-label-group formFieldHalf">
    <b-form-input :state="true" id="form-field-2" class="form-control" placeholder="Email" value="valid@gmail.com"/>
    <label for="form-field-2">Email</label>
  </div>

  </div>
</template>
```

<h3>Text Invalid</h3>
<p>If entered data doesn't match the required type of the field, it's marked with a red border and an exclamation mark. </p>

```js
<template>
  <div class="row">

  <div class="form-label-group formFieldHalf">
    <b-form-input :state="false" id="form-field-2" class="form-control" placeholder="Email" value="invalid@gmail.commm"/>
    <label for="form-field-2">Email</label>
  </div>

  </div>
</template>
```


</docs>
