<docs>

<h3>Priority</h3>
<p></p>

```js
<template>
  <div>

    <b-button variant="outline-primaryfade"
    @click="showBottom = !showBottom"
    onclick="this.blur();"
    class="btnNavigation btnStandard">
      {{ showBottom ? 'Hide' : 'Show' }} Fixed bottom Alert
    </b-button>
    <b-alert
      v-model="showBottom"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="warning"
      dismissible
    >
      Fixed position (bottom) alert!
    </b-alert>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showBottom: false,
      showTop: false
    }
  }
}
</script>
```

</docs>
