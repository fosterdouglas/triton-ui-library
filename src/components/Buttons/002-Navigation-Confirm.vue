<docs>

<h3>Navigation - Confirm</h3>
<p>A special-case colored navigation button, used when it's crucial to indicate the action will submit or activate something important.

```js
<template>
  <div>
    
    <b-button
      :pressed="false"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirm"
      >
      {{ NavButtonCaption }}
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirm"
      >
      {{ NavButtonCaption }}
      <i class="far fa-check btnIconRight"></i></b-button>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-confirmfade"
      class="btnNavigation btnConfirmPressed"
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
