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
        <li class="alertListItem">- Add sorting function component (for inclusion/exclusion)</li>
        <li class="alertListItem">- Solve text field editor issue (user adding/editing JSON)</li>
        <li class="alertListItem">- <del>Fix checkbox</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Fix mini checkbox</li>
        <li class="alertListItem">- Remove tooltip text (broken anyway)</li>
        <li class="alertListItem">- Refactor checkbox to use Vue classes</li>
      </ul>
  </b-alert>

</div>
```

<h3>Checkbox</h3>
<p>[Needs desciption...]</p>

```js
<template>
<div class="justify-content-start mt-1"> <!-- classes used for library display only -->
  <div class="custom-control custom-checkbox d-inline">
    <input id="customCheck1" class="custom-control-input" type="checkbox"/>
    <label class="custom-control-label cursorPointer" for="customCheck1"></label>
  </div>
  <div class="custom-control custom-checkbox d-inline">
    <input id="customCheck2" class="custom-control-input" type="checkbox"/>
    <label class="custom-control-label cursorPointer" for="customCheck2"></label>
  </div>
</div>
</template>

<script>
$(function () {
  $('#customCheck2').prop('checked', true)
});
  export default {
}
</script>
```

<h3>Filtering
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>[Needs desciption...]</p>

```js
<template>
<div class="justify-content-start mt-1"> <!-- classes used for library display only -->
  <div class="custom-control custom-checkbox d-inline">
    <input id="customCheck3" class="custom-control-input" type="checkbox"/>
    <label class="custom-control-label cursorPointer" for="customCheck3">
      <b-badge variant="none">Clients</b-badge>
    </label>
  </div>

  <div class="custom-control custom-checkbox d-inline">
    <input id="customCheck4" class="custom-control-input" type="checkbox"/>
    <label class="custom-control-label cursorPointer" for="customCheck4">
      <b-badge variant="none">Agents</b-badge>
    </label>
  </div>

  <div class="custom-control custom-checkbox d-inline">
    <input id="customCheck5" class="custom-control-input" type="checkbox"/>
    <label class="custom-control-label cursorPointer" for="customCheck5">
      <b-badge variant="none">Users</b-badge>
    </label>
  </div>

  <div class="custom-control custom-checkbox d-inline">
    <input id="customCheck6" class="custom-control-input" type="checkbox"/>
    <label class="custom-control-label cursorPointer" for="customCheck6">
      <b-badge variant="none">Deactivated Users</b-badge>
    </label>
  </div>

</div>
</template>

<script>
  export default {
}
</script>
```

<h3>Multi Select
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>[Needs desciption...]</p>

```js

<div class="row">

  <div class="col" title="Favourite Color?">
    <b-form-select :select-size="4" class="form-control cursorDefault" type="text">
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </b-form-select>
  </div>

  <div class="col">
    <b-form-select disabled :select-size="4" class="form-control cursorDisabled" type="text">
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </b-form-select>
  </div>

</div>
```

<h3>Multi Select - Drop Down
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>[Needs desciption...]</p>

```js
//ENABLE ALL TOOLTIPS FOR PAGE
$(function () {
  $('[data-toggle="tooltip"]').tooltip({delay: { show: 0, hide: 0 }});
});
//

<div class="row">

  <div class="col mt-1" title="Favourite Color?">
    <select class="form-control rounded-0 custom-select custom-select-hover pointer" type="text" placeholder="Favourite Color" >
      <option disabled selected>Favourite Color?</option>
      <option class="options">Pink</option>
      <option class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </select>
  </div>

    <div class="col mt-1">
      <select class="form-control rounded-0 custom-select custom-select-disabled not-allowed" type="text" placeholder="Example text field" disabled >
      <option disabled selected>Favourite Color?</option>
      <option class="options">Pink</option>
      <option class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
      </select>
    </div>

</div>
```


<h3>Search Box</h3>
<p>[Needs desciption...]</p>

```js

<div class="row">

  <div class="col mt-1">

	<form>

    <div class="input-group-prepend">
      <i class="iconSearch fa-lg"></i>
    </div>

     <input type="text" name="focus" required class="searchBox form-control w-75" placeholder="Search for Users, Clients, or Agents . . ." />
     <b-button onclick="this.blur();" variant="none" class="searchClose cursorDefault text-warning" type="reset">
       <i class="iconClose iconHover"></i>
     </b-button>

	</form>

  </div>

</div>
```

<h3>Text Field</h3>
<p>[Needs desciption...]</p>

```js

<div class="row">

  <div class="col mt-1" data-trigger="focus" data-toggle="tooltip" data-placement="right" title="Text Field">
    <input class="form-control border-mediumdark rounded-0 mb-1" type="text" placeholder="Text Field" />
  </div>
  <div class="col mt-1">
    <input class="form-control border-medium rounded-0 placeholder-dim not-allowed " type="text" placeholder="Disabled Text Field" disabled />
  </div>

</div>
```

<h3>Text Field - Area</h3>
<p>[Needs desciption...]</p>

```js
<div class="row">

  <div class="col mt-1" data-trigger="focus" data-toggle="tooltip" data-placement="right" title="Text Field - Area">
    <textarea class="form-control border-mediumdark rounded-0" type="text" placeholder="Text Field - Area" rows="3" >
    </textarea>
  </div>

    <div class="col mt-1">
      <textarea class="form-control border-medium rounded-0 placeholder-dim not-allowed" type="text" placeholder="Disabled Text Field - Area" rows="3" disabled >
      </textarea>
    </div>

</div>
```

<h3>Text Field - Editor
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>
<span class="text-info">This feature is in development and needs confirmation on use case.</span>
</p>

```js
<div class="col-6">

  <div id="editor" class="editor mt-1 border-mediumdark rounded-0">

  </div>

</div>
```

<h3>Toggle</h3>
<p>[Needs desciption...]</p>

```js
var toolbarOptions = ['bold', 'italic', 'underline', 'code-block', { 'size': ['small', false, 'large', 'huge'] }];
var quill = new Quill('#editor', {
  modules: { toolbar: toolbarOptions },
  theme: 'snow'
});

$(function () {
  $('#customSwitch4').prop('checked', true)
});

<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="m-3 d-inline custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="customSwitch3" />
    <label class="custom-control-label pointer" for="customSwitch3"></label>
  </div>
  <div class="m-3 d-inline custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="customSwitch4"/>
    <label class="custom-control-label pointer" for="customSwitch4"></label>
  </div>
</div>
```

</docs>
