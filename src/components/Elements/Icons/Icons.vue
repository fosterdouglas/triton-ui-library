<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75 mb-0">The icon set of any design system is an important aspect of creating a useable and efficient experience. Triton's uses a moderately low amount of different icons, to keep the screen free of too much clutter, but still provide context when its most effective. To prevent confusion on how to implement these, each icon below includes a use-case description.</p>
<br/>
</div>
```

<h3>Account</h3>
<p>A custom icon used specifically to indicate the user's own account. It is distinct from the User icon which is used to indicate other users.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconAccount iconHover text-dark"></i>
    <i class="iconAccount iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>API</h3>
<p>For buttons and functions that indicate using or editing an API, or for reference on something that is affected by an API.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconAPI iconHover text-dark"></i>
    <i class="iconAPI iconHover text-dark fas"></i>
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
<p>Idicates functions related to days, months, years, and general dates or times.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconCalendar text-dark iconHover"></i>
    <i class="iconCalendar text-dark iconHover fas"></i>
  </div>
</template>
```

<h3>Circle</h3>
<p>Multiples of this icon can be used in succession to create a "progress" indicator, using filled circles to represent current or finished steps. See <a href="../../#/Navigation/Navs">Navs</a> for an example.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconCircle text-dark"></i>
    <i class="iconCircle text-dark fas"></i>
  </div>
</template>
```

<h3>Close / Clear</h3>
<p>An icon used to close alerts and dialogue boxes, or to clear inputted text.</p>


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

<h3>Collapse/Expand</h3>
<p>Precedes titles in various situations to indicate that there is additional information to collapse/expand.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconCollapseExpand text-dark"></i>
    <i class="iconCollapseExpand text-dark fa-rotate-90"></i>
  </div>
</template>
```

<h3>Collapse/Expand All</h3>
<p>A specific icon for the function of expanding or collapsing an entire set of titled groups. <span class="text-info">~This may be removed or updated in the future~</span>.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconSort iconHover text-dark"></i>
    <i class="iconSort iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Confirm</h3>
<p>Used to indicate correct input, the confirmation of something, or as a result of a successful action.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconConfirm text-confirm"></i>
  </div>
</template>
```

<h3>Connected</h3>
<p>To show something is connected or attached to something else.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconConnected iconHover text-dark"></i>
    <i class="iconConnected iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Copy
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>An icon and an indication on click that the source text has been copied to the user's clipboard. <span class="text-info"> ~Function needs to be updated to show tooltip for slightly longer~</span></p>

```js
<template>
  <div class="styleguidistOnlyStyles">

    <i class="iconCopy iconHover text-dark fas"></i>
    <i id="copied" class="iconCopy iconHover"></i>
    <b-tooltip data-toggle="tooltip" target="copied" title="Copied" triggers="click" delay="100" @shown="close()"></b-tooltip>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      //this needs a 1 second delay
      this.$root.$emit('bv::hide::tooltip', 'copied');
    }
  }
}
</script>
```

<h3>Crown</h3>
<p>Used only to indicate that something is an exclusive function of or display for the Super Admin user type.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconCrown iconHover text-secondary"></i>
    <i class="iconCrown iconHover text-secondary fas"></i>
  </div>
</template>
```

<h3>Dash</h3>
<p>Represents a generic space or a lack of some other icon. This shouldn't be used often.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconDash text-dark"></i>
  </div>
</template>
```

<h3>Download</h3>
<p>This icon indicates that an image or file can be downloaded by clicking it or the icon.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconDownload iconHover text-dark"></i>
    <i class="iconDownload iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Edit (Open)</h3>
<p>This is used to show that an existing item is editable. Pressing it opens in a <a href="../../#/Overlays/Lightbox">lightbox</a>, allowing significant edits to the item's data and parameters.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconEdit iconHover text-dark"></i>
    <i class="iconEdit iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Edit (Inline)</h3>
<p>Inline edits are made directly to an item, and this icon distinguishes those from the edits that open a new view. It can also be used in a different color to indicate that something was recently edited and needs to be saved.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconEdited iconHover text-dark"></i>
    <i class="iconEdited iconHover text-dark fas"></i>
    <i class="iconEdited iconHover text-secondary fas"></i>
  </div>
</template>
```

<h3>Ellipsis</h3>
<p>The ellipsis be used to indicate an additional options menu. This should only be used to hide groups of options that are used very seldomly.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconEllipsis iconHover text-dark"></i>
  </div>
</template>
```

<h3>Exclamation</h3>
<p>Non-interactive, the exclamation icon is used to indicate incorrect input or an error, or for alert.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconExclamation text-warning"></i>
    <i class="iconExclamation text-secondary"></i>
  </div>
</template>
```

<h3>Filter</h3>
<p>An icon representing the Filtering function. Clicking it will generally open a dropdown of filtering options. See <a href="../../#/Inputs/General">general</a> for an example.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconFilter iconHover text-dark"></i>
    <i class="iconFilter iconHover text-dark fas"></i>
  </div>
</template>
```


<h3>Folder (Add, Remove, Closed, Open)</h3>
<p>Various types of folder icons, used for functions related to creating, removing, and displaying folders.</p>

```js
<template>
  <div>
    <div class="styleguidistOnlyStyles">
      <i class="iconFolderAdd iconHover text-dark"></i>
      <i class="iconFolderAdd iconHover text-dark fas"></i>
    </div>

    <div class="styleguidistOnlyStyles">
      <i class="iconFolderRemove iconHover text-dark"></i>
      <i class="iconFolderRemove iconHover text-dark fas"></i>
    </div>

    <div class="styleguidistOnlyStyles">
      <i class="iconFolderClosed iconHover text-dark"></i>
      <i class="iconFolderClosed iconHover text-dark fas"></i>
    </div>

    <div class="styleguidistOnlyStyles">
      <i class="iconFolderOpen iconHover text-dark"></i>
      <i class="iconFolderOpen iconHover text-dark fas"></i>
    </div>

  </div>
</template>
```

<h3>Grabbable</h3>
<p>An icon to indicate interactivity, for row items that can be grabbed and rearranged by the user.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconGrab text-dark"></i>
  </div>
</template>
```

<h3>Inherited</h3>
<p>An icon to show something is currently inheriting properties from something else. It could be used in the future as a hover-over function to see from where something is inherited.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconInherited iconHover text-dark"></i>
    <i class="iconInherited iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Package</h3>
<p>A symbol that can be used for anything related to a package in the system. The icon doesn't need to be applied in every case of a package's name being displayed, but it's particularly useful to distinguish packages from other types of items on complex pages, or to remind the user that a certain action is tied to a certain package.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconPackage iconHover text-dark"></i>
    <i class="iconPackage iconHover text-dark fas"></i>
  </div>
</template>
```


<h3>Plus</h3>
<p>A commonly-used icon for functions that create something new, indicating an "add" action.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconPlus iconHover text-dark"></i>
    <i class="iconPlus iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Previous</h3>
<p>This icon could be used in situations where a user can return to a specific previous screen. <span class="text-info"> ~Not currently being used in the system anywhere, may be removed in the future~</span></p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconPrevious iconHover text-dark"></i>
    <i class="iconPrevious iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Question</h3>
<p>The question mark should be used exclusively for tooltips and explanations about the functions of the application. It's primarily used with the <a href="../../#/Overlays/Popovers">Info Box</a>.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconQuestion iconHover text-dark"></i>
    <i class="iconQuestion iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Remove</h3>
<p>An icon that typically indicates a destructive action, like removing some item completely or permanently deleting something.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconRemove iconHover text-warning"></i>
    <i class="iconRemove iconHover text-warning fas"></i>
  </div>
</template>
```

<h3>Save</h3>
<p>Used when a function is saving data that the user has updated, added, or removed. For lightboxes, it would replace an "Add" icon/text when the user is re-opening something to edit.</p>

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
<p>An icon to indicate settings of a particular element. It may often open a lightbox containing options that aren't immediately displayed on the page.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconSettings iconHover text-dark"></i>
    <i class="iconSettings iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Shadow</h3>
<p>For indicating the specific function of "shadowing" a particular user in the system.</p>

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
      <b-spinner small class="text-dark" type="grow" label="Spinning"></b-spinner>
    </i>
    <i>
      <b-spinner small class="text-dark" label="Spinning"></b-spinner>
    </i>
  </div>
</template>
```

<h3>User</h3>
<p>An icon to represent the concept of a generic user in the application, but not to be used to represent the current user.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconUser iconHover text-dark"></i>
    <i class="iconUser iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>User (Add)</h3>
<p>For actions that refer to adding a single user to something or creating a new user.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconUserAdd iconHover text-dark"></i>
    <i class="iconUserAdd iconHover text-dark fas"></i>
  </div>
</template>
```

<h3>Visible / Invisible</h3>
<p>A specific icon for indicating the on/off state of a data filter. It gives a slightly more obvious context than a traditional toggle otherwise would.</p>

```js
<template>
  <div class="styleguidistOnlyStyles">
    <i class="iconVisible iconHover text-dark"></i>
    <i class="iconInvisible iconHover text-dark"></i>
  </div>
</template>
```

</docs>
