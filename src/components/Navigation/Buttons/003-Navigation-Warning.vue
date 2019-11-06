<docs>

<h3>Navigation - Warning</h3>
<p>Generally, this variation should only be used to warn the user that the action will be permanent (as in deleting something), or that it will cancel an operation which will result in the loss of inputed data.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-warningfade"
      class="btnNavigation btnWarning"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-warningfade"
      class="btnNavigation btnWarning"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i class="iconRemove btnIcon btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-warningfade"
      class="btnNavigation btnWarningPressed"
      onclick="this.blur();"
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
