<docs>

<h3>Auto-Dismiss</h3>
<p>Most commonly, the auto dissmissing toast is useful to make a clear and noticiable announcement
 in a consistent location on the page. It should always fire when a page's "save" button is used, if the button does not lead to a new page.</p>

```js
<template>
  <div>

    <b-button
      variant="outline-confirmfade"
      @click="toastConfirm()"
      onclick="this.blur();"
      class="btnNavigation btnConfirm"
      >Successful Save
    </b-button>

    <b-button
      variant="outline-warningfade"
      @click="toastWarning()"
      onclick="this.blur();"
      class="btnNavigation btnWarning"
      >Unsuccessful Save
    </b-button>

  </div>
</template>


<script>
  export default {
    methods: {
      toastConfirm() {
        this.$bvToast.toast('Successfully saved all changes.', {
          variant: 'success',
          solid: true,
          autoHideDelay: 2500,
          noCloseButton: true,
          toaster: 'b-toaster-bottom-left'
        })
      },
      toastWarning() {
        this.$bvToast.toast('Changes not saved. Please check errors.', {
          variant: 'warning',
          solid: true,
          autoHideDelay: 2500,
          noCloseButton: true,
          toaster: 'b-toaster-bottom-left'
        })
      }
    }
  }
</script>
```

</docs>
