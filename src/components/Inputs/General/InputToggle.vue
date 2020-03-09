<docs>

<h3>Input Toggle</h3>
<p>A toggle for enabling and disabling functions. It can be mixed and matched in a given group with the Input Checkbox.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnSwitch"
          onclick="this.blur()"
         >
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch4" />
            <label class="custom-control-label cursorPointer" for="customSwitch4"></label>
          </div>
        </b-button>

      </b-col>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnSwitch"
          onclick="this.blur()"
         >
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch5" />
            <label class="custom-control-label cursorPointer" for="customSwitch5"></label>
          </div>
        </b-button>

      </b-col>
    </b-row>

  </b-container>

</template>
<script>
$(function () {
  $('#customSwitch5').prop('checked', true)
});
export default {

}
</script>
```

</docs>
