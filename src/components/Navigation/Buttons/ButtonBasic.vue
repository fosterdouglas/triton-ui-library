<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75">Buttons are used as a means to get around the application.
</p>
<br/>
</div>
```

<h3>Standard</h3>
<p>The primary button used for application navigation.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      >
      <div class="btnText">BUTTON SAMPLE</div>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      >
      <div class="btnText">BUTTON WITH ICON</div>
      <i class="iconArrow btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-primaryfade"
      class="btnNavigation btnStandardPressed"
      onclick="this.blur();"
      >
      <i>
        <b-spinner small type="grow" label="Spinning" class="btnIconLeft text-white"></b-spinner>
      </i>
      <div class="btnText">BUTTON LOADING</div>
    </b-button>

    <br/>

    <b-button
      :pressed="null"
      variant="outline-primaryfade"
      class="btnNavigation btnDisabled cursorDisabled"
      onclick="this.blur();"
      disabled
      >
      <div class="btnText">BUTTON DISABLED</div>
    </b-button>

    <b-button
      :pressed="null"
      variant="outline-primaryfade"
      class="btnNavigation btnDisabled cursorDisabled"
      onclick="this.blur();"
      disabled
      >
      <i>
        <b-spinner small type="grow" label="Spinning" class="btnIconLeft text-mediumdark"></b-spinner>
      </i>
      <div class="btnText">BUTTON LOADING DISABLED</div>
    </b-button>

  </div>
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
