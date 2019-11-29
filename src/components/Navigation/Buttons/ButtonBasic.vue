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
      <i></i>
      <div class="btnText">BUTTON SAMPLE</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">BUTTON WITH ICON</div>
      <i class="iconArrow btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-primaryfade"
      class="btnNavigation btnStandardPressed"
      onclick="this.blur();"
      >
      <b-spinner small type="grow" label="Spinning" class="btnIconLeft"></b-spinner>
      <i></i>
      <div class="btnText">BUTTON LOADING</div>
      <i></i>
    </b-button>

    <br/>

    <b-button
      :pressed="null"
      variant="outline-primaryfade"
      class="btnNavigation btnDisabled cursorDisabled"
      onclick="this.blur();"
      disabled
      >
      <i></i>
      <div class="btnText">BUTTON DISABLED</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="null"
      variant="outline-primaryfade"
      class="btnNavigation btnDisabled cursorDisabled"
      onclick="this.blur();"
      disabled
      >
      <b-spinner small type="grow" label="Spinning" class="btnIconLeft"></b-spinner>
      <i></i>
      <div class="btnText">BUTTON LOADING DISABLED</div>
      <i></i>
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
