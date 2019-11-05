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
        <b-li class="alertListItem">- Make tooltip for "Copied" auto close</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Add - Single</h3>
<p>For actions that refer to adding a single user to something.</p>

```js
<template>
  <div>
    <i class="iconAddSingle iconHover"></i>
    <i class="iconAddSingle iconHover fas"></i>
  </div>
</template>
```

<h3>Add - Multiple</h3>
<p>For actions that refer to adding a group to something.</p>

```js
<template>
  <div>
    <i class="iconAddMultiple iconHover"></i>
    <i class="iconAddMultiple iconHover fas"></i>
  </div>
</template>
```

<h3>Close</h3>
<p>An icon used to close windows, modals, alerts, and dialogue boxes.</p>

```js
<template>
  <div>
    <i class="iconClose iconHover text-dark"></i>
    <i class="iconClose iconHover text-dark fas"></i>
    <br/>
    <i class="iconClose iconHover text-confirm"></i>
    <i class="iconClose iconHover text-confirm fas"></i>
    <br/>
    <i class="iconClose iconHover text-warning"></i>
    <i class="iconClose iconHover text-warning fas"></i>
    <br/>
    <i class="iconClose iconHover text-info"></i>
    <i class="iconClose iconHover text-info fas"></i>
  </div>
</template>
```

<h3>Confirm</h3>
<p>Non-interactive, this icon is used to denote correct input or confirmation of something.</p>

```js
<template>
  <div>
    <i class="iconConfirm"></i>
    <i class="iconConfirm"></i>
  </div>
</template>
```

<h3>Copy
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>A function to copy the source text to the user's clipboard.</p>

```js
<template>
  <div>
    <i id="copied" class="iconCopy iconHover"></i>
    <i class="iconCopy iconHover fas"></i>
    <b-tooltip target="copied" title="Copied" triggers="click"></b-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
```

<h3>Dash</h3>
<p>Used to represent a generic space or a lack of some other icon.</p>

```js
<template>
  <div>
    <i class="iconDash"></i>
  </div>
</template>
```


<h3>Delete</h3>
<p>Distinct in its smaller size and use from the Close icon, this functions to remove something from a list, delete an attached file, or otherwise permanently delete something.</p>

```js
<template>
  <div>
    <i class="iconDelete iconHover"></i>
    <i class="iconDelete iconHover fas"></i>
  </div>
</template>
```

<h3>Edit</h3>
<p>This is used to edit an existing entry, user, or group.</p>

```js
<template>
  <div>
    <i class="iconEdit iconHover"></i>
    <i class="iconEdit iconHover fas"></i>
  </div>
</template>
```

<h3>Edited</h3>
<p>Non-interactive, this icon denotes that an item has been edited and the change has not yet been saved.</p>

```js
<template>
  <div>
    <i class="iconEdited"></i>
    <i class="iconEdited"></i>
  </div>
</template>
```

<h3>Information
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
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
<template>
  <div>
    <i class="iconInputSelect iconHover"></i>
    <i class="iconInputSelect iconHover fas"></i>
  </div>
</template>
```

<h3>Search</h3>
<p>Non-interactive, an icon used to mark search boxes</p>

```js
<template>
  <div>
    <i class="iconSearch"></i>
    <i class="iconSearch"></i>
  </div>
</template>
```

<h3>Settings</h3>
<p>An icon to indicate settings of a particular element.</p>

```js
<template>
  <div>
    <i class="iconSettings iconHover"></i>
    <i class="iconSettings iconHover fas"></i>
  </div>
</template>
```

<h3>Shadow</h3>
<p>Click this icon to "shadow" the relevant user.</p>

```js
<template>
  <div>
    <i class="iconShadow iconHover"></i>
    <i class="iconShadow iconHover fas"></i>
  </div>
</template>
```

<h3>User</h3>
<p>An icon used for functions related to a user that aren't covered by other icons.</p>

```js
<template>
  <div>
    <i class="iconUser iconHover"></i>
    <i class="iconUser iconHover fas"></i>
  </div>
</template>
```

<h3>Warning</h3>
<p>Non-interactive, an icon used to denote incorrect input or an error.</p>

```js
<template>
  <div>
    <i class="iconWarning"></i>
    <i class="iconWarning"></i>
  </div>
</template>
```


<p><small class="text-mediumdark float-right mb-4">Page updated: November 4, 2019</small></p>
</docs>
