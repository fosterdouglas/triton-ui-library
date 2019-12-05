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
        <li class="alertListItem">- Fix tooltip for "Copied" (should auto close)</li>
      </ul>
  </b-alert>

</div>
```

<h3>Add User</h3>
<p>For actions that refer to adding a single user to something.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconAddSingle iconHover text-dark"></i>
    <i class="iconAddSingle iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Arrow</h3>
<p>Used primarily on buttons to indicate forward progression through the UI. Down, Left, and Up variants are seldom used.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconArrow"></i>
    <i class="iconArrow text-dark fa-rotate-90"></i>
    <i class="iconArrow text-dark fa-rotate-180"></i>
    <i class="iconArrow text-dark fa-rotate-270"></i>
  </div>
</template>
```

<h3>Calendar</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconCalendar text-dark iconHover"></i>
    <i class="iconCalendar text-dark iconHover fas"></i>
  </div>
</template>
```

<h3>Chevron</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconChevron text-dark "></i>
    <i class="iconChevron text-dark fa-rotate-90"></i>
    <i class="iconChevron text-dark fa-rotate-180"></i>
    <i class="iconChevron text-dark fa-rotate-270"></i>
  </div>
</template>
```

<h3>Close</h3>
<p>An icon used to close windows, modals, alerts, and dialogue boxes.</p>


```js
<template>
  <div class="styleguidistOnlyStyles">
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
  <div class="styleguidistOnlyStyles">
    <i class="iconConfirm iconHover text-confirm"></i>
    <i class="iconConfirm iconHover text-confirm fas"></i>
  </div>
</template>
```

<h3>Copy
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>A function to copy the source text to the user's clipboard.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i id="copied" class="iconCopy iconHover"></i>
    <i class="iconCopy iconHover text-dark fas"></i>
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
  <div class="styleguidistOnlyStyles">
    <i class="iconDash text-dark"></i>
  </div>
</template>
```

<h3>Download</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconDownload iconHover text-dark"></i>
    <i class="iconDownload iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Edit</h3>
<p>This is used to edit an existing entry, user, or group.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconEdit iconHover text-dark"></i>
    <i class="iconEdit iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Edited</h3>
<p>Non-interactive, this icon denotes that an item has been edited and the change has not yet been saved.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconEdited iconHover text-secondary"></i>
    <i class="iconEdited iconHover text-secondary fas"></i>
  </div>
</template>
```

<h3>Exclamation</h3>
<p>Non-interactive, an icon used to denote incorrect input or an error.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconExclamation text-warning"></i>
    <i class="iconExclamation text-secondary"></i>
  </div>
</template>
```

<h3>Folder (Add)</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconFolderAdd iconHover text-dark"></i>
    <i class="iconFolderAdd iconHover text-dark fas"></i>
  </div>
</template>
```


<h3>Folder (Closed)</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconFolderClosed iconHover text-dark"></i>
    <i class="iconFolderClosed iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Folder (Open)</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconFolderOpen iconHover text-dark"></i>
    <i class="iconFolderOpen iconHover text-dark fas"></i>
  </div>
</template>
```


<h3>Folder (Remove)</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconFolderRemove iconHover text-dark"></i>
    <i class="iconFolderRemove iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Grabbable</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconGrab text-dark"></i>
  </div>
</template>
```

<h3>Inherited</h3>
<p>Specialized icon for indicating a given item is currently inheriting properties from something else. Hover over it to see from where it is inherited. <span class="text-info"> ~Not a function the Triton platform yet supports~</span></p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconInherited iconHover text-mediumdark"></i>
    <i class="iconInherited iconHover text-mediumdark fas"></i>
  </div>
</template>
```

<h3>Input Select</h3>
<p>A custom input select icon, used for drop down selection boxes.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconInputSelect iconHover text-dark"></i>
    <i class="iconInputSelect iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Previous</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconPrevious iconHover text-dark"></i>
    <i class="iconPrevious iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Question</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconQuestion iconHover text-dark"></i>
    <i class="iconQuestion iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Remove</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconRemove iconHover text-warning"></i>
    <i class="iconRemove iconHover text-warning fas"></i>
  </div>
</template>
```

<h3>Save</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconSave iconHover text-dark"></i>
    <i class="iconSave iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Search</h3>
<p>Non-interactive, an icon used to mark search boxes</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconSearch text-dark"></i>
  </div>
</template>
```

<h3>Settings</h3>
<p>An icon to indicate settings of a particular element.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconSettings iconHover text-dark"></i>
    <i class="iconSettings iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Shadow</h3>
<p>Click this icon to "shadow" the relevant user.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconShadow iconHover text-dark"></i>
    <i class="iconShadow iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Spinner</h3>
<p>Animated icons used for representing a loading screen or item.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i>
      <b-spinner small class="btnIconLeft text-dark" type="grow" label="Spinning"></b-spinner>
    </i>
    <i>
      <b-spinner small class="btnIconLeft text-dark" label="Spinning"></b-spinner>
    </i>
  </div>
</template>
```

<h3>Trade</h3>
<p>...</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconTrade iconHover text-dark"></i>
    <i class="iconTrade iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>User</h3>
<p>An icon used for functions related to a user that aren't covered by other icons.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconUser iconHover text-dark"></i>
    <i class="iconUser iconHover text-dark fas"></i>
  </div>
</template>
```


<p><small class="text-mediumdark float-right mb-4">Page updated: November 4, 2019</small></p>
</docs>
