<docs>

<h3>Confirm</h3>
<p>A special-case colored navigation button, used when it's crucial to indicate the action will submit or activate something important.
</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirm"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">BUTTON SAMPLE</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirm"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">BUTTON WITH ICON</div>
      <i class="iconConfirm btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirmPressed"
      onclick="this.blur();"
      >
      <b-spinner small type="grow" label="Spinning" class="btnIconLeft"></b-spinner>
      <i></i>
      <div class="btnText">BUTTON LOADING</div>
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
