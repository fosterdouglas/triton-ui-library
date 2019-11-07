<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- Distribute components into separate files</b-li>
        <b-li class="alertListItem">- Remove/solve form field "underline"</b-li>
        <b-li class="alertListItem">- Add additional form field types</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Text Field
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>Used for basic form text entry. Form fields will use ":placeholder-shown" to keep labels visible during filling.</p>

```js

<form class="row">

  <div class="col-6 form-label-group">
    <input id="textfield" class="form-control" placeholder="Text Field" type="email">
    <label  for="textfield">Text Field</label>
  </div>

</form>
```

<h3>Text Field - Confirm</h3>
<p>Compliant data entered in a text field is marked with a green border and a check mark.</p>

```js

<div class="row">

  <div class="col-6 mt-1" data-toggle="tooltip" data-trigger="focus" data-placement="right" title="Text Field - Confirm">
    <input class="is-valid form-control border-confirm rounded-0" type="text" value="success@gmail.com" />
  </div>

</div>
```

<h3>Text Field - Error</h3>
<p>If entered data doesn't match the required type of the field, it's marked with a red border and an exclamation mark. </p>

```js

<div class="row">

  <div class="col-6 mt-1" data-toggle="tooltip" data-trigger="focus" data-placement="right" title="Text Field - Error">
    <input class="is-invalid form-control border-warning text-warning rounded-0" type="text" value="error@gmail.comm" />
  </div>

</div>
```


</docs>
