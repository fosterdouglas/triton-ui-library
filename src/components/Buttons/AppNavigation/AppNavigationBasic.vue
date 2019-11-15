<docs>

```jsx noeditor
<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- <del>Rename/clarify uses of "Function" and "Navigation"</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>Adjust CSS of NavButtonIcon / FuncButtonIcon to be reusable/dynamic</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Replace feedback text with a Toast</li>
        <li class="alertListItem">- <del>Swap out loading animation element to use Bootstrap-Vue</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>Address outstanding WCAG accessibility items</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>Add "this.blur();" to buttons</del> <i class="iconConfirm"></i></li>
      </ul>
  </b-alert>
<p class="ml-n3 w-75">App Navigation buttons are used as a means to get around the application.
  They typically "go somewhere" as opposed to the <a class="text-info" href="../../../#/Buttons/Functional">Functional</a> buttons which "do something," although that
  is a generalization for categorizing.
</p>
<br/>
</div>
```

<h3>Standard</h3>
<p>The primary button used for application navigation.

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i class="iconArrow btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-primaryfade"
      class="btnNavigation btnStandardPressed"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="null"
      variant="outline-primaryfade"
      class="btnNavigation btnDisabled cursorDisabled"
      onclick="this.blur();"
      disabled
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        NavButtonCaption: 'SAMPLE BUTTON'
      }
    }
  }
</script>
```
</docs>
