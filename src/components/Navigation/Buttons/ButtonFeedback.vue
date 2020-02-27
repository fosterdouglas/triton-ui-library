<docs>

<h3>Feedback</h3>
<p>A navigation button used when feedback should be given on the same page. Pressing the button calls a <a href="../../#/Overlays/Toasts">Toast</a>, which is useful to inform a user about the status of an important action, for example is a page saves correctly or not.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="outline-secondary"
          id="changesBtn"
          class="btnNavigation btnFeedback"
          onclick="this.blur();"
          @click="toastConfirm()"
          >
          <div class="btnText">{{ NavButtonCaption }}</div>
        </b-button>
      </b-col>

    </b-row>
  </b-container>
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
        }),
        this.$bvToast.toast('This item has been updated.', {
          variant: 'secondary',
          solid: true,
          autoHideDelay: 2500,
          noCloseButton: true,
          toaster: 'b-toaster-bottom-left'
        }),
        this.$bvToast.toast('Changes not saved. Please check errors.', {
          variant: 'warning',
          solid: true,
          autoHideDelay: 2500,
          noCloseButton: true,
          toaster: 'b-toaster-bottom-left'
        })
      }
    },
    data() {
      return {
        NavButtonCaption: 'SAVE CHANGES'
      }
    }
  }
</script>
```

</docs>
