<docs>

<h3>Alerts</h3>
<p>These appear at the top or bottom of a form page after it's been submitted, either successfully or when returned with errors.

```js
<div class="row">

  <div class="alert alert-success fade show m-4 w-100 p-4 mt-1" role="alert">
    <button class="pointer close-icon float-right" type="button" data-dismiss="alert" aria-label="Close">
      <i class="fal fa-lg fa-window-close text-success align-middle pointer icon-hover"></i>
    </button>
    <h5 class="alert-heading">Success!</h5>
    <hr/>
    <p class="mb-0">This alert will show up at the top of a successfully loaded page following a form.</p>
  </div>

  <div class="alert alert-warning fade show m-4 w-100 p-4 mt-1" role="alert">
    <button class="pointer close-icon float-right" type="button" data-dismiss="alert" aria-label="Close">
      <i class="fal fa-lg fa-window-close text-warning align-middle pointer icon-hover"></i>
    </button>
    <h5 class="alert-heading">Warning!</h5>
    <hr/>
    <p class="mb-0">This alert will show up beneath the form submit button in the case that an error with a text field has occured. It may contain details of the error:</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item font-weight-bolder">Something went wrong.</li>
      <li class="list-group-item font-weight-bolder">Also, another thing went wrong.</li>
      <li class="list-group-item font-weight-bolder">Oops this one, too.</li>
    </ul>
  </div>

</div>
```

<h3>Text Field</h3>
<p>Used for basic form text entry.</p>

```js

<div class="row">

  <div class="col-6 mt-1" data-toggle="tooltip" data-trigger="focus" data-placement="right" title="Text field">
    <input class="form-control border-mediumdark rounded-0" type="text" placeholder="Text field" />
  </div>

</div>
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
