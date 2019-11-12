<docs>

<h3>Confirm</h3>
<p>A special-case colored navigation button, used when it's crucial to indicate the action will submit or activate something important.

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
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirm"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i class="iconConfirm btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirmPressed"
      onclick="this.blur();"
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
