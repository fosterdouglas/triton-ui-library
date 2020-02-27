<docs>

<h3>Confirm</h3>
<p>A special-case colored navigation button, used when it's crucial to indicate the action will submit or activate something important.
</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="outline-confirmfade"
          class="btnNavigation btnConfirm"
          onclick="this.blur();"
          >
          <div class="btnText">BUTTON SAMPLE</div>
        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="outline-confirmfade"
          class="btnNavigation btnConfirm"
          onclick="this.blur();"
          >
          <div class="btnText">BUTTON WITH ICON</div>
          <i class="iconConfirm btnIconRight"></i>
        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="true"
          variant="outline-confirmfade"
          class="btnNavigation btnConfirmPressed"
          onclick="this.blur();"
          >
          <i>
            <b-spinner small type="grow" label="Spinning" class="btnIconLeft text-white"></b-spinner>
          </i>
          <div class="btnText">BUTTON LOADING</div>
        </b-button>
      </b-col>

    </b-row>

  </b-container>

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
