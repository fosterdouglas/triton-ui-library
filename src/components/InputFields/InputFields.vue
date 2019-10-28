<docs>

<h3>Checkbox</h3>

```js
$(function () {
  $('#customCheck6').prop('checked', true)
});

<div class="justify-content-start mt-1"> <!-- classes used for library display only -->
  <div class="d-inline custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck3" />
    <label class="p-2 custom-control-label vert-align pointer" for="customCheck3"></label>
  </div>
  <div class="d-inline custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck6" />
    <label class="p-2 custom-control-label vert-align pointer" for="customCheck6"></label>
  </div>
</div>
```

<h3>Filtering</h3>

```js

<div class="row">

  <div class="col mt-1">


    <small id="filtering" class="form-text">

      <div class="form-check d-inline custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="clientsCheck" />
        <label class="custom-control-label pointer item-text text-dark mr-3 pl-1 p1-5 active" for="clientsCheck">
          Clients
        </label>
      </div>

      <div class="form-check d-inline custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" value="" id="agentsCheck" />
        <label class="custom-control-label pointer item-text text-dark mr-3 pl-1 p1-5" for="agentsCheck">
          Agents
        </label>
      </div>

      <div class="form-check d-inline custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" value="checked" id="usersCheck" />
        <label class="custom-control-label pointer item-text text-dark mr-3 pl-1 p1-5" for="usersCheck">
          Users
        </label>
      </div>

      <div class="form-check d-inline custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" value="" id="de-userCheck" />
        <label class="custom-control-label pointer item-text text-dark mr-3 pl-1 p1-5" for="de-userCheck">
          Deactivated Users
        </label>
      </div>

    </small>



  </div>

</div>
```

<h3>Multi Select</h3>

```js

<div class="row">

  <div class="col mt-1" data-trigger="focus" data-toggle="tooltip" data-placement="right" title="Favourite Color?">
    <select multiple class="form-control border-mediumdark rounded-0 pointer" type="text" placeholder="Favourite Color?" >
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </select>
  </div>

  <div class="col mt-1">
      <select multiple class="form-control border-medium rounded-0 not-allowed" type="text" placeholder="Example text field" disabled>
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
      </select>
  </div>

</div>
```

<h3>Multi Select - Drop Down
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>

```js
//ENABLE ALL TOOLTIPS FOR PAGE
$(function () {
  $('[data-toggle="tooltip"]').tooltip({delay: { show: 0, hide: 0 }});
});
//

<div class="row">

  <div class="col mt-1" title="Favourite Color?">
    <select class="form-control border-mediumdark rounded-0 custom-select custom-select-hover pointer" type="text" placeholder="Favourite Color" >
      <option disabled selected>Favourite Color?</option>
      <option class="options">Pink</option>
      <option class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </select>
  </div>

    <div class="col mt-1">
      <select class="form-control border-medium rounded-0 custom-select custom-select-disabled not-allowed" type="text" placeholder="Example text field" disabled >
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

```js

<div class="row">

  <div class="col mt-1">

	<form>
  <div class="input-group-prepend">
    <span class="input-group-text text-dark ml-1"><i class="far fa-lg fa-search"></i></span>
  </div>

   <input type="text" name="focus" required class="search-box form-control border-dark d-inline w-75 rounded-lg shadow-sm mr-2 align-middle pl-5" placeholder="Search for Users, Clients, or Agents . . ." />

		<button class="badge pointer close-icon ml-n5" type="reset"><i class="fal fa-lg fa-window-close text-warning icon-hover"></i></button>

	</form>

  </div>

</div>
```

<h3>Text Field</h3>

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

<h3>Text Field - Editor</h3>

```js
<div class="col-6">

  <div id="editor" class="editor mt-1 border-mediumdark rounded-0">

  </div>

</div>
```

<h3>Toggle</h3>

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
