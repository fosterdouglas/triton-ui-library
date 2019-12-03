<docs>

<h3>Disabled</h3>
<p>...</p>

```js
<template>
  <div>

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

    <br/>

    <div id="PopoverDisabled" class="disabledButtonContainer">
      <b-button
        :pressed="null"
        variant="outline-primaryfade"
        class="btnNavigation btnDisabled cursorDisabled"
        onclick="this.blur();"
        disabled
        >
          <b-popover
            triggers="hover blur"
            placement="bottom"
            variant="medium"
            target="PopoverDisabled"
            :show.sync="showDisabled"
           >
           This button is disabled until the form has been completed.
         </b-popover>
        <div class="btnText">BUTTON DISABLED + HOVER TEXT</div>
      </b-button>
    </div>

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
