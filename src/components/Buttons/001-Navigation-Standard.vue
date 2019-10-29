<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- Rename uses of "Nav" to "App Nav"</b-li>
        <b-li class="alertListItem">- Rename uses of "Function" to "App Function"</b-li>
        <b-li class="alertListItem">- Adjust CSS of NavButtonIcon / FuncButtonIcon to be reusable/dynamic</b-li>
        <b-li class="alertListItem">- Clean/combine CSS classes on feedback text</b-li>
        <b-li class="alertListItem">- Swap out loading animation element to use Bootstrap-Vue</b-li>
        <b-li class="alertListItem">- Address outstanding WCAG accessibility items</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Navigation - Standard</h3>
<p>The primary button used for application navigation.

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      >
      {{ NavButtonCaption }}
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      >
      {{ NavButtonCaption }}
      <i class="far fa-arrow-right btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-primaryfade"
      class="btnNavigation btnStandardPressed"
      >
      {{ NavButtonCaption }}
    </b-button>

    <b-button
      :pressed="null"
      variant="outline-primaryfade"
      class="btnNavigation btnDisabled cursorDisabled"
      disabled
      >
      {{ NavButtonCaption }}
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
