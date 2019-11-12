<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Rename uses of "Nav" to "App Nav"</li>
        <li class="alertListItem">- Rename uses of "Function" to "App Function"</li>
        <li class="alertListItem">- Adjust CSS of NavButtonIcon / FuncButtonIcon to be reusable/dynamic</li>
        <li class="alertListItem">- Clean/combine CSS classes on feedback text</li>
        <li class="alertListItem">- <del>Swap out loading animation element to use Bootstrap-Vue</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Address outstanding WCAG accessibility items</li>
        <li class="alertListItem">- <del>Add "this.blur();" to buttons</del> <i class="iconConfirm"></i></li>
      </ul>
  </b-alert>

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
