<docs>

<h3>Warning</h3>
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
      <div class="btnText">BUTTON SAMPLE</div>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-warningfade"
      class="btnNavigation btnWarning"
      onclick="this.blur();"
      >
      <div class="btnText">BUTTON WITH ICON</div>
      <i class="iconRemove btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-warningfade"
      class="btnNavigation btnWarningPressed"
      onclick="this.blur();"
      >
      <i>
        <b-spinner small type="grow" label="Spinning" class="btnIconLeft text-white"></b-spinner>
      </i>
      <div class="btnText">BUTTON LOADING</div>
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
