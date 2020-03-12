<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75 mb-0">Buttons are used as a means to movet through the application. The larger buttons are used for navigating pages, while the smaller buttons generally do actions or functions. <b>Note:</b> A single click on any button should never be immediately destructive (or additive if the addition is data-sensitive), and should at minimum utilize a <a href="../../#Overlays/Popovers">Popover</a> for confirmation, or open a separate <a href="../../#Overlays/Lightbox">Lightbox</a> entirely.</p>
<br/>
</div>
```

<h3>Standard</h3>
<p>The primary button used for application navigation.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnNavigation btnStandard"
          onclick="this.blur();"
          >
          <div class="btnText">BUTTON SAMPLE</div>
        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnNavigation btnStandard"
          onclick="this.blur();"
          >
          <div class="btnText">BUTTON WITH ICON</div>
          <i class="iconArrow btnIconRight"></i>
        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="true"
          variant="outline-primaryfade"
          class="btnNavigation"
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
      }
    }
  }
</script>
```
</docs>
