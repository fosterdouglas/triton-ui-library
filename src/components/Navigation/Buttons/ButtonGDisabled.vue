<docs>

<h3>Disabled</h3>
<p>A disabled button is either in a state of loading or saving something, or is disabled for some specific reason, which can be added as context with a hoverable popover.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col class="buttonCol">
        <b-button
          :pressed="null"
          variant="-"
          class="btnNavigation btnDisabled cursorDisabled"
          onclick="this.blur();"
          disabled
          >
          <div class="btnText">BUTTON DISABLED</div>
        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="null"
          variant="-"
          class="btnNavigation btnDisabled cursorDisabled"
          onclick="this.blur();"
          disabled
          >
          <i>
            <b-spinner small type="grow" label="Spinning" class="btnIconLeft text-mediumdark"></b-spinner>
          </i>
          <div class="btnText">BUTTON LOADING DISABLED</div>
        </b-button>
      </b-col>

      <b-col id="PopoverDisabled" class="buttonCol disabledButtonContainer">
        <b-button
          :pressed="null"
          variant="-"
          class="btnNavigation btnDisabled cursorDisabled"
          onclick="this.blur();"
          disabled
          >
            <b-popover
              triggers="hover blur"
              placement="bottom"
              variant="medium"
              target="PopoverDisabled"
             >
             This button is disabled until the form has been completed.
           </b-popover>
          <div class="btnText">BUTTON DISABLED + HOVER TEXT</div>
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
