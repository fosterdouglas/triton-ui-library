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
        <b-li class="alertListItem">- Deprecate delete icon and replace instances with Remove icon</b-li>
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

<h3>Arrow</h3>
<p>...</p>

```js
<template>
  <div>
    <i class="iconArrow"></i>
    <i class="iconArrow fa-rotate-90"></i>
    <i class="iconArrow fa-rotate-180"></i>
    <i class="iconArrow fa-rotate-270"></i>
  </div>
</template>
```

<h3>Chevron</h3>
<p>...</p>

```js
<template>
  <div>
    <i class="iconChevron"></i>
    <i class="iconChevron fa-rotate-90"></i>
    <i class="iconChevron fa-rotate-180"></i>
    <i class="iconChevron fa-rotate-270"></i>
  </div>
</template>
```

<h3>Close
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>An icon used to close windows, modals, alerts, and dialogue boxes.
<br/><span class="text-info">Fix for proper "active" state</span>
</p>


```js
<template>
  <div>
    <i class="iconClose close text-dark" aria-label="Close"></i>
    <i class="iconClose close text-dark far" aria-label="Close"></i>
    <br/>
    <i class="iconClose close text-confirm" aria-label="Close"></i>
    <i class="iconClose close text-confirm far" aria-label="Close"></i>
    <br/>
    <i class="iconClose close text-warning" aria-label="Close"></i>
    <i class="iconClose close text-warning far" aria-label="Close"></i>
    <br/>
    <i class="iconClose close text-info" aria-label="Close"></i>
    <i class="iconClose close text-info far" aria-label="Close"></i>
  </div>
</template>
```

<h3>Confirm</h3>
<p>Non-interactive, this icon is used to denote correct input or confirmation of something.</p>

```js
<template>
  <div>
    <i class="iconConfirm iconHover text-confirm"></i>
    <i class="iconConfirm iconHover fas text-confirm"></i>
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
<p>Distinct in its smaller size and use from the Close icon, this functions to remove something from a list, delete an attached file, or otherwise permanently delete something.
<br/><span class="text-info">Deprecate this and replace all instances with the "Remove" icon.</span>
</p>

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
  </div>
</template>
```

<h3>File</h3>
<p>Used to denote a system file that is or will be uploaded to the application.</p>

```js
<template>
  <div>
    <i class="iconFile iconHover"></i>
    <i class="iconFile iconHover fas"></i>
  </div>
</template>
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

<h3>Question</h3>
<p>...</p>

```js
<template>
  <div>
    <i class="iconQuestion iconHover"></i>
    <i class="iconQuestion iconHover fas"></i>
  </div>
</template>
```

<h3>Remove</h3>
<p>...</p>

```js
<template>
  <div>
    <i class="iconRemove iconHover text-warning"></i>
    <i class="iconRemove iconHover fas text-warning"></i>
  </div>
</template>
```

<h3>Search</h3>
<p>Non-interactive, an icon used to mark search boxes</p>

```js
<template>
  <div>
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

<h3>Spinner</h3>
<p>Animated icons used for representing a loading screen or item.</p>

```js
<template>
  <div>
    <b-spinner small class="btnIconLeft" type="grow" label="Spinning"></b-spinner>
    <b-spinner small class="btnIconLeft" label="Spinning"></b-spinner>
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
  </div>
</template>
```


<p><small class="text-mediumdark float-right mb-4">Page updated: November 4, 2019</small></p>
</docs>
