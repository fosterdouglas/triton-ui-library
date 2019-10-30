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
        <b-li class="alertListItem">- Change icon for "Edit"</b-li>
        <b-li class="alertListItem">- Add missing icons</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Add - Single</h3>
<p>For actions that refer to adding a single user to something.</p>

```js
<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 icon-hover fal fa-lg fa-user-cog text-dark align-middle pointer"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 icon-hover fas fa-lg fa-user-cog text-dark align-middle pointer"></i>
  </div>
</div>
```

<h3>Add - Multiple</h3>
<p>For actions that refer to adding a group to something.</p>

```js
<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 icon-hover fal fa-lg fa-users-cog text-dark align-middle pointer"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 icon-hover fas fa-lg fa-users-cog text-dark align-middle pointer"></i>
  </div>
</div>
```

<h3>Close</h3>
<p>An icon used to close windows, modals, alerts, and dialogue boxes.</p>

```js
<div>
  <div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
    <div class="d-inline">
      <i class="p-2 icon-hover fal fa-lg fa-window-close text-dark align-middle pointer"></i>
    </div>
    <div class="d-inline">
      <i class="p-2 icon-hover fas fa-lg fa-window-close text-dark align-middle pointer"></i>
    </div>
  </div>

  <div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
    <div class="d-inline">
      <i class="p-2 icon-hover fal fa-lg fa-window-close text-success align-middle pointer"></i>
    </div>
    <div class="d-inline">
      <i class="p-2 icon-hover fas fa-lg fa-window-close text-success align-middle pointer"></i>
    </div>
  </div>

  <div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
    <div class="d-inline">
      <i class="p-2 icon-hover fal fa-lg fa-window-close text-info align-middle pointer"></i>
    </div>
    <div class="d-inline">
      <i class="p-2 icon-hover fas fa-lg fa-window-close text-info align-middle pointer"></i>
    </div>
  </div>

  <div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
    <div class="d-inline">
      <i class="p-2 icon-hover fal fa-lg fa-window-close text-warning align-middle pointer"></i>
    </div>
    <div class="d-inline">
      <i class="p-2 icon-hover fas fa-lg fa-window-close text-warning align-middle pointer"></i>
    </div>
  </div>

</div>
```

<h3>Confirm</h3>
<p>Non-interactive, this icon is used to denote correct input or confirmation of something.</p>

```js
<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 far fa-lg fa-check text-success bg-white align-middle"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 far fa-lg fa-check text-success bg-white align-middle"></i>
  </div>
</div>
```

<h3>Copy</h3>
<p>A function to copy the related text to the user's clipboard.</p>

```js
$(function () {
  $('#copied-2').tooltip(),

  $('#copied-2').on('shown.bs.tooltip', function () {
    setTimeout(function(){
    $('#copied-2').tooltip('hide')
  },800);

  })

});

<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->

  <div id="copied-2" type="button" class="d-inline" data-toggle="tooltip-1" data-trigger="click" data-delay='{"show":250, "hide":0}' title="Copied">
    <i class="p-2 icon-hover fal fa-lg fa-clone text-dark align-middle pointer"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 icon-hover fas fa-lg fa-clone text-dark align-middle pointer"></i>
  </div>
</div>
```


<h3>Delete</h3>
<p>Distinct in size and use from the Close icon, this functions to remove something from a list, delete an attached file, or otherwise permanently delete something.</p>

```js
<div class="col justify-content-start ml-n3"> <!-- classes used for library display only -->
  <div class="d-inline badge pointer">
    <i class="p-2 icon-hover fa-lg fal fa-window-close text-warning align-middle pointer"></i>
  </div>
  <div class="d-inline badge pointer">
    <i class="p-2 icon-hover fa-lg fas fa-window-close text-warning align-middle pointer"></i>
  </div>
</div>
```

<h3>Edit</h3>
<p>This is used to edit an existing entry, user, or group.</p>

```js
<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 icon-hover fal fa-lg fa-money-check-edit text-dark align-middle pointer"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 icon-hover fas fa-lg fa-money-check-edit text-dark align-middle pointer"></i>
  </div>
</div>
```

<h3>Edited</h3>
<p>Non-interactive, this icon denotes that an item has been edited and the change has not yet been saved.</p>

```js
<div class="col pl-1 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 icon-hover fas fa fa-pencil-alt text-secondary align-middle"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 icon-hover fas fa fa-pencil-alt text-secondary align-middle"></i>
  </div>
</div>
```

<h3>Information</h3>
<p>Click the info help icon to open a temporary popup with additional relevant information.</p>

```js
$(function () {
  $('[data-toggle="popover"]').popover(),

  $('#popover1').on('shown.bs.popover', function () {
    $('#popover1 i').addClass('text-dark'),
    $('#popover1 i').css('font-weight', '900')
  })

  $('#popover1').on('hidden.bs.popover', function () {
    $('#popover1 i').removeClass('text-dark'),
    $('#popover1 i').css('font-weight', '300')
  })

});

<div class="col pl-1 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <a tabindex="0" id="popover1" class="info pointer text-medium" data-toggle="popover" data-trigger="focus" title="Helpful Information" data-placement="auto" data-content="Detailed information can be found here, providing context expanding on the topic or element this icon is adjacent to.">
      <i class="p-2 fal fa-lg fa-info-circle align-middle"></i>
    </a>
  </div>
</div>
```

<h3>Input Select</h3>
<p>A custom input select icon, used for drop down selection boxes.</p>

```js
<div class="col pl-1 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 fal fa-lg fa-sort text-dark align-middle pointer icon-hover"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 fas fa-lg fa-sort text-dark align-middle pointer icon-hover"></i>
  </div>
</div>
```

<h3>Search</h3>
<p>Non-interactive, an icon used to mark search boxes</p>

```js
<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 fal fa-lg fa-search text-dark align-middle"></i>
  </div>
    <div class="d-inline">
      <i class="p-2 fal fa-lg fa-search text-dark align-middle"></i>
    </div>
</div>
```

<h3>Settings</h3>
<p>An icon to indicate settings of a particular element.</p>

```js
<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 fal fa-lg fa-cog text-dark align-middle pointer icon-hover"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 fas fa-lg fa-cog text-dark align-middle pointer icon-hover"></i>
  </div>
</div>
```

<h3>Shadow</h3>
<p>Click this icon to "shadow" the relevant user.</p>

```js
<div class="col pl-0 justify-content-start"> <!-- classes used for library display only -->
  <div class="d-inline">
    <i class="p-2 fal fa-lg fa-user-secret text-dark align-middle pointer icon-hover"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 fas fa-lg fa-user-secret text-dark align-middle pointer icon-hover"></i>
  </div>
</div>
```

<h3>User</h3>
<p>An icon used for functions related to a user that aren't covered by other icons.</p>

```js
<div class="col pl-0 justify-content-start">
  <div class="d-inline">
    <i class="p-2 fal fa-lg fa-user text-dark align-middle pointer icon-hover"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 fas fa-lg fa-user text-dark align-middle pointer icon-hover"></i>
  </div>
</div>
```

<h3>Warning</h3>
<p>Non-interactive, an icon used to denote incorrect input or an error.</p>

```js
<div class="col pl-0 justify-content-start">
  <div class="d-inline">
    <i class="p-2 fas fa-lg fa-exclamation-square text-warning bg-white align-middle"></i>
  </div>
  <div class="d-inline">
    <i class="p-2 fas fa-lg fa-exclamation-square text-warning bg-white align-middle"></i>
  </div>
</div>
```

</docs>
